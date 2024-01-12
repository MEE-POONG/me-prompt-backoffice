// idContext.tsx
import { createContext, ReactNode, useState } from 'react';

interface IDContextProps {
  storedID: string | null;
  setStoredID: React.Dispatch<React.SetStateAction<string | null>>;
}

const IDContext = createContext<IDContextProps | undefined>(undefined);

interface IDProviderProps {
  children: ReactNode;
}

export const IDProvider: React.FC<IDProviderProps> = ({ children }) => {
  const [storedID, setStoredID] = useState<string | null>(null);

  return (
    <IDContext.Provider value={{ storedID, setStoredID }}>
      {children}
    </IDContext.Provider>
  );
};

export default IDContext;
