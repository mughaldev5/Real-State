import React, { useState } from 'react';
import Layout from '../../wrapper';
import HomeCardMap from "../../components/LandingPages/HomeCardMap";
import MenuDropdown from "../../components/LandingPages/MenuDropdown";
import AboutdetailMap from "../../components/LandingPages/AboutdetailMap";
import ProjectStatusList from "../../components/LandingPages/ProjectStatusList";
import HomedetailsMap from "../../components/LandingPages/HomedetailsMap";
import PropertyRentMap from "../../components/LandingPages/PropertyRentMap";
import Homepage from "../../components/LandingPages/Homepage";
import FacilityCardsMap from "../../components/LandingPages/FacilityCardsMap";
import AgentReviewMap from "../../components/LandingPages/AgentReviewMap";
import PropertyDemandMap from "../../components/LandingPages/PropertyDemandMap";
import DreamHomeCTA from "../../components/LandingPages/DreamHomeCTA";
import ServicecardMap from "../../components/LandingPages/ServicecardMap";

const Home = () => {
    const [active, setActive] = useState(null);

    return (
        <div className='overflow-hidden'>
            <Layout>

                <div>
            <HomeCardMap />
                </div>

                <div>
                    <MenuDropdown />
                </div>

                <div>
                     <AboutdetailMap/>
                </div>

                <div className='relatve flex justify-center w-full bg-gray-100'>
                    <ProjectStatusList />
                </div>

                <div >
                <HomedetailsMap/>                      
                </div>

                <div>
                    <ServicecardMap active={active} setActive={setActive}/>
                </div>
                
                <div>
                    <PropertyRentMap active={active} setActive={setActive}/>
                </div>

                <div>
                    <Homepage/>
                </div>

                <div>
                <FacilityCardsMap/>
                </div>

                <div>
                    <AgentReviewMap active={active} setActive={setActive}/>
                </div>

                <div>
                    <PropertyDemandMap  active={active} setActive={setActive}/>
                </div>
            </Layout>
        </div>
    );
};




export default Home