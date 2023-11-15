import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor='white'
      color='purple'
      borderRadius='xl'
      cursor='pointer'
    >
      <Image src={imageSrc} borderRadius='xl' alignItems='flex-start' />
      <VStack spacing={4} p={4}>
        <HStack justifyContent='space-between' alignItems='center'>
          <Heading as='h3' size='md' >
            {title}
          </Heading>
          <Text fontSize='lg' color='#647777' >{description}</Text>
        </HStack>
        <HStack>
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size='1x'/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
