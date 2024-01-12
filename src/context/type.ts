export type Language = 'EN' | 'TH';
export type NightMode = 'day' | 'night';

export interface AppContextDefaultProps {
    language: Language;
    toggleSidebar: boolean;
    nightMode: NightMode;
    setLanguage: (language: Language) => void;
    setToggleSidebar: () => void;
    setNightMode: (nightMode: NightMode) => void;
}
