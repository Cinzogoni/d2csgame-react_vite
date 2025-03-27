import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState } from "react";
import { Link } from "react-router-dom";

import { Fragment } from "react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import apiFakeHomePageResources from "../../api/fakeApi/apiFakeHomePageResources";

function ProductList() {
  const productsPerPage = 30;
  const [currentPage, setCurrentPage] = useState<number>(1);

  //lam_dev thay apiFakeHomePageResources === api of all product
  const productList = Object.values(apiFakeHomePageResources)
    .filter(Boolean)
    .flat()
    .sort((a, b) => a.name.localeCompare(b.name));

  const totalPages = Math.ceil(productList.length / productsPerPage);

  const paginatedProducts = productList.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={cx("frame")}>
      <div className={cx("table-wrapper")}>
        <table className={cx("table")}>
          <thead>
            <tr>
              <th>STT</th>
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
            {paginatedProducts.map((products, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * productsPerPage + index + 1}</td>
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
          <ArrowLeftIcon
            className={cx("page-change", { disabled: currentPage === 1 })}
            onClick={() => handlePageChange(currentPage - 1)}
          />

          <div className={cx("page-numbers")}>
            {/* Nếu totalPages <= 5, hiển thị tất cả */}
            {totalPages <= 5 &&
              [...Array(totalPages)].map((_, index) => (
                <span
                  key={index + 1}
                  className={cx("numbers", {
                    active: currentPage === index + 1,
                  })}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </span>
              ))}

            {/* Nếu totalPages > 5 */}
            {totalPages > 5 && (
              <Fragment>
                {/* Hiển thị 1 2 3 4 5 */}
                {[1, 2, 3, 4, 5].map((page) => (
                  <span
                    key={page}
                    className={cx("numbers", { active: currentPage === page })}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </span>
                ))}

                {/* Hiển thị dấu "..." và trang cuối */}
                <span className={cx("dots")}>...</span>
                <span
                  className={cx("numbers", {
                    active: currentPage === totalPages,
                  })}
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </span>
              </Fragment>
            )}
          </div>

          <ArrowRightIcon
            className={cx("page-change", {
              disabled: currentPage === totalPages,
            })}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
