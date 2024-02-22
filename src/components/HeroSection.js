import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeroSection = ({ myData }) => {
    const { name } = myData;
    return (
    <Wrapper>
        <div className="video-container">
            <video autoPlay muted loop>
                <source src="images/video.mp4" type="video/mp4" />
            </video>
        </div>
    </Wrapper>

    
    );
};

const Wrapper = styled.section`
div{
      width: 100%;
      height: 50vh;
      overflow: hidden; 
  }
  
  video{
      width: 100%; 
      height: 100%; 
      object-fit: cover; 
  }
  
`;

export default HeroSection;
