import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";


const NavBar = () => {
  return (
    <HStack>
        <Image boxSize={"60px"} src={logo}/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar