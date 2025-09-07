import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFormQuery = () => {
  return useQuery({
    queryKey: ["form"],
    queryFn: async () => {
      const res = await axios.get("mockData.json");
      return res.data;
    },
  });
};
