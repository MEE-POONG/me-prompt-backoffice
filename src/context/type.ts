export type Language = 'EN' | 'TH';

export interface AppContextDefaultProps {
    language: Language;
    toggleSidebar: boolean;
    nightMode: boolean;
    setLanguage: (language: Language) => void;
    setToggleSidebar: (toggleSidebar: boolean) => void;
    setNightMode: (nightMode: boolean) => void;
}
