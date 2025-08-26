import { create } from "zustand";

type ModalData = Record<string, unknown>;

type ModalStore = {
  modalMap: Record<string, { isOpen: boolean; props?: ModalData }>;
  openModal: (key: string, props?: ModalData) => void;
  closeModal: (key: string) => void;
};

export const modalStore = create<ModalStore>((set) => ({
  modalMap: {},
  openModal: (key, props) =>
    set((state) => ({
      modalMap: {
        ...state.modalMap,
        [key]: { isOpen: true, props },
      },
    })),
  closeModal: (key) =>
    set((state) => ({
      modalMap: {
        ...state.modalMap,
        [key]: { isOpen: false },
      },
    })),
}));
