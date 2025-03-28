import styles from "./ProductForm.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useRef, useEffect } from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

type ProductForm = {
  hideActiveProduct: (value: boolean) => void;
};

function ProductForm({ hideActiveProduct }: ProductForm) {
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        hideActiveProduct(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hideActiveProduct]);

  return (
    <div className={cx("wrapper")} ref={formRef}>
      <DisabledByDefaultIcon
        className={cx("close")}
        onClick={() => hideActiveProduct(false)}
      />
      <form className={cx("form")}>
        <input
          className={cx("input")}
          placeholder="ORDINAL NUMBER"
          type="number"
        />

        <div className={cx("info")}>
          <div className={cx("frame")}>
            <input className={cx("input-1")} placeholder="ID" type="text" />
            <input className={cx("input-1")} placeholder="NAME" type="text" />
            <input className={cx("input-1")} placeholder="PRICE" type="text" />
            <input
              className={cx("input-1")}
              placeholder="DESCRIPTION"
              type="text"
            />
            <input className={cx("input-1")} placeholder="RATE" type="text" />
            <input
              className={cx("input-1")}
              placeholder="CHARACTER"
              type="text"
            />
          </div>
          <div className={cx("frame")}>
            <input
              className={cx("input-1")}
              placeholder="PRODUCT TYPE"
              type="text"
            />
            <input className={cx("input-1")} placeholder="TAGS" type="text" />
            <input className={cx("input-1")} placeholder="IMAGES" type="text" />
            <input className={cx("input-1")} placeholder="DEMO" type="text" />
            <input
              className={cx("input-1")}
              placeholder="QUANTITY"
              type="text"
            />
            <input
              className={cx("input-1")}
              placeholder="SALE OFF"
              type="text"
            />
          </div>
        </div>

        <button className={cx("submit-btn")} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
