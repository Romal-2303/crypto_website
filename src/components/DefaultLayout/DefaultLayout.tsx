import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./DefaultLayout.module.scss";
import PageProgress from "../PageProgress/PageProgress";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes["default-layout"]}>
      <Header />
      {children}
      <PageProgress />
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
