import styles from "./Admin.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import { logoutAdmin } from "../../redux-toolkit/apiAdminResources";
import { useNavigate } from "react-router-dom";

import ProductList from "./ProductList";
import CharacterList from "./CharacterList";
import TagList from "./TagList";
import { Fragment } from "react";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Admin() {
  const [activeComponent, setActiveComponent] = useState<string>("ProductList");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentAdmin = useSelector(
    (state: RootState) => state.apiAdmins.currentAdmin
  );
  const handleLogout = () => {
    if (currentAdmin) {
      dispatch(logoutAdmin());
      navigate(`/`);
    }
  };

  useEffect(() => {
    if (!currentAdmin) {
      navigate("/");
    }
  }, [currentAdmin, navigate]);

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
        <ExitToAppIcon className={cx("icon")} onClick={handleLogout} />
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
