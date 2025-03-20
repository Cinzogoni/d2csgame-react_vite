import styles from "../HeroList/HeroList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState } from "react";
import { useLangSwitcher } from "../../provider/LangSwitcherProvider";
import useDebounce from "../../hooks/useDebounce";
import Select from "react-select";
import GridSystem from "../GridSystem/GridSystem";
import { Link } from "react-router-dom";

// import apiFakeCharacters from "../../api/fakeApi/apiFakeCharacters";

import { useFetchApiProductResources } from "../../api/api.list.ts";

function HeroList() {
  const { dataCharacters } = useFetchApiProductResources();
  const { t } = useLangSwitcher();

  const [selectedHero, setSelectedHero] = useState<any | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const debouncedSearchInput = useDebounce(searchInput, 250);

  //lam_dev thay apiFakeCharacters === dataCharacters
  const heros = Array.from(
    new Map(dataCharacters.map((hero) => [hero.name, hero])).values()
  );

  const options = heros.map((hero) => ({
    value: hero.name,
    label: hero.name,
  }));

  const filteredHeros = selectedHero
    ? heros.filter((hero) => hero.name === selectedHero.value)
    : heros.filter((hero) =>
        hero.name.toLowerCase().includes(debouncedSearchInput.toLowerCase())
      );

  const handleProductLink = (heroName: string) => {
    return `/heros/${heroName}`;
  };

  return (
    <div className={cx("wrapper")}>
      <h2 style={{ fontSize: "2.4rem" }}>{t("Heros.herosTitle")}</h2>
      <p style={{ fontSize: "1.6rem", textAlign: "center" }}>
        {t("Heros.herosDesc")}
      </p>

      <div className={cx("search")}>
        <Select
          options={options}
          placeholder="Tìm kiếm hero..."
          value={selectedHero}
          onInputChange={(value) => setSearchInput(value)}
          onChange={setSelectedHero}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          isClearable
          styles={{
            container: (provided) => ({
              ...provided,
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }),
            control: (provided) => ({
              ...provided,
              height: "100%",
              borderRadius: "12px",
              fontSize: "1.6rem",
            }),
            placeholder: (provided) => ({
              ...provided,
              fontSize: "1.6rem",
              visibility: isFocused ? "hidden" : "visible",
            }),
            menu: (provided) => ({
              ...provided,
              display: "none",
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "none",
            }),
            indicatorsContainer: (provided) => ({
              ...provided,
              display: "none",
            }),
          }}
        />
      </div>
      {/* STRENGTH */}
      <div className={cx("attribute")}>
        <img
          src="/assets/img/Attributes_Strength.png"
          className={cx("attribute-img")}
        />
        <h1 className={cx("attribute-title")}>STRENGTH</h1>
        <h1 className={cx("quantity")}>
          (
          {filteredHeros.filter((hero) => hero.attribute === "STRENGTH").length}
          )
        </h1>
      </div>
      <div className={cx("list")}>
        {filteredHeros
          .filter((hero) => hero.attribute === "STRENGTH")
          .map((hero, index) => {
            return (
              <GridSystem
                key={index}
                colClass={cx("col")}
                colL={cx("l-1-8")}
                colML={cx("ml-2")}
                colM={cx("m-2")}
                colSM={cx("sm-3")}
                colS={cx("s-4")}
                colMo={cx("mo-6")}
                colMi={cx("mi-12")}
              >
                <Link
                  to={handleProductLink(hero.name)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className={cx("box")}>
                    <div className={cx("img-box")}>
                      <img
                        src={hero.filePath}
                        alt={hero.name}
                        className={cx("img")}
                      />
                    </div>

                    <h3 className={cx("hero-name")}>- {hero.name} -</h3>
                  </div>
                </Link>
              </GridSystem>
            );
          })}
      </div>
      {/* AGILITY */}
      <div className={cx("attribute")}>
        <img
          src="/assets/img/Attributes_Agility.png"
          className={cx("attribute-img")}
        />
        <h1 className={cx("attribute-title")}>AGILITY</h1>
        <h1 className={cx("quantity")}>
          ({filteredHeros.filter((hero) => hero.attribute === "AGILITY").length}
          )
        </h1>
      </div>
      <div className={cx("list")}>
        {filteredHeros
          .filter((hero) => hero.attribute === "AGILITY")
          .map((hero, index) => {
            return (
              <GridSystem
                key={index}
                colClass={cx("col")}
                colL={cx("l-1-8")}
                colML={cx("ml-2")}
                colM={cx("m-2")}
                colSM={cx("sm-3")}
                colS={cx("s-4")}
                colMo={cx("mo-6")}
                colMi={cx("mi-12")}
              >
                <Link
                  to={handleProductLink(hero.name)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className={cx("box")}>
                    <div className={cx("img-box")}>
                      <img
                        src={hero.filePath}
                        alt={hero.name}
                        className={cx("img")}
                      />
                    </div>

                    <h3 className={cx("hero-name")}>- {hero.name} -</h3>
                  </div>
                </Link>
              </GridSystem>
            );
          })}
      </div>
      {/* INTELLIGENCE */}
      <div className={cx("attribute")}>
        <img
          src="/assets/img/Attributes_Intelligence.png"
          className={cx("attribute-img")}
        />
        <h1 className={cx("attribute-title")}>INTELLIGENCE</h1>
        <h1 className={cx("quantity")}>
          (
          {
            filteredHeros.filter((hero) => hero.attribute === "INTELLIGENCE")
              .length
          }
          )
        </h1>
      </div>
      <div className={cx("list")}>
        {filteredHeros
          .filter((hero) => hero.attribute === "INTELLIGENCE")
          .map((hero, index) => {
            return (
              <GridSystem
                key={index}
                colClass={cx("col")}
                colL={cx("l-1-8")}
                colML={cx("ml-2")}
                colM={cx("m-2")}
                colSM={cx("sm-3")}
                colS={cx("s-4")}
                colMo={cx("mo-6")}
                colMi={cx("mi-12")}
              >
                <Link
                  to={handleProductLink(hero.name)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className={cx("box")}>
                    <div className={cx("img-box")}>
                      <img
                        src={hero.filePath}
                        alt={hero.name}
                        className={cx("img")}
                      />
                    </div>

                    <h3 className={cx("hero-name")}>- {hero.name} -</h3>
                  </div>
                </Link>
              </GridSystem>
            );
          })}
      </div>
      {/* UNIVERSAL */}
      <div className={cx("attribute")}>
        <img
          src="/assets/img/Attributes_Universal.png"
          className={cx("attribute-img")}
        />
        <h1 className={cx("attribute-title")}>UNIVERSAL</h1>
        <h1 className={cx("quantity")}>
          (
          {
            filteredHeros.filter((hero) => hero.attribute === "UNIVERSAL")
              .length
          }
          )
        </h1>
      </div>
      <div className={cx("list")}>
        {filteredHeros
          .filter((hero) => hero.attribute === "UNIVERSAL")
          .map((hero, index) => {
            return (
              <GridSystem
                key={index}
                colClass={cx("col")}
                colL={cx("l-1-8")}
                colML={cx("ml-2")}
                colM={cx("m-2")}
                colSM={cx("sm-3")}
                colS={cx("s-4")}
                colMo={cx("mo-6")}
                colMi={cx("mi-12")}
              >
                <Link
                  to={handleProductLink(hero.name)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className={cx("box")}>
                    <div className={cx("img-box")}>
                      <img
                        src={hero.filePath}
                        alt={hero.name}
                        className={cx("img")}
                      />
                    </div>

                    <h3 className={cx("hero-name")}>- {hero.name} -</h3>
                  </div>
                </Link>
              </GridSystem>
            );
          })}
      </div>
    </div>
  );
}

export default HeroList;
