import { create } from "zustand";

/**
 * 컴포넌트 별로 객체를 나눠서 거기에서만 사용하는
 * 공통 action을 만들 예정
 * reset도 만들면 좋을거같음.
 */

interface IFormData {
  name: string;
  age: number;
}

interface IStoreData {
  obj1: IFormData;
  obj2: IFormData;
}

interface IStoreAction {
  setObj1Field: <K extends keyof IFormData>(
    key: K,
    values: IFormData[K]
  ) => void;
}

export const formStore = create<IStoreData & IStoreAction>((set) => ({
  obj1: { age: 0, name: "" },
  obj2: { age: 0, name: "" },

  setObj1Field: (key, value) => {
    set((state) => ({
      obj1: { ...state.obj1, [key]: value },
    }));
  },
}));
