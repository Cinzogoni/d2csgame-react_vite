import AuthForm from "../components/AuthForm/AuthForm";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import { setFormType } from "../redux-toolkit/userStates";
import { setAdminFormType } from "../redux-toolkit/adminStates";

function AuthenticationPage() {
  const dispatch = useDispatch();
  const formType = useSelector((state: RootState) => state.userStates.formType);

  const handleSetFormType = (type: "login" | "signup" | "loginAdmin") => {
    if (type === "loginAdmin") {
      dispatch(setAdminFormType(type));
    } else {
      dispatch(setFormType(type));
    }
  };

  return <AuthForm formType={formType} setFormType={handleSetFormType} />;
}

export default AuthenticationPage;
