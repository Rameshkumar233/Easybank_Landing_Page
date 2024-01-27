import React from "react";
import "./App.css";
import { Articles } from "./components/Articles";
import Footers from "./components/Footers";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import { WhySection } from "./components/WhySection";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in",
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div>
                <Navigation />
                <HeroSection />
                <WhySection />
                <Articles />
            </div>
            <Footers />
        </>
    );
}

export default App;
