import Admin from "../components/Admin/Admin";

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { RootState } from "../redux-toolkit/store";
// import { useSelector } from "react-redux";

import apiFakeAdmin from "../api/fakeApi/apiFakeAdmin";

function AdminPage() {
  const { adminName } = useParams();
  const navigate = useNavigate();

  //lam_dev api admin thật
  // const currentAdmin = useSelector(
  //   (state: RootState) => state.apiAdmins.currentAdmin
  // );

  // useEffect(() => {
  //   if (!currentAdmin || currentAdmin.adminName !== adminName) {
  //     navigate("/");
  //   }
  // }, [currentAdmin, adminName, navigate]);

  // return currentAdmin ? <Admin /> : null;

  const matchedAdminFake = apiFakeAdmin.ADMIN_001.find(
    (name) => name.adminName === adminName
  );

  useEffect(() => {
    if (!matchedAdminFake || matchedAdminFake.adminName !== adminName) {
      navigate("/");
    }
  }, [matchedAdminFake, adminName, navigate]);

  return matchedAdminFake ? <Admin /> : null;
}

export default AdminPage;
