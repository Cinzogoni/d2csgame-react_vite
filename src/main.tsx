import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import { ReduxToolkitProvider } from "./redux-toolkit/ReduxToolkitProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ReduxToolkitProvider>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </ReduxToolkitProvider>
);
