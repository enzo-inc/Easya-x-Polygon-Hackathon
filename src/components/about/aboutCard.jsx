import tw from "tailwind-styled-components";
import React from "react";

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
text-xs
uppercase
`

export default function AboutCard(props) {
    return(
      <Card>
        <Container>
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.img} alt="" />          
          <ColumnContainer>
              <NameText>{props.name}</NameText>
                <DescriptionText>{props.desc}</DescriptionText>
              <PositionText>{props.position}</PositionText>
            </ColumnContainer>
        </Container>
      </Card>
    );
  }
  