import HeroSection from "./components/HeroSection";
import { useProductContext } from "./components/context/productcontext";

const About = () => {
    const { myName } = useProductContext();

    const data = {
        name : "Course Selling App",
    };

    return (
    <>
    { myName }
    <HeroSection myData={data} />
    </>
);
};

export default About;