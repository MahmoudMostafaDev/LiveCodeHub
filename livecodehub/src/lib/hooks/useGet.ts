import { useEffect, useState } from "react";

export type GetStructure<T> = {
  data: T | null;
  error: string;
  showErrorToUser: boolean;
};
const useGet = <T>(getFunction: () => Promise<GetStructure<T>>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState({ message: "", showErrorToUser: false });
  const [isLoading, setIsLoading] = useState(false);
  async function fetching() {
    setIsLoading(true);
    try {
      const { data, error, showErrorToUser } = await getFunction();
      setData(data);
      setError({ message: error, showErrorToUser });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unexpected Error";
      setError({ message: errorMessage, showErrorToUser: false });
    } finally {
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetching();
  }, []);

  return { data, error, isLoading, reFetch: fetching };
};

export default useGet;
