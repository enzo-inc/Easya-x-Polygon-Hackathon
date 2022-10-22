import tw from "tailwind-styled-components";
import vincenzo from '../../res/images/vincenzo.jpg';
import gladiator from '../../res/images/gladiator.jpg'
import monk from '../../res/images/monk.png';
import wizard from '../../res/images/wizard.jpg';
import React from "react";
import AboutCard from "./aboutCard";
import styled from "styled-components";

const Wrapper = tw.div`
  grid
  grid-cols-2
  gap-4
`

const Text = styled.text`
    font-size: 3.5em;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: #396afc;  /* fallback for old browsers */
    color: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
    color: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: SpaceMonoRegular;
    font-weight: 700;
    opacity: 80%;
    padding-bottom: 25px;
`

export default function About() {

  const data = [
    { id: 1, name: "Arish Tripathi", img: wizard, position: "Wizard" },
    { id: 2, name: "Vincenzo Incutti", img: vincenzo, position: "Pirate"},
    { id: 3, name: "Stoyan Dimitrov", img: gladiator, position: "Gladiator" },
    { id: 3, name: "Nik Don", img: monk, position: "Monk" }
  ];

  return (
    <div>
      <Text>-* deez nutz *-</Text>
        <Wrapper className="mt-10 mb-10">
          {data.map((user) => (
            <AboutCard 
            name={user.name} 
            desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
            position={user.position}
            img={user.img} />
          ))}
        </Wrapper>
    </div>
  );
}