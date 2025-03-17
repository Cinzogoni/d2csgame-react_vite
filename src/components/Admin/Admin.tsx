import styles from "./Admin.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState } from "react";

import ProductList from "./ProductList";
import CharacterList from "./CharacterList";
import TagList from "./TagList";
import { Fragment } from "react";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function Admin() {
  const [activeComponent, setActiveComponent] = useState<string>("ProductList");

  return (
    <div className={cx("container")}>
      <div className={cx("sidebar")}>
        <MedicalServicesIcon
          className={cx("icon")}
          onClick={() => setActiveComponent("ProductList")}
        />
        <GroupAddIcon
          className={cx("icon")}
          onClick={() => setActiveComponent("CharacterList")}
        />
        <LocalOfferIcon
          className={cx("icon")}
          onClick={() => setActiveComponent("TagList")}
        />
      </div>

      <Fragment>
        {activeComponent === "ProductList" && <ProductList />}
        {activeComponent === "CharacterList" && <CharacterList />}
        {activeComponent === "TagList" && <TagList />}
      </Fragment>
    </div>
  );
}

export default Admin;
