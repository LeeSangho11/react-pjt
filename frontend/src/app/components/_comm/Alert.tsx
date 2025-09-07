import { modalStore } from "@/app/stores/modalStore";
import styles from "@/app/styles/Alert.module.css";

interface AlertModalProps {
  title?: string;
  message?: string;
  onConfirm?: () => void;
}

const Alert = ({ title = "알림", message }: AlertModalProps) => {
  const closeModal = modalStore((state) => state.closeModal);
  const modalMap = modalStore((state) => state.modalMap);

  console.log("modalMap >>>", modalMap);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>

        <div className={styles.actions}>
          <button
            className={styles.cancel}
            onClick={() => closeModal(Object.keys(modalMap)[0])}
          >
            취소
          </button>
          {/* <button className={styles.confirm} onClick={handleConfirm}>
            확인
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default Alert;
