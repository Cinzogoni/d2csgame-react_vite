import { Fragment } from "react/jsx-runtime";
import Banner from "../components/Banner/Banner";
import Methods from "../components/Methods/Methods";

function HomePage() {
  return (
    <Fragment>
      <Banner />
      <Methods />
    </Fragment>
  );
}

export default HomePage;
