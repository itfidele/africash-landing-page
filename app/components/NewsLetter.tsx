
"use client";

import { Box, Flex, FormControl, Input,Image, Container, Button, InputGroup, InputRightElement, Show } from '@chakra-ui/react'
import React from 'react'
import { kPrimaryColor } from '../constant/colors';

function NewsLetter() {
  return <Container maxW={"6xl"}>
        <Image alt='' src='./assets/img/green-app.png'/>
        <Box fontSize={30} py={6}>Keep up with us by signing up for our newsletter</Box>
        <Flex py={8} alignItems={"center"}>
            <Flex>
                <InputGroup size='md'>
                    <Input rounded={"full"} width={"500px"} placeholder='Email address' />
                    <InputRightElement width='6.5rem'>
                        <Button variant={"solid"} _hover={{bg:"green.500"}} rounded={"full"} bg={kPrimaryColor} mr={1} color={"gray.100"} size={"sm"}  px={6} py={4}>
                            Subscribe
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
            
            <Show above={"md"}>
                <Flex flex={1} gap={2} justifyItems={"center"} justifyContent={"right"} alignItems={"center"}>
                    <Image h={10}  alt="" src="./assets/img/insta-img.png" />
                    <Image h={10}  alt="" src="./assets/img/facebook-img.png" />
                    <Image h={10}  alt="" src="./assets/img/linkedin-img.png" />
                    <Image h={10}  alt="" src="./assets/img/insta-img.png" />
                </Flex>
            </Show>
        </Flex>
    </Container>
  
}

export default NewsLetter