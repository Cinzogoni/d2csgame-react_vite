import styles from "../Methods/Methods.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import {
  FaHandHoldingUsd,
  FaCreditCard,
  FaFacebook,
  FaShopify,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import routeURLs from "../../routes/routes";
import { useLangSwitcher } from "../../provider/LangSwitcherProvider";

function Methods() {
  const { t } = useLangSwitcher();
  return (
    <section className={cx("methods")}>
      <Link to={routeURLs.buying} className={cx("link")}>
        <div className={cx("box")}>
          <FaShopify className={cx("icon")} />
          <h4 className={cx("category")}>{t("Primary.buyingGuide")}</h4>
        </div>
      </Link>

      <Link to={routeURLs.selling} className={cx("link")}>
        <div className={cx("box")}>
          <FaHandHoldingUsd className={cx("icon")} />
          <h4 className={cx("category")}>{t("Primary.sellingGuide")}</h4>
        </div>
      </Link>

      <Link to={routeURLs.payment} className={cx("link")}>
        <div className={cx("box")}>
          <FaCreditCard className={cx("icon")} />
          <h4 className={cx("category")}>{t("Primary.paymentMethods")}</h4>
        </div>
      </Link>

      <Link
        to="https://www.facebook.com/profile.php?id=61572222907515"
        className={cx("link")}
      >
        <div className={cx("box")}>
          <FaFacebook className={cx("icon")} />
          <h4 className={cx("category")}>{t("Primary.fanPage")}</h4>
        </div>
      </Link>
    </section>
  );
}

export default Methods;
