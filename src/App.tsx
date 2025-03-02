import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import routeLinks from "./config/router";

import { LangSwitcherProvider } from "./provider/LangSwitcherProvider";

import { Fragment } from "react/jsx-runtime";
import MainLayout from "./layouts/MainLayout";

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <LangSwitcherProvider>{children}</LangSwitcherProvider>
    </I18nextProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app">
          <Routes>
            <Route>
              {routeLinks.map((route, index) => {
                const Page = route.component;
                const Layout = route.layout === null ? Fragment : MainLayout;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Fragment>
                        <Layout>
                          <Page />
                        </Layout>
                      </Fragment>
                    }
                  />
                );
              })}
            </Route>
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
