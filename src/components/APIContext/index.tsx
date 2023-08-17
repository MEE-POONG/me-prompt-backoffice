// components/APIContext.tsx

import { createContext, useContext } from 'react';

type APIContextType = {
    logObjects: (obj1: object, obj2: object, obj3: object) => void;
};

const APIContext = createContext<APIContextType | undefined>(undefined);

export const useAPIContext = () => {
    const context = useContext(APIContext);
    if (!context) {
        throw new Error('useAPIContext must be used within an APIContextProvider');
    }
    return context;
};

type Props = {
    children: React.ReactNode;
};

export const APIContextProvider: React.FC<Props> = ({ children }) => {
    const logObjects = (obj1: object, obj2: object, obj3: object) => {
        console.log("Object 1:", obj1);
        console.log("Object 2:", obj2);
        console.log("Object 3:", obj3);
    };

    return (
        <APIContext.Provider value={{ logObjects }}>
            {children}
        </APIContext.Provider>
    );
};
