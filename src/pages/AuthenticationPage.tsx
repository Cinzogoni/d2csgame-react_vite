import AuthForm from "../components/AuthForm/AuthForm";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import { setFormType } from "../redux-toolkit/userStates";

function AuthenticationPage() {
  const dispatch = useDispatch();
  const formType = useSelector((state: RootState) => state.userStates.formType);

  return (
    <AuthForm
      formType={formType}
      setFormType={(type) => dispatch(setFormType(type))}
    />
  );
}

export default AuthenticationPage;
