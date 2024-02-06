import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import styled from "@emotion/styled";
// import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  .item1 {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    &:hover {
      color: rgb(105,105,105);
    }  
  }



  .item2 {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    &:hover {
      color: rgb(47,79,79);
    }


  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    // .item1{
    //   font-size: 2.5rem;
    //   color: #151418;
    //   &:hover {
    //     color: rgb(57, 134, 250);
    //   }
    // }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
function FixSocialIcon() {
  return (
    <SocialContainer>
      {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
        <ul>
          <li className="item1">
            <a
              href="https://www.linkedin.com/in/manasa-b-r-7053bb122"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item2">
            <a
              href="https://github.com/manasa892"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>

          <li className="item1">
            <a
              href="https://twitter.com/manasaraju27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>

          <li className="item2">
            <a
              href="https://public.tableau.com/app/profile/manasa.b.r5258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTableau/>
            </a>
          </li>

        </ul>
      {/* </ScrollAnimation> */}
    </SocialContainer>
  );
}

export default FixSocialIcon;
