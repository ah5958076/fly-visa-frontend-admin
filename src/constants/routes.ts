import {
  faAlignLeft,
  faBell,
  faChartLine,
  faCommentDots,
  faPassport,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../pages/Dashboard";
import Messages from "../pages/Messages";
import Feedback from "../pages/Feedback";
import Notification from "../pages/Notification";
import Visa from "../pages/Visa";
import Employees from "../pages/Employees";
import Profile from "../pages/Profile";

export default [
  {
    title: "Dashboard",
    icon: faChartLine,
    route: "/",
    component: Dashboard(),
    disabled: true,
  },
  {
    title: "Messages",
    icon: faCommentDots,
    route: "/messages",
    component: Messages(),
    disabled: true,
  },
  {
    title: "Feedback",
    icon: faAlignLeft,
    route: "/feedback",
    component: Feedback(),
    disabled: true,
  },
  {
    title: "Notification",
    icon: faBell,
    route: "/notification",
    component: Notification(),
    disabled: true,
  },
  {
    title: "Visa",
    icon: faPassport,
    route: "/visa",
    component: Visa(),
    disabled: true,
  },
  {
    title: "Employees",
    icon: faUserGroup,
    route: "/employees",
    component: Employees(),
    disabled: true,
  },
  {
    title: "Profile",
    icon: faUser,
    route: "/profile",
    component: Profile(),
    disabled: true,
  },
];
