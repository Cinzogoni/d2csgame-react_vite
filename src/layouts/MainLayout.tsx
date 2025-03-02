import styles from "../styles/MainLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import GridSystem from "../components/GridSystem/GridSystem";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cx("container")}>
      <header className={cx("header")}>
        <Header />
      </header>
      <main className={cx("main")}>
        <GridSystem gridClass={cx("grid")} wideClass={cx("wide")}>
          {children}
        </GridSystem>
      </main>
      <footer className={cx("footer")}>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
