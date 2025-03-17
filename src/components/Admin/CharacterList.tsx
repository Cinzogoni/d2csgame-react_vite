import styles from "./CharacterList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function CharacterList() {
  return (
    <div className={cx("frame")}>
      <h1 style={{ textAlign: "center", fontSize: "6rem", color: "white" }}>
        CHARACTER LIST
      </h1>
    </div>
  );
}

export default CharacterList;
