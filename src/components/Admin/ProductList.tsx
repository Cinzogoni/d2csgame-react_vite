import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function ProductList() {
  return (
    <div className={cx("frame")}>
      <table className={cx("table")}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Rate</th>
            <th>Character</th>
            <th>Prod type</th>
            {/* Tags === Classify */}
            <th>Tags</th>
            {/* Tối thiếu 3 tấm  */}
            <th>Images</th>
            <th>Demo</th>
            <th>Quantity</th>
            <th>Sale Off</th>
            <th>EDIT</th>
            <th>DEL</th>
          </tr>
        </thead>
        <tbody>
          {/* lam_dev map dữ liệu động ở đây, chỗ "..." sẽ hiện các trường con */}
          <tr>
            <td>1</td>
            <td>Jagged Honor</td>
            <td>765.000</td>
            <td>...</td>
            <td>4.5</td>
            <td>...</td>
            <td>SET</td>
            <td>...</td>
            <td>...</td>
            <td>
              <Link to="https://www.youtube.com/watch?v=TkwT4TGthYA">Link</Link>
            </td>
            <td>0</td>
            <td>0</td>
            <td>
              <EditIcon className={cx("func")} />
            </td>
            <td>
              <DeleteIcon className={cx("func")} />
            </td>
          </tr>
        </tbody>
      </table>

      <div className={cx("create-product")}>
        <div className={cx("create-box")}>
          <AddCircleIcon className={cx("create")} />
          <h2 className={cx("text")}>Create Product</h2>
        </div>
      </div>

      {/* Phân trang */}
      <div className={cx("pagination")}>
        <div className={cx("pagination-box")}>
          <ArrowLeftIcon className={cx("page-change")} />
          {/* lam_dev map dữ liệu động từ api */}
          <div className={cx("page-numbers")}>
            {["1", "2", "3", "4", "5", "..."].map((num, index) => (
              <span className={cx("numbers")} key={index}>
                {num}
              </span>
            ))}
          </div>
          <ArrowRightIcon className={cx("page-change")} />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
