import { ReactNode, createContext, useContext, useState } from "react";
import { AppContextDefaultProps, Language } from "./type";

const AppContext = createContext<AppContextDefaultProps>({
  language: 'EN',
  toggleSidebar: false,
  nightMode: false,
  setLanguage: () => { },
  setToggleSidebar: () => { },
  setNightMode: () => { },
});

interface ContextProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [nightMode, setNightMode] = useState<boolean>(false);

  const toggleSidebarHandler = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <AppContext.Provider value={{ language, toggleSidebar, nightMode, setLanguage, setToggleSidebar: toggleSidebarHandler, setNightMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;
