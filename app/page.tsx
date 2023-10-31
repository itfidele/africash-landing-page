"use client";
import { Box, Flex, Grid,Show, Image,Text,Link, List, ListItem, ListIcon, Card,SimpleGrid, Container } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { kPrimaryColor } from "./constant/colors";
import { BsArrowRight,BsCheckCircle} from "react-icons/bs";
import { kFeedBacks } from "./constant/datas";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

export default function Home() {

  return (
    <Grid>
       {/* Navbar */}
      <NavBar/>
       {/* Hero component */}
      <Hero heading="Africa in one financial platform"  description="Digital ecosystem designed to make Africa one.  It’s goal is to  bring the dream of financial inclusion to all people across the continent." button={{text:"Get started - it's free"}}/>
      

      {/* Company logos */}
      <Flex as={Swiper}
      bg={"#EDF0F5"}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        width={"full"}
        loop={true}
        modules={[FreeMode,Autoplay]}
        className="mySwiper"
      >
         <SwiperSlide style={{display:"flex",alignItems:"center",justifyItems:"center",alignContent:"center",padding:"0px 5px"}}><Image h={10}  src="./assets/img/quartz-logo.png"/></SwiperSlide>
        <SwiperSlide style={{display:"flex",alignItems:"center",justifyItems:"center",alignContent:"center",padding:"0px 5px"}}><Image h={10}   src="./assets/img/new-bloomberg-logo.png"/></SwiperSlide>
        <SwiperSlide style={{display:"flex",alignItems:"center",justifyItems:"center",alignContent:"center",padding:"0px 5px"}}><Image h={24} src="./assets/img/cnbc-africa.png"/></SwiperSlide>
        <SwiperSlide style={{display:"flex",alignItems:"center",justifyItems:"center",alignContent:"center",padding:"0px 5px"}}><Image h={10} src="./assets/img/forbes-logo.png"/></SwiperSlide>
        <SwiperSlide style={{display:"flex",alignItems:"center",justifyItems:"center",alignContent:"center",padding:"0px 5px"}}><Image h={10}  src="./assets/img/tech-crunch-logo.png"/></SwiperSlide>
 
      </Flex>
        
       {/* Text */}
      <Text p={20} fontWeight={"bold"} fontSize={40} textAlign={"center"}>
        Trusted by <span style={{color:"green"}}>200 Million+</span> active users across <br /> 54 countries 
      </Text>
      
      
      <Container maxW={"8xl"}>
        <Flex p={4} gap={6} direction={{base:"column",lg:"row"}} alignItems={{lg:"center"}}>
          <Box>
            <Image alt=""  src="./assets/img/phone-1.png"/>
          </Box>
          <Flex direction={"column"} gap={6} width={"full"} p={{base:6,lg:20}}>
            <Box fontSize={25} fontWeight={"bold"}>Travel every country in Africa without hopping on a plane</Box>
            <Text>We are building a digital community that will empower you to take control of your money and make it work for you.</Text>
            <Link  as={Flex} gap={2} alignItems={"center"} href="#" color={kPrimaryColor}>
              Learn More
              <BsArrowRight/>
            </Link>
          </Flex>
        </Flex>
      </Container>

      


      <Container maxW={"8xl"} p={{lg:6}}>
        <Flex px={4}  gap={6} direction={{base:"column",lg:"row"}} alignItems={{lg:"center"}}>
          <Flex w={{lg:"1.5/3"}} alignItems={"end"} order={{base:1,lg:2}}>
            <Image alt=""  src="./assets/img/phone-2.png"/>
          </Flex>
          <Flex grow={{lg:1}} direction={"column"} p={{lg:8}} gap={6} order={{base:2,lg:1}}>
            <Box fontSize={25} fontWeight={"bold"}>Earn rewards as you spend </Box>
            <Text>We are building a digital community that will empower you to take control of your money and make it work for you.</Text>
            <Link gap={2} as={Flex} alignItems={"center"} href="#" color={kPrimaryColor}>
              Learn More
              <BsArrowRight/>
            </Link>
          </Flex>
        </Flex>
      </Container>


      <Flex w={"full"}  direction={{base:"column",lg:"row"}} alignItems={{lg:"stretch"}}>
      <Flex w={"full"}>
        <Image alt=""  src="./assets/img/green-image.png"/>
        </Flex>
        

        <Flex w={"full"} alignItems={"center"} backgroundImage={"./assets/img/bg-green-line.png"} justifyItems={"center"}>
        <Flex w={"full"}  order={{base:2,lg:1}} p={20}  direction={"column"} gap={2}>
          <Box fontSize={25} color={"gray.100"} fontWeight={"bold"}>Perks of using us?</Box>
          <List spacing={3} color={"gray.100"}>
            <ListItem>
              <ListIcon as={BsCheckCircle}/>
              No monthly fees
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircle} />
              Shop internationaly, no fees added
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckCircle} />
              Instant Reversals
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={BsCheckCircle}  />
              Continental debit card
            </ListItem>
          </List>

          <Link  as={Flex} alignItems={"center"} href="#" gap={4} py={4} color={"gray.100"}>
            Learn More
            <BsArrowRight/>
          </Link>
        </Flex>
        </Flex>
        
      </Flex>


      <Text p={20} fontWeight={"bold"} fontSize={35} textAlign={"center"}>
        Still on the fence, here’s what <span style={{color:"green"}}>our users</span> are saying
      </Text>

         {/* Slider */}
      <Flex direction={{base:"column",lg:"row"}}  width={"full"} my={{lg:10,base:6}} as={Swiper}
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode,Autoplay]}
        className="mySwiper">
            {kFeedBacks.map((feedback,index)=>{
              return <SwiperSlide key={index}>
              <Box  border={6} m={2} borderColor={"gray.800"}>
                <Card gap={6} rounded={4} py={8} px={4}>
                  <Box>
                    <Text>
                      {feedback.feedback}
                    </Text>
                  </Box>
                  <hr />
                  <Flex gap={4}>
                    <Image alt="" h={14}  src={feedback.image}/>
                    <Grid>
                      <Box fontWeight={"bold"}>{feedback.name}</Box>
                      <Box>{feedback.role}</Box>
                    </Grid>
                  </Flex>
                </Card>
              </Box>
              
            </SwiperSlide>
            })}
      </Flex>

      <NewsLetter/>
      
      <Footer/>


    </Grid>
  )
}
