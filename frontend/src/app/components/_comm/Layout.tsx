import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@/app/styles/Layout.module.css";
import ModalRenderer from "../modals/ModalRenderer";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet /> {/* 라우트 페이지가 여기 표시됨 */}
      </main>
      <Footer />
      <ModalRenderer />
    </div>
  );
}
