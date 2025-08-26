import Alert from "@/app/components/_comm/Alert";
import { modalStore } from "@/app/stores/modalStore";

const MODAL_COMPONENTS = {
  alert: Alert,
};

const ModalRenderer = () => {
  const modalMap = modalStore((state) => state.modalMap);
  return (
    <>
      {Object.entries(modalMap).map(([key, { isOpen, props }]) => {
        if (!isOpen) return null;
        const Component =
          MODAL_COMPONENTS[key as keyof typeof MODAL_COMPONENTS];

        return <Component {...props} />;
      })}
    </>
  );
};
export default ModalRenderer;
