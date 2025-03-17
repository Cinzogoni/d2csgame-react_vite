import styles from "./TagList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function TagList() {
  return (
    <div className={cx("frame")}>
      <h1 style={{ textAlign: "center", fontSize: "6rem", color: "white" }}>
        TAG LIST
      </h1>
    </div>
  );
}

export default TagList;
