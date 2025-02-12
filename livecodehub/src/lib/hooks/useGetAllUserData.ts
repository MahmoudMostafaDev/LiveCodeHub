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
  return { streak, userInfo, todayLessons };
};

export default useGetAllUserData;
