import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

export const useCustomQuery = (
  params?: unknown,
  options?: Omit<UseQueryOptions<unknown>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: ["key"],
    queryFn: async () => {
      const { data } = await axios.get("/api/users");
      return data;
    },
    ...options,
  });
};
