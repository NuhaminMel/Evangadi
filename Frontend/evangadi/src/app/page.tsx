

import Container from "./components/Counters/Container";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function index() {
  return (
    <div className=" absolute w-full bg-slate-50 h-screen ">
        <Header/>
        <Hero/>
        <Container/>
     
    </div>
  )
}
