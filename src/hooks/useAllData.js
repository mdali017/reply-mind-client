import { useQuery } from "react-query";

const useAllData = () => {
  const {
    data: allData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/data");
      return res.json();
    },
  });

  return [allData, loading, refetch];
};

export default useAllData;
