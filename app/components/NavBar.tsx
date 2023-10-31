"use client";


import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,Grid,Image, Link, Show, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {BsList} from "react-icons/bs"
import { kPrimaryColor } from '../constant/colors';

function NavBar() {
  const { isOpen,onToggle,onClose } = useDisclosure();
  return (
    <Flex alignItems={"center"} py={2} px={6} shadow={"md"}>
        <Flex grow={1}>
            <Image alt="" height={45} src="./assets/img/logo.png"/>
        </Flex>
        
        <Show above="md">
            <Flex gap={2} fontSize={16} direction={"row"} alignItems={"center"} color={"gray.800"}>
                
                <Flex gap={8} px={6}>
                    <Link _hover={{color:kPrimaryColor,}} href="#about">About</Link>
                    <Link _hover={{color:kPrimaryColor,}} href="#feature">Feature</Link>
                    <Link _hover={{color:kPrimaryColor,}} href="#blog">Blog</Link>
                    <Link _hover={{color:kPrimaryColor,}} href="#blog">Contact</Link>
                </Flex>
                
                    <Button variant={"outline"} rounded={"full"}>Login</Button>
                    <Button variant={"solid"} bg={kPrimaryColor} color={"gray.100"} _hover={{bg:"green.500"}} rounded={"full"}>Sign up</Button>
    
            </Flex>
        </Show>
        
        <Show below="md">
            <Box onClick={onToggle} cursor={"pointer"}>
                <BsList size={35} />
            </Box>
            <Drawer isOpen={isOpen} onClose={onToggle}>
                <DrawerOverlay/>
                <DrawerContent height={"100vh"}>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Image alt="" height={45} src="./assets/img/logo.png"/>
                    </DrawerHeader>
                    <DrawerBody>
                        <Flex gap={8} fontSize={30} direction={"column"} alignItems={""} color={"gray.800"}>
                            <Link _hover={{color:kPrimaryColor,fontWeight:"bold"}} href="#about">About</Link>
                            <Link _hover={{color:kPrimaryColor,fontWeight:"bold"}} href="#feature">Feature</Link>
                            <Link _hover={{color:kPrimaryColor,fontWeight:"bold"}} href="#blog">Blog</Link>
                            <Link _hover={{color:kPrimaryColor,fontWeight:"bold"}} href="#blog">Contact</Link>
                            <br/>
                            <Flex direction={"column"} gap={4}>
                                <Button variant={"outline"} rounded={"full"}>Login</Button>
                                <Button variant={"solid"} bg={kPrimaryColor} color={"gray.100"} rounded={"full"}>Sign up</Button>
                            </Flex>
                        </Flex>

                    </DrawerBody>
                    <DrawerFooter textAlign={"center"}>
                        Copyright &copy; Africash 2023
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Show>
    </Flex>
  )
}

export default NavBar