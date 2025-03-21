import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Fragment, useState } from "react";
import { useLangSwitcher } from "../../provider/LangSwitcherProvider";
import { Link } from "react-router-dom";
import routeURLs from "../../routes/routes";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const handleMenuLink = (classify: string, productType: string) => {
  if (productType === "SET") {
    return `/set-categories/${classify}`;
  } else if (productType === "ITEM") {
    return `/item-categories/${classify}`;
  } else if (productType === "STEAM_WALLET") {
    return `/steam/${classify}`;
  } else if (productType === "STEAM_POINT") {
    return `/steam/${classify}`;
  } else if (productType === "STEAM_LEVEL") {
    return `/steam/${classify}`;
  } else if (productType === "WEATHER_EFFECTS") {
    return `/others/${classify}`;
  } else if (productType === "TERRAIN") {
    return `/others/${classify}`;
  } else if (productType === "MUSIC_PACK") {
    return `/others/${classify}`;
  } else if (productType === "COURIER") {
    return `/others/${classify}`;
  } else {
    return "/";
  }
};

const handleSubMenuLink = (
  classify: string,
  isClass: string,
  productType: string
) => {
  if (productType === "SET") {
    return `/set-categories/${classify}/${isClass}`;
  } else if (productType === "ITEM") {
    return `/item-categories/${classify}/${isClass}`;
  } else if (productType === "STEAM_WALLET") {
    return `/steam/${classify}/${isClass}`;
  } else if (productType === "STEAM_POINT") {
    return `/steam/${classify}/${isClass}`;
  } else if (productType === "STEAM_LEVEL") {
    return `/steam/${classify}/${isClass}`;
  } else if (productType === "WEATHER_EFFECT") {
    return `/others/${classify}/${isClass}`;
  } else if (productType === "TERRAIN") {
    return `/others/${classify}/${isClass}`;
  } else if (productType === "MUSIC_PACK") {
    return `/others/${classify}/${isClass}`;
  } else if (productType === "COURIER") {
    return `/others/${classify}/${isClass}`;
  } else {
    return "/";
  }
};

type SubMenuType = {
  id: number;
  title: string;
  slug: string;
  link: typeof handleSubMenuLink;
  productType: string;
};

type MenuType = {
  id: number;
  title: string;
  slug: string;
  link: typeof handleMenuLink;
  productType: string;
  subMenu: SubMenuType[] | null;
};

type NavbarType = {
  id: number;
  title: string;
  link: string;
  menu: MenuType[] | null;
};

