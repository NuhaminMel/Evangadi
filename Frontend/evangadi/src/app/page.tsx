

import Container from "./components/Counters/Container";
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
     
    </div>
  )
}
