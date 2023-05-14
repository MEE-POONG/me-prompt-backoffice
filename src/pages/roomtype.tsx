import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroAll from "@/container/HeroAll";
import LocationAll from "@/container/LocationAll";
import GalleryList from "@/container/GalleryList";
import SelectRoomSection from "@/container/roomtype/SelectRoom";

type HeroAllProps = {
    name: string;
    page: string;
    path: string;
};
const RoomTypePage: React.FC<HeroAllProps> = ({ page }) => {
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
                <title>RoomTypePage | Belletti-Niresidence</title>
                <meta
                    name="description"
                    content="T ACTIVE"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='roomtype-page'>
                <HeroAll name="Room Type" page="RoomType" path="roomtype" />
                <SelectRoomSection />
                <GalleryList/>
                <LocationAll />
            </div>
        </LayOut>
    );
}
export default RoomTypePage;
