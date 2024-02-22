import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                <h3>Ready to get start</h3>
                <h3>Talks to us Today</h3>
                 </div>
                 <div>
                    <Button>
                        <NavLink to="/contact">Get Started</NavLink>
                    </Button>
                 </div>
                </div>
            </section>

            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Keep ALL CONTROL OF YOUR VEHICLES IN YOUR HAND</h3>
                        <p>"Unlock your tech potential with our cutting-edge tracking System. Enroll today for safe drive!</p>
                    </div>
                    <div className="footer-subscribe">
                    <h3> Please!! Subscribe to get an upadate</h3>
                    <form action="#">
                        <input type="email" placeholder="Your E-mail"/>
                        <input type="submit" value="subscribe" />
                    </form>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                  <a
                    href="https://studio.youtube.com/channel/UC5GHz0rjdK2073DQNN8TyfQ"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        {/* <a href="tel: 076530158">+977 9867277901</a> */}
                        <h3>+977 9867277901</h3>
                    </div>
                </div>
                {/* bottom-footer */}

                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>
                            @{new Date().getFullYear()} Course Selling App. All Right Reserved
                            </p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERM & CONDITIONS </p>
                            </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
.iSIFGq {f
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    h3 {
        color: ${({ theme }) => theme.colors.white};
      }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;