import PrimarySidebar from "../../components/PrimarySidebar";
import { HomePageTemplate } from "../../constants/interfaces";
import classes from "./styles.module.css";

function HomePage(props: HomePageTemplate) {
  return (
    <div className={classes.container}>
      <PrimarySidebar />
      <div className={classes.container}>{props.children}</div>
    </div>
  );
}

export default HomePage;
