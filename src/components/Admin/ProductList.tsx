import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import apiFakeHomePageResources from "../../api/fakeApi/apiFakeHomePageResources";

function ProductList() {
  const productList = Object.values(apiFakeHomePageResources)
    .filter(Boolean)
    .flat();

  return (
    <div className={cx("frame")}>
      <div className={cx("table-wrapper")}>
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
            {productList.map((products, index) => (
              <tr key={index}>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>

                <td>
                  {products.description}
                  <div className={cx("popup")}>{products.description}</div>
                </td>

                <td>{products.rate}</td>
                <td>...</td>
                <td>{products.productType}</td>
                <td>...</td>
                <td>...</td>
                <td>
                  <Link to={products.demo}>Link</Link>
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
            ))}
          </tbody>
        </table>
      </div>

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
