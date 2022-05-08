import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FatihahView from "../views/FatihahView.vue";
import BaqarahView from "../views/BaqarahView.vue";
import AliImranView from "../views/AliImranView.vue";
import AnNisaView from "../views/AnNisaView.vue";
import AlMaidahView from "../views/AlMaidahView.vue";
import AlAnamView from "../views/AlAnamView.vue";
import AlArafView from "../views/AlArafView.vue";
import AlAnfalView from "../views/Al-AnfalView.vue";
import AtTawbahView from "../views/AtTawbahView.vue";
import YunusView from "../views/YunusView.vue";
import HudView from "../views/HudView.vue";
import YusufView from "../views/YusufView.vue";
import ArRadView from "../views/ArRadView.vue";
import IbrahimView from "../views/IbrahimView.vue";
import AlHijrView from "../views/AlHijrView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/fatihah",
      name: "fatihah",
      component: FatihahView,
    },
    {
      path: "/baqarah",
      name: "baqarah",
      component: BaqarahView,
    },
    {
      path: "/ali-imran",
      name: "ali-imran",
      component: AliImranView,
    },
    {
      path: "/nisa",
      name: "nisa",
      component: AnNisaView,
    },
    {
      path: "/maidah",
      name: "maidah",
      component: AlMaidahView,
    },
    {
      path: "/anam",
      name: "anam",
      component: AlAnamView,
    },
    {
      path: "/araf",
      name: "araf",
      component: AlArafView,
    },
    {
      path: "/anfal",
      name: "anfal",
      component: AlAnfalView,
    },
    {
      path: "/tawbah",
      name: "tawbah",
      component: AtTawbahView,
    },
    {
      path: "/yunus",
      name: "yunus",
      component: YunusView,
    },
    {
      path: "/hud",
      name: "hud",
      component: HudView,
    },
    {
      path: "/yusuf",
      name: "yusuf",
      component: YusufView,
    },
    {
      path: "/rad",
      name: "rad",
      component: ArRadView,
    },
    {
      path: "/ibrahim",
      name: "ibrahim",
      component: IbrahimView,
    },
    {
      path: "/hijr",
      name: "hijr",
      component: AlHijrView,
    },
  ],
});

export default router;
