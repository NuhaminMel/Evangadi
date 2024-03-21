

import Acadamy from "./components/Acadamy/Acadamy";
import Container from "./components/Counters/Container";
import FiveSteps from "./components/FiveSteps/FiveSteps";
import GetPaid from "./components/GetPaid/GetPaid";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MiddleBanner from "./components/MiddleBanner/MiddleBanner";
import RoadMap from "./components/RoadMap/RoadMap";
import ScholarShip from "./components/ScholarShip/ScholarShip";

export default function index() {
  return (
    <div className=" w-full  ">
        <Header/>
        <Hero/>
        <Container/>
        <RoadMap/>
        <GetPaid/>
        <MiddleBanner/>
        <Acadamy/>
        <FiveSteps/>
        <ScholarShip/>
     
    </div>
  )
}
