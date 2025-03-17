import routeURLs from "../routes/routes";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

import AuthenticationPage from "../pages/AuthenticationPage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";

import PolicyPage from "../pages/PolicyPage";
import GuidesPage from "../pages/GuidesPage";
import SupportPage from "../pages/SupportPage";
import QnAPage from "../pages/QnAPage";
import ContactPage from "../pages/ContactPage";

import CharactersPage from "../pages/CharactersPage";
import SetCategoriesPage from "../pages/SetCategoriesPage";
import ItemCategoriesPage from "../pages/ItemCategoriesPage";
import SteamPage from "../pages/SteamPage";
import OthersPage from "../pages/OthersPage";

import SetClassifyPage from "../pages/SetClassifyPage";
import ItemClassifyPage from "../pages/ItemClassifyPage";
import SteamClassifyPage from "../pages/SteamClassifyPage";
import OthersClassifyPage from "../pages/OthersClassifyPage";

import SetTheClassPage from "../pages/SetTheClassPage";
import ItemTheClassPage from "../pages/ItemTheClassPage";
import SteamTheClassPage from "../pages/SteamTheClassPage";
import OthersTheClassPage from "../pages/OthersTheClassPage";

import ShoppingCartPage from "../pages/ShoppingCartPage";

import BuyingPage from "../pages/BuyingPage";
import SellingPage from "../pages/SellingPage";
import PaymentPage from "../pages/PaymentPage";

import CharactersName from "../pages/CharactersName";

const routeLinks = [
  //Home
  { path: routeURLs.home, component: HomePage, layout: MainLayout },
  //User
  {
    path: routeURLs.authentication,
    component: AuthenticationPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.user,
    component: UserPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.admin,
    component: AdminPage,
    layout: null,
  },
  //Header - Navbar
  { path: routeURLs.heros, component: CharactersPage, layout: MainLayout },
  { path: routeURLs.set, component: SetCategoriesPage, layout: MainLayout },
  { path: routeURLs.item, component: ItemCategoriesPage, layout: MainLayout },
  { path: routeURLs.steam, component: SteamPage, layout: MainLayout },
  { path: routeURLs.others, component: OthersPage, layout: MainLayout },
  {
    path: routeURLs.setClassify,
    component: SetClassifyPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.itemClassify,
    component: ItemClassifyPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.steamClassify,
    component: SteamClassifyPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.othersClassify,
    component: OthersClassifyPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.setClass,
    component: SetTheClassPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.itemClass,
    component: ItemTheClassPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.steamClass,
    component: SteamTheClassPage,
    layout: MainLayout,
  },
  {
    path: routeURLs.othersClass,
    component: OthersTheClassPage,
    layout: MainLayout,
  },
  //Header - Actions
  {
    path: routeURLs.shoppingCart,
    component: ShoppingCartPage,
    layout: MainLayout,
  },

  //Footer
  { path: routeURLs.policy, component: PolicyPage, layout: MainLayout },
  { path: routeURLs.guide, component: GuidesPage, layout: MainLayout },
  { path: routeURLs.support, component: SupportPage, layout: MainLayout },
  { path: routeURLs.qna, component: QnAPage, layout: MainLayout },
  { path: routeURLs.contact, component: ContactPage, layout: MainLayout },
  //Products
  { path: routeURLs.buying, component: BuyingPage, layout: MainLayout },
  { path: routeURLs.selling, component: SellingPage, layout: MainLayout },
  { path: routeURLs.payment, component: PaymentPage, layout: MainLayout },

  { path: routeURLs.heroName, component: CharactersName, layout: MainLayout },
];

export default routeLinks;
