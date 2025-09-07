import styles from "@/app/styles/Home.module.css";
import { modalStore } from "../stores/modalStore";
export default function Home() {
  const openModal = modalStore((state) => state.openModal);

  return (
    <section className={styles.container}>
      <h2>홈</h2>
      <p>리액트 연습</p>
      <button
        className={styles.modalButton}
        onClick={() => openModal("alert", { message: "알럿 test" })}
      >
        모달 열기
      </button>
    </section>
  );
}