function NavBar() {
  const { t } = useLangSwitcher();
  const [hoveredNavId, setHoveredNavId] = useState<number | null>(null);
  const [hoveredSubMenuId, setHoveredSubMenuId] = useState<number | null>(null);

  const navbar: NavbarType[] = [
    { id: 1, title: t("Heros.heros"), link: routeURLs.heros, menu: null },
    {
      id: 2,
      title: t("Heros.sets"),
      link: routeURLs.set,
      menu: [
        {
          id: 1,
          title: "Collector's cache",
          productType: "SET",
          slug: "collector-cache",
          link: handleMenuLink,
          subMenu: [
            {
              id: 1,
              title: "The International 2019 Collector's Cache",
              slug: "the-international-2019-collector-cache",
              productType: "SET",
              link: handleSubMenuLink,
            },
            {
              id: 2,
              title: "The International 2020 Collector's Cache",
              slug: "the-international-2020-collector-cache",
              productType: "SET",
              link: handleSubMenuLink,
            },
            {
              id: 3,
              title: "Aghanim's 2021 Collector's Cache",
              slug: "aghanim-2021-collector-cache",
              productType: "SET",
              link: handleSubMenuLink,
            },
            {
              id: 4,
              title: "Diretide 2022 Collector's Cache",
              slug: "diretire-2022-collector-cache",
              productType: "SET",
              link: handleSubMenuLink,
            },
          ],
        },
        {
          id: 2,
          title: "Mix Set",
          slug: "mix-set",
          productType: "SET",
          link: handleMenuLink,
          subMenu: null,
        },
        {
          id: 3,
          title: "Infused",
          slug: "infused",
          productType: "SET",
          link: handleMenuLink,
          subMenu: null,
        },
        {
          id: 4,
          title: "Arcana",
          slug: "arcana",
          productType: "SET",
          link: handleMenuLink,
          subMenu: null,
        },
      ],
    },
    {
      id: 3,
      title: t("Heros.items"),
      link: routeURLs.item,
      menu: [
        {
          id: 1,
          title: "Immortal",
          slug: "immortal",
          productType: "ITEM",
          link: handleMenuLink,
          subMenu: [
            {
              id: 1,
              title: "Immortal Treasure 2019",
              slug: "immortal-treasure-2019",
              productType: "ITEM",
              link: handleSubMenuLink,
            },
            {
              id: 2,
              title: "Immortal Treasure 2020",
              slug: "immortal-treasure-2020",
              productType: "ITEM",
              link: handleSubMenuLink,
            },
            {
              id: 3,
              title: "Nemestice 2021 Immortal Treasure",
              slug: "nemestice-2021-immortal-treasure",
              productType: "ITEM",
              link: handleSubMenuLink,
            },
            {
              id: 4,
              title: "Trove Carafe 2019",
              slug: "trove-carafe-2019",
              productType: "ITEM",
              link: handleSubMenuLink,
            },
            {
              id: 5,
              title: "Crimson Immortal",
              slug: "crimson-immortal",
              productType: "ITEM",
              link: handleSubMenuLink,
            },
            {
              id: 6,
              title: "Golden Immortal",
              slug: "golden-immortal",
              productType: "ITEM",
              link: handleSubMenuLink,
            },
          ],
        },
        {
          id: 2,
          title: "Arcana",
          slug: "arcana",
          productType: "ITEM",
          link: handleMenuLink,
          subMenu: null,
        },
        {
          id: 3,
          title: "Dota Plus",
          slug: "dota-plus",
          productType: "ITEM",
          link: handleMenuLink,
          subMenu: null,
        },
      ],
    },
    {
      id: 4,
      title: t("Heros.steam"),
      link: routeURLs.steam,
      menu: [
        {
          id: 1,
          title: "Steam Wallet",
          slug: "steam-wallet",
          productType: "STEAM_WALLET",
          link: handleMenuLink,
          subMenu: null,
        },
        {
          id: 2,
          title: "Steam Point",
          slug: "steam-point",
          productType: "STEAM_POINT",
          link: handleMenuLink,
          subMenu: null,
        },
        {
          id: 3,
          title: "Steam Level",
          slug: "steam-level",
          productType: "STEAM_LEVEL",
          link: handleMenuLink,
          subMenu: null,
        },
      ],
    },
    {
      id: 5,
      title: t("Heros.others"),
      link: routeURLs.others,
      menu: [
        {
          id: 1,
          title: t("Heros.weatherEffects"),
          slug: "weather-effect",
          productType: "WEATHER_EFFECTS",
          link: handleMenuLink,
          subMenu: null,
        },
        {
          id: 2,
          title: t("Heros.terrain"),
          slug: "terrain",
          productType: "TERRAIN",
          link: handleMenuLink,
          subMenu: null,
        },
        {
          id: 3,
          title: t("Heros.musicPack"),
          slug: "music-pack",
          productType: "MUSIC_PACK",
          link: handleMenuLink,
          subMenu: null,
        },
        {
          id: 4,
          title: t("Heros.courier"),
          slug: "courier",
          productType: "COURIER",
          link: handleMenuLink,
          subMenu: [
            {
              id: 1,
              title: "Unusual Courier",
              slug: "unusual-courier",
              productType: "COURIER",
              link: handleSubMenuLink,
            },
            {
              id: 2,
              title: "Unlocked Style Courier",
              slug: "unlocked-style-courier",
              productType: "COURIER",
              link: handleSubMenuLink,
            },
          ],
        },
      ],
    },
  ] as const;

  return (
    <nav className={cx("wrapper")}>
      {navbar.map((nav, index) => {
        return (
          <div
            key={index}
            className={cx("menu-container")}
            onMouseEnter={() => setHoveredNavId(nav.id)}
            onMouseLeave={() => setHoveredNavId(null)}
          >
            <Link to={nav.link}>
              <div className={cx("nav")}>
                <h3 className={cx("title")}>{nav.title}</h3>
              </div>
            </Link>

            <div className={cx("menu")}>
              {nav.menu && nav.menu.length > 0 && hoveredNavId === nav.id && (
                <div className={cx("menu-list")}>
                  <div className={cx("frame")}></div>
                  <div className={cx("menu-item")}>
                    {nav.menu.map((menu) => (
                      <Fragment key={menu.id}>
                        <Link
                          to={menu.link(menu.slug, menu.productType) ?? "/"}
                          className={cx("link")}
                          onMouseEnter={() => setHoveredSubMenuId(menu.id)}
                          onMouseLeave={() => setHoveredSubMenuId(null)}
                        >
                          <h4 className={cx("menu-title")}>{menu.title}</h4>
                          {["Collector's cache", "Immortal", "Courier"].includes(
                            menu.title
                          ) && (
                            <KeyboardDoubleArrowRightIcon
                              className={cx("arrow")}
                            />
                          )}
                        </Link>

                        <div className={cx("sub-menu")}>
                          {menu.subMenu &&
                            menu.subMenu !== null &&
                            menu.subMenu.length > 0 &&
                            hoveredSubMenuId === menu.id && (
                              <div className={cx("sub-menu-list")}>
                                <div className={cx("sub-menu-item")}>
                                  {menu.subMenu?.map((subMenu) => {
                                    return (
                                      <Link
                                        to={
                                          subMenu.link(
                                            menu.slug,
                                            subMenu.slug,
                                            subMenu.productType
                                          ) ?? "/"
                                        }
                                        key={subMenu.id}
                                        className={cx("sub-link")}
                                        onMouseEnter={() =>
                                          setHoveredSubMenuId(menu.id)
                                        }
                                        onMouseLeave={() =>
                                          setHoveredSubMenuId(null)
                                        }
                                      >
                                        <h4 className={cx("sub-menu-title")}>
                                          {subMenu.title}
                                        </h4>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export default NavBar;
