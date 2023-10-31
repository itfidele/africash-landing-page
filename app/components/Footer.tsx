"use client";


import { Box, SimpleGrid,Image, List, ListItem } from '@chakra-ui/react';
import React from 'react'
import { kPrimaryColor } from '../constant/colors';

function Footer() {
  return (
    <SimpleGrid bg={kPrimaryColor} columns={{lg:5,base:1}} gap={{base:6,lg:2}} p={8}>
        <Box><Image alt='' src='./assets/img/logo-white.png'/></Box>
        <Box color={"gray.100"}>
            <Box fontSize={18} fontWeight={"bold"}>Company</Box>
            <List>
                <ListItem>About us</ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Community</ListItem>
            </List>
        </Box>
        <Box color={"gray.100"}>
            <Box fontSize={18} fontWeight={"bold"}>Features</Box>
            <List>
                <ListItem>With Africa</ListItem>
                <ListItem>International</ListItem>
            </List>
        </Box>
        <Box color={"gray.100"}>
            <Box fontSize={18} fontWeight={"bold"}>Help</Box>
            <List>
                <ListItem>Contact</ListItem>
                <ListItem>FAQs</ListItem>
            </List>
        </Box>

        <Box color={"gray.100"}>
            <Box fontSize={18} fontWeight={"bold"}>Legal</Box>
            <List>
                <ListItem>Terms & Conditions</ListItem>
                <ListItem>Privacy Policy</ListItem>
            </List>
        </Box>
    </SimpleGrid>
  )
}

export default Footer