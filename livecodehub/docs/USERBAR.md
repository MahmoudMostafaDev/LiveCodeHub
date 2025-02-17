# UserBar Component Documentation

## Overview

The `UserBar` component is a sidebar that displays user information, including the current streak, today's lessons, and user profile details. It also provides a logout button. The component fetches data asynchronously and handles loading, success, and error states.

## Features

- Fetches and displays **user streak**, **today's lessons**, and **user profile**.
- Uses `useMemo` to optimize re-rendering.
- Prevents unnecessary renders caused by `usePathname`.
- Avoids rendering on specific paths (`/auth/login`, `/auth/signup`, `/landing`).
- Displays appropriate messages for loading, errors, and success states.

---

## Challenges and Solutions

### **1️⃣ Excessive Re-Renders**

#### Problem:

- The component was re-rendering multiple times on page load due to multiple independent API calls.
- Using `useGet` three times (`streak`, `userInfo`, `todayLessons`) caused separate re-renders when each request resolved.

#### Solution:

✅ **Combined all API calls into a single custom hook (`useGetAllUserData`)** to ensure only one render happens when all data is available.

```tsx
const useGetAllUserData = () => {
  const streak = useGet(getStreak);
  const userInfo = useGet(getUserInfor);
  const todayLessons = useGet(getTodayLessons);
  return { streak, userInfo, todayLessons };
};
```

---

### **2️⃣ usePathname Causing Unnecessary Re-Renders**

#### Problem:

- Using `usePathname()` inside the component caused a re-render whenever the route changed.

#### Solution:

✅ **Used `useRef` to store pathname on first render and prevent re-renders due to route changes.**

```tsx
const pathname = useRef(usePathname());
```

---

### **3️⃣ Complex Conditional Rendering for API Data**

#### Problem:

- Repeated code for handling loading, error, and success states.
- Hard to maintain when adding more API calls.

#### Solution:

✅ **Created a reusable function `getValue()`** to handle all cases for API response states.

```tsx
function getValue(
  { data, error, isLoading },
  loading,
  success,
  hideError,
  showError
) {
  if (isLoading) return loading;
  if (data != null) return success;
  if (error.message !== "" && error.showErrorToUser) return showError;
  if (error.message !== "") return hideError;
  return loading;
}
```

✅ **Now, each value can be rendered using concise functions like:**

```tsx
function getStreakValue() {
  return getValue(
    streak,
    <span style={{ color: "yellow" }}>...</span>,
    <span style={{ color: "green" }}>{streak.data?.streak}</span>,
    <span style={{ color: "red" }}>Can't get your streak</span>,
    <span style={{ color: "red" }}>{streak.error.message}</span>
  );
}
```

---

### **4️⃣ Preventing Unnecessary Computation**

#### Problem:

- The `getStreakValue()`, `getTodayLessonsValue()`, and `getUserValue()` functions were recomputed on every render, even when data didn't change.

#### Solution:

✅ **Used `useMemo` to cache computed values and avoid unnecessary re-evaluations.**

```tsx
const streakValue = useMemo(() => getStreakValue(), [streak]);
const userValue = useMemo(() => getUserValue(), [userInfo]);
const todayLessonsValue = useMemo(() => getTodayLessonsValue(), [todayLessons]);
```

✅ **Now, these values are only recomputed when their respective dependencies change.**

---

## **Final Results** 🚀

✔ Reduced unnecessary re-renders 🎯  
✔ Optimized API calls 🏎  
✔ Cleaned up repetitive code ✅  
✔ Improved maintainability 🔥

This version ensures the `UserBar` component runs efficiently while handling API responses properly!
