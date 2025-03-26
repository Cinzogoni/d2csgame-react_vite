import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import apiFakeHomePageResources from "../../api/fakeApi/apiFakeHomePageResources";

function ProductList() {
  const productList = Object.values(apiFakeHomePageResources)
    .filter(Boolean)
    .flat()
    .sort((a, b) => a.name.localeCompare(b.name));

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
                  <h4 className={cx("dropdown")}>{products.description}</h4>
                  <div className={cx("popup")}>{products.description}</div>
                </td>

                <td>{products.rate}</td>
                <td>
                  <h4 className={cx("dropdown")}>hover</h4>
                  <div className={cx("expand")}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                        src={
                          products.character.avatar?.trim()
                            ? products.character.avatar
                            : "default-image.jpg"
                        }
                        alt={products.character.name}
                      />
                      <div className={cx("is-info")}>
                        <p className={cx("is-desc")}>
                          Id: {products.character.id}
                        </p>
                        <p className={cx("is-desc")}>
                          Name: {products.character.name}
                        </p>
                        <p className={cx("is-desc")}>
                          Attribute: {products.character.attribute}
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{products.productType}</td>
                <td>
                  <h4 className={cx("dropdown")}>hover</h4>
                  <div className={cx("expand")}>
                    <div className={cx("is-info")}>
                      <p
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: "700",
                          color: "#ffffffcc",
                        }}
                      >
                        Tag: {products.classify.title}
                      </p>
                      <p
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: "700",
                          color: "#ffffffcc",
                        }}
                      >
                        Class: {products.classify.class}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <h4 className={cx("dropdown")}>hover</h4>
                  <div className={cx("expand")}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        height: "70px",
                      }}
                    >
                      {products.images.map((image, index) => (
                        <Link
                          key={image.id}
                          to={image.filePath || "#"}
                          target="_blank"
                          className={cx("img-link")}
                        >
                          <img
                            src={
                              image.filePath?.trim()
                                ? image.filePath
                                : "default-image.jpg"
                            }
                            alt={`Image ${index + 1}`}
                            width="50"
                            height="50"
                            style={{ objectFit: "cover" }}
                          />
                          Img {index + 1}
                        </Link>
                      ))}
                    </div>
                  </div>
                </td>
                <td>
                  <Link to={products.demo} target="_blank">
                    Link
                  </Link>
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
