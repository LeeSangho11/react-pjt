import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axios from "axios";

export const useCustomMutation = (
  options?: Omit<UseMutationOptions<unknown>, "mutationFn">
) => {
  return useMutation({
    mutationFn: async (request: unknown) => {
      const { data } = await axios.post("/api/users", request);
      return data;
    },
    ...options,
  });
};
