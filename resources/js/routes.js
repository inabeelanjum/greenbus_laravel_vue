import { createRouter, createWebHistory } from "vue-router";
import Mainpage from "./components/Mainpage.vue";
import MainAddFleet from './components/MainAddFleet.vue'
import LoginPage from './components/LoginPage.vue'
import MainFleetList from './components/MainFleetList.vue'
import MainFleetTripDetails from './components/MainFleetTripDetails.vue' 
import MainRouteList from './components/MainRouteList.vue' 
import MainAddRoute from './components/MainAddRoute.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Mainpage,
  },
  {
    path: "/addfleet",
    name: "addfleet",
    component: MainAddFleet,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/fleetlist",
    name: "fleetlist",
    component: MainFleetList,
  },
  {
    path: "/tripdetails",
    name: "tripdetails",
    component: MainFleetTripDetails,
  },
  {
    path: "/routelist",
    name: "routelist",
    component: MainRouteList,
  },
  {
    path: "/addroute",
    name: "addroute",
    component: MainAddRoute,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;