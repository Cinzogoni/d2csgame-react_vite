import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "react-router-dom";

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
            <th>Type</th>
            <th>Classify</th>
            <th>Images</th>
            <th>Demo</th>
            <th>Quantity</th>
            <th>Sale Off</th>
          </tr>
        </thead>
        <tbody>
          {/* lam_dev map dữ liệu động ở đây */}
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
          </tr>
        </tbody>
      </table>

      <div className={cx("pagination")}></div>
    </div>
  );
}

export default ProductList;
