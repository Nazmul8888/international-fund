import Banner from "./Banner/Banner";
import BannerSection from "./Section/BannerSection";
import SectionBanner from "./Section/SectionBanner";
import SectionView from "./Section/SectionView";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionBanner></SectionBanner>
            <BannerSection></BannerSection>
            <SectionView></SectionView>
        </div>
    );
};

export default Home;