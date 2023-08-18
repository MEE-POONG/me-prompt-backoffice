import { createContext, useContext, useState } from 'react';
import { APIParams, AppFormData } from './type';

type APIContextType = {
    logObjects: (apiParams: APIParams, formData: AppFormData) => void;
    setObjects: (apiParams: APIParams, formData: AppFormData) => void;
    storedObjects: [APIParams, AppFormData] | null;
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
    const [storedObjects, setStoredObjects] = useState<[APIParams, AppFormData] | null>(null);

    const logObjects = (apiParams: APIParams, formData: AppFormData) => {
        console.log("API Params:", apiParams);
        console.log("Form Data:", formData);
    };

    const setObjects = (apiParams: APIParams, formData: AppFormData) => {
        setStoredObjects([apiParams, formData]);
        logObjects(apiParams, formData);  // Optionally log them immediately
    };
    return (
        <APIContext.Provider value={{ logObjects, setObjects, storedObjects }}>
            {children}
        </APIContext.Provider>
    );
};
