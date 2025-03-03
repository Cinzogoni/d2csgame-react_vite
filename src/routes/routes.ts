const routeURLs = {
  home: "/",
  //Header - Navbar
  heros: "/heros",
  heroName: "/heros/:heroName",
  set: "/set-categories",
  setClassify: "/set-categories/:theClassify",
  setClass: "/set-categories/:theClassify/:theClass",
  item: "/item-categories",
  itemClassify: "/item-categories/:theClassify",
  itemClass: "/item-categories/:theClassify/:theClass",
  steam: "/steam",
  steamClassify: "/steam/:theClassify",
  steamClass: "/steam/:theClassify/:theClass",
  courierClass: "/others/:theClassify/:theClass",
  others: "/others",
  othersClassify: "/others/:theClassify",
  othersClass: "/others/:theClassify/:theClass",
  //Header - Actions
  shoppingCart: "/shopping-cart",
  //Footer
  policy: "/policy",
  guide: "/guide",
  support: "/support",
  qna: "/qna",
  contact: "/contact",
  //Products
  buying: "/buying",
  selling: "/selling",
  payment: "/payment",
};

export default routeURLs;
