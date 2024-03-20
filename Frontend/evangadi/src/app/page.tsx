

import Container from "./components/Counters/Container";
import GetPaid from "./components/GetPaid/GetPaid";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RoadMap from "./components/RoadMap/RoadMap";

export default function index() {
  return (
    <div className=" w-full  ">
        <Header/>
        <Hero/>
        <Container/>
        <RoadMap/>
        <GetPaid/>
     
    </div>
  )
}
