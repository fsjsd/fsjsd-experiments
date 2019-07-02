/* eslint-disable no-multi-spaces */
import {
  MdHome,
  MdAttachMoney,
  MdLocalLibrary,
  MdHelp,
  MdSettings,
  MdReceipt,
  MdAssessment,
  MdPieChart,
  MdDescription,
  MdPermContactCalendar
} from "react-icons/md"; // pick more icons here: https://react-icons.netlify.com/#/icons/fa

import { Home } from "./demos/home";
import { Index as CAIndex } from "./demos/controlled-animation/index";
import { Problem as CAProblem } from "./demos/controlled-animation/Problem";
import { Demo1 as CADemo1 } from "./demos/controlled-animation/Demo1";
import { Demo2 as CADemo2 } from "./demos/controlled-animation/Demo2";

// Route Definitions Groups
// ========================
// simple grouping strategy to assist with navigation groups.
const defaultGroup = "";
const animGroup = "Animation";

const navItemGroups = [defaultGroup, animGroup];

// Simple factory func to set defaults for all route definitions.
// Note in AppRoutes below where some routes override these defaults.
const makeRouteDefinition = r => ({
  showInNav: true, // whether route appears in main site navigation
  showInSearch: true, // whether route appears in search results
  showSubNav: false /* when true, will render any child routes (defined by their
                          parent prop link) in navigation */,
  group: defaultGroup, // grouping for item
  // title              - route's title as it will appear in all UI comps
  // navLabel           - overrides title when shown in left nav
  // icon               - icon component to show in UI comps
  // component          - page/screen component that will be rendered in main <Route>
  // exact              - optional react-router exact match prop, echoed onto <Route>
  // parent             - path of parent route, facilitates breadcrumbs component
  ...r
});

// Route Definitions
// ========================
// Definitions for your app routes!
//
// These need to match ordering rules for React Router. It's simple
// to extend this structure with groupings (for Switch) and nested
// routes.

const appRoutes = {
  "/": makeRouteDefinition({
    title: "Summary",
    navlabel: "Home",
    icon: MdHome,
    component: Home,
    exact: true
  }),
  "/controlledanimation": makeRouteDefinition({
    title: "Controlled animations",
    icon: MdSettings,
    component: CAIndex,
    exact: true,
    group: animGroup,
    showSubNav: true
  }),
  "/controlledanimation/problem": makeRouteDefinition({
    title: "The problem",
    parent: "/controlledanimation",
    icon: MdSettings,
    component: CAProblem,
    exact: true,
    group: animGroup,
    showSubNav: false
  }),
  "/controlledanimation/demo1": makeRouteDefinition({
    title: "Demo 1",
    parent: "/controlledanimation",
    icon: MdSettings,
    component: CADemo1,
    exact: true,
    group: animGroup,
    showSubNav: false
  }),
  "/controlledanimation/demo2": makeRouteDefinition({
    title: "Demo 2",
    parent: "/controlledanimation",
    icon: MdSettings,
    component: CADemo2,
    exact: true,
    group: animGroup,
    showSubNav: false
  })
  // "/breadcrumbs/1": makeRouteDefinition({
  //   title: "Level 1",
  //   icon: MdSettings,
  //   component: Home,
  //   parent: "/breadcrumbs",
  //   exact: true,
  //   group: demosGroup
  // }),
};

export { makeRouteDefinition, navItemGroups, appRoutes };
