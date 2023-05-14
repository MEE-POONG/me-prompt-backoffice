import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroAll from "@/container/HeroAll";
import LocationAll from "@/container/LocationAll";
import SelectFloorSection from "@/container/FloorType/SelectFloorSection";

type HeroAllProps = {
    name: string;
    page: string;
    path: string;
};
const FloorPlanPage: React.FC<HeroAllProps> = ({ page }) => {
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
                <title>FloorPlan | Belletti-Niresidence</title>
                <meta
                    name="description"
                    content="T ACTIVE"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='roomtype-page'>
                <HeroAll name="Floor Plan" page="Floor Plan" path="floorplan" />
                {/* <DesignSection /> */}
                <SelectFloorSection />
                <LocationAll />
            </div>
        </LayOut>
    );
}
export default FloorPlanPage;
