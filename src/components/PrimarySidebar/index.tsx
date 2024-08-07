import classes from "./styles.module.css";
import routes from "../../constants/routes";
import { Route } from "../../constants/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useLocation } from "react-router-dom";
import { UserPlaceholder } from "../../constants/images";
import {
  faArrowRightFromBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function PrimarySidebar() {
  const location = useLocation();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const profileRoute = routes.find(
    (route: Route) => route.title.toLowerCase() === "profile"
  );

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className={classes.mobileBarToggle}
      >
        <FontAwesomeIcon icon={isOpened ? faXmark : faBars} />
      </button>
      <div className={`${classes.sideBar} ${isOpened ? classes.opened : ""}`}>
        <div className={classes.firstHalf}>
          <a href={profileRoute?.route} className={classes.profilePicture}>
            <img src={UserPlaceholder} />
          </a>

          <div className={classes.links}>
            {routes.map((route: Route, index: number) => {
              return (
                <a
                  key={index}
                  aria-disabled={!!route.disabled}
                  href={route?.route}
                  className={`${classes.link} ${
                    location.pathname === route.route ? classes.active : ""
                  }`}
                >
                  {route.icon && (
                    <FontAwesomeIcon
                      size={"lg"}
                      icon={route?.icon as IconProp}
                    />
                  )}
                  <p className="bold">{route.title}</p>
                </a>
              );
            })}
          </div>
        </div>

        <a
          onClick={handleLogout}
          className={`${classes.link} ${classes.logout}`}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <p className="bold">Logout</p>
        </a>
      </div>
      <div className={classes.overlay} onClick={() => setIsOpened(false)}></div>
    </>
  );
}

export default PrimarySidebar;
