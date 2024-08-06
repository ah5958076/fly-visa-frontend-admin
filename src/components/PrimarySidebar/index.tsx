import classes from "./styles.module.css";
import routes from "../../constants/routes";
import { Route } from "../../constants/interfaces";

function PrimarySidebar() {
  return (
    <div className={classes.sideBar}>
      {routes.map((route: Route, index: number) => {
        return <p key={index}>{route.title}</p>;
      })}
    </div>
  );
}

export default PrimarySidebar;
