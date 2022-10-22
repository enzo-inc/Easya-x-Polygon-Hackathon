import tw from "tailwind-styled-components";
import vincenzo from '../../res/images/vincenzo.jpg';
import React from "react";
import styled from 'styled-components';

const Card = tw.div`
  flex
  justify-center
`;

const Container = tw.div`
  flex
  flex-col 
  md:flex-row 
  md:max-w-xl 
  rounded-lg
  bg-white shadow-lg
`;

const ColumnContainer = tw.div`
  p-6 
  flex 
  flex-col 
  justify-start
`

const NameText = tw.text`
  text-gray-900 
  text-xl 
  font-medium 
  mb-2
`

const DescriptionText = tw.text`
text-gray-700 text-base mb-4
`

const PositionText = tw.text`
text-gray-600 
text-xl
`

export default function AboutCard() {
    return(
      <Card>
        <Container>
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={vincenzo} alt="" />          
          <ColumnContainer>
              <NameText>Vincenzo</NameText>
                <DescriptionText>
                Nam vitae fringilla magna. Integer lobortis lectus ligula, vitae dignissim dui malesuada nec. Maecenas posuere, tortor mattis vestibulum pretium, risus ligula finibus erat, sit amet tempus nunc lacus ut metus. Phasellus sed mattis dui.
                </DescriptionText>
              <PositionText>Business Analyst</PositionText>
            </ColumnContainer>
        </Container>
      </Card>
    );
  }
  