import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroAll from "@/container/HeroAll";
import DesignSection from "@/container/Residences/DesignSection";
import LocationAll from "@/container/LocationAll";
import GalleryList from "@/container/GalleryList";

type HeroAllProps = {
    name: string;
    page: string;
    path: string;
};
const ResidencesPage: React.FC<HeroAllProps> = ({ page }) => {
    const [srcollBG, setSrcollBG] = useState<number>(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setSrcollBG(0 - (document.documentElement.scrollTop / 10));

    };

    return (
        <LayOut>
            <Head>
                <title>Residences | Belletti-Niresidence</title>
                <meta
                    name="description"
                    content="T ACTIVE"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='residences-page'>
                <HeroAll name="Residences" page="Residences" path="residences" />
                <DesignSection />
                <LocationAll />
                <GalleryList/>
            </div>
        </LayOut>
    );
}
export default ResidencesPage;
