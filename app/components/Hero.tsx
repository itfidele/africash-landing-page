"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Grid,
  Button,
} from "@chakra-ui/react";
import { kPrimaryColor } from "../constant/colors";

export default function HeroContent({
  heading,
  description,
  button,
}: {
  heading: string;
  description: string;
  button:{
    text:string,
    link?:URL
  };
}) {
  return (
    <Container maxW={"8xl"} my={{lg:24}}>
      <Flex direction={{base:"column",lg:"row"}} alignItems={{lg:"center"}} height={{lg:"70vh"}}>
        <Flex flex={1} position={{lg:"relative"}} width={{lg:"60%"}} direction={"column"} alignItems={{base:"center",lg:"left"}} p={4} gap={4}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"}>
              {heading}
            </Text>
          </Heading>
          <Text color={"gray.500"}>{description}</Text>
        
          <Button variant={"solid"} px={4} py={2} color={"gray.100"} _hover={{bg:"green.500",color:"gray.50"}} width={"fit-content"} rounded={"full"} bg={kPrimaryColor}>
            {button.text}
          </Button>
        </Flex>

        <Flex
        flex={1}

          w={{base:"full"}}
        >
            <Image alt="" src="./assets/img/hero-img.png"/>
          
        </Flex>
        
      </Flex>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};