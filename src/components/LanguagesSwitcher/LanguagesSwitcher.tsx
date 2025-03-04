import styles from "./LanguagesSwitcher.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState, useEffect } from "react";
import { useLangSwitcher } from "../../provider/LangSwitcherProvider";
import { flagMapping } from "../../provider/LangSwitcherProvider";

const languages = ["vi", "en", "ru"];

function LanguagesSwitcher() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentLanguage, flag, changeLanguage } = useLangSwitcher();

  const handleLanguageChange = (e: React.MouseEvent, code: string) => {
    e.stopPropagation();
    changeLanguage(code);
    setIsOpen(false);
    localStorage.setItem("selectedLanguage", code);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className={cx("wrapper")} onClick={() => setIsOpen(true)}>
      <div className={cx("arrow-down")} />
      <div className={cx("selected-flag")}>
        <img className={cx("flag-img")} src={flag} alt={currentLanguage} />
      </div>
      {isOpen && (
        <div className={cx("select")}>
          {languages.map((code) => (
            <div
              key={code}
              className={cx("option")}
              onClick={(e) => handleLanguageChange(e, code)}
            >
              <img
                className={cx("opt-img")}
                src={flagMapping[code]}
                alt={code}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguagesSwitcher;
