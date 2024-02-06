import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profilePic from '../../data/assests/Manasa.jpg';

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <TypeAnimation
              cursor={false}
              sequence={[
                'Hi, I\'m Manasa.',
                () => setShowSubtitle(true)
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 150 }}
              wrapper="h1"
              repeat={0}
            />
            {showSubtitle &&
              <TypeAnimation
                cursor={true}
                sequence={[
                  500,
                  'A Data-Analyst.',
                  500,
                  'An innovative thinker.',
                  500,
                  "you can scroll down to see my projects now...",
                  300,
                  // () => setShowScrollDown(true),
                  // 500,
                ]}
                speed={50}
                deletionSpeed={65}
                wrapper="h5"
                repeat={Infinity}
              />
            }
          </HeroLeft>
          <HeroRight>
            <Image
              src={profilePic}
              alt="profilePic"
            />
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&
          <ScrollDown to="projects" id="scrollDown">
            <ScrollLink>
              {/* Scroll down
              <img
                src="https://img.icons8.com/?size=96&id=19170&format=png"
                alt="scroll-down"
              /> */}
            </ScrollLink>
          </ScrollDown>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
