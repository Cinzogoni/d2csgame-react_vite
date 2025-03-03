import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import styles from "./ShoppingCart.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "react-router-dom";
import routeURLs from "../../routes/routes";

function ShoppingCart() {
  return (
    <div className={cx("wrapper")}>
      <Link to={routeURLs.shoppingCart}>
        <div className={cx("cart")}>
          <h4 className={cx("quantity")}>0</h4>
          <ShoppingCartOutlinedIcon className={cx("icon")} />
        </div>
      </Link>
    </div>
  );
}

export default ShoppingCart;
