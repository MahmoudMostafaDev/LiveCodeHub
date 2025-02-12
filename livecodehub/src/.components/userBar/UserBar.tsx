"use client"
import React, { useMemo, useRef } from 'react';
import styles from '@/styles/components/userBar/UserBar.module.scss';
import { useAppSelector } from '@/lib/reduxHooks';
import Button from '../ui/Button';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import UserProfile from './UserProfile';
import CloseButton from './CloseButton';
import useGetAllUserData from '@/lib/hooks/useGetAllUserData';
/**
 * The UserBar component.
 *
 * This component will be visible on every page except:
 * - /auth/login
 * - /auth/signup
 * - /landing
 *
 * This component will display the user's username and image, and the current streak.
 *
 * The component will also display a logout button.
 *
 * The component will be closed by default, and will open when the user clicks on the button
 * in the Header component.
 *
 * @returns The UserBar component.
 */
const UserBar = () => {
    const pathname = useRef(usePathname());
    const hiddenPaths = new Set(["/auth/login", "/auth/signup", "/landing"]);
    if (hiddenPaths.has(pathname.current)) return null;
    const store = useAppSelector(state => state.controUI);
    const { streak, userInfo, todayLessons } = useGetAllUserData();
    function getValue({ data, error, isLoading }: { data: any, error: { message: string, showErrorToUser: boolean }, isLoading: boolean }, loading: React.JSX.Element, success: React.JSX.Element, hideError: React.JSX.Element, showError: React.JSX.Element) {
        if (isLoading) return loading;
        if (data != null) return success;
        if (error.message !== "" && error.showErrorToUser) return showError;
        if (error.message !== "") return hideError;
        return loading;
    }
    function getStreakValue() {
        const loading = <span style={{ color: "yellow" }}>...</span>
        const success = <span style={{ color: "green" }}>{streak.data?.streak}</span>
        const hideError = <span style={{ color: "red" }}>Can't get your streak</span>
        const showError = <span style={{ color: "red" }}>{streak.error.message}</span>;
        return getValue(streak, loading, success, hideError, showError);
    }

    function getTodayLessonsValue() {
        const loading = <span style={{ color: "yellow" }}>...</span>
        const success = <span style={{ color: "green" }}>{todayLessons.data?.toString()}</span>
        const hideError = <span style={{ color: "red" }}>Can't get your Lessons</span>
        const showError = <span style={{ color: "red" }}>{todayLessons.error.message}</span>;
        return getValue(todayLessons, loading, success, hideError, showError);
    }
    function getUserValue() {
        const loading = <UserProfile username={"..."} image={"/utils/pf.png"} />
        const success = <UserProfile username={userInfo.data?.username || ""} image={(userInfo.data?.image != "" ? userInfo.data?.image : "/utils/pf.png") || "/utils/pf.png"} />
        const hideError = <span style={{ color: "red" }}>{"something went wrong"}</span>;
        const showError = <span style={{ color: "red" }}>{userInfo.error.message}</span>;
        return getValue(userInfo, loading, success, hideError, showError);
    }

    const streakValue = useMemo(() => getStreakValue(), [streak])
    const userValue = useMemo(() => getUserValue(), [userInfo])
    const todayLessonsValue = useMemo(() => getTodayLessonsValue(), [todayLessons])
    console.log("re")

    return (
        <div className={`${styles.container}  ${store.userBar.isOpen ? styles.open : ""}`}>
            <CloseButton />
            {userValue}
            <p>Streak : {streakValue} </p>
            <p>Today Lessons : {todayLessonsValue} </p>
            <Button title='Logout' onClick={() => signOut()} />
        </div>

    );
}

export default UserBar;

