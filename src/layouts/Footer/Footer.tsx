import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useLangSwitcher } from "../../provider/LangSwitcherProvider";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import routeURLs from "../../routes/routes";

type FooterLink = string;

type FooterType = {
  id: number;
  title: string;
  link: FooterLink;
};

function Footer() {
  const { t } = useLangSwitcher();

  const footer: readonly FooterType[] = [
    { id: 1, title: t("Primary.policy"), link: routeURLs.policy },
    { id: 2, title: t("Primary.guides"), link: routeURLs.guide },
    { id: 3, title: t("Primary.support"), link: routeURLs.support },
    { id: 4, title: t("Primary.q&A"), link: routeURLs.qna },
    { id: 5, title: t("Primary.contact"), link: routeURLs.contact },
  ];

  return (
    <Fragment>
      <div className={cx("links")}>
        {footer.map((item, index) => {
          return (
            <Link key={index} to={item.link} className={cx("link")}>
              {item.title}
            </Link>
          );
        })}
      </div>

      <h1 className={cx("copyright")}>© 2025 d2csgame. All rights reserved.</h1>
    </Fragment>
  );
}

export default Footer;
