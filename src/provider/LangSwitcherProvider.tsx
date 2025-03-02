import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const flagMapping: Record<string, string> = {
  vi: "/assets/img/flag-of-VietNam.png",
  en: "/assets/img/flag-of-Us.png",
  ru: "/assets/img/flag-of-Russia.png",
};

interface LangSwitcherContextType {
  currentLanguage: string;
  flag: string;
  changeLanguage: (newLang: string) => void;
  t: (key: string) => string;
}

const LangSwitcherContext = createContext<LangSwitcherContextType>({
  currentLanguage: "vi",
  flag: flagMapping["vi"],
  changeLanguage: () => {},
  t: (key) => key,
});

export function LangSwitcherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("language") || "vi";
  });

  const [flag, setFlag] = useState(flagMapping["vi"]);

  const changeLanguage = (newLang: string) => {
    if (flagMapping[newLang]) {
      i18n.changeLanguage(newLang);
      setCurrentLanguage(newLang);
      setFlag(flagMapping[newLang]);
      localStorage.setItem("language", newLang);
    }
  };

  useEffect(() => {
    if (currentLanguage !== i18n.language) {
      i18n.changeLanguage(currentLanguage);
    }
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage, i18n, navigate]);

  return (
    <LangSwitcherContext.Provider
      value={{ currentLanguage, changeLanguage, flag, t }}
    >
      {children}
    </LangSwitcherContext.Provider>
  );
}

export function useLangSwitcher() {
  return useContext(LangSwitcherContext);
}
