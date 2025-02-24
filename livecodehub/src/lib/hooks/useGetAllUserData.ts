import {
  getStreak,
  getTodayLessons,
  getUserInfor,
} from "../FetchFunctions/GETfunctions";
import useGet from "./useGet";

const useGetAllUserData = () => {
  const streak = useGet(getStreak);
  const userInfo = useGet(getUserInfor);
  const todayLessons = useGet(getTodayLessons);
  function refresh() {
    streak.reFetch();
    userInfo.reFetch();
    todayLessons.reFetch();
  }
  return { streak, userInfo, todayLessons, refresh };
};

export default useGetAllUserData;
