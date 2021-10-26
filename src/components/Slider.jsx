
import {ArrowLeftOutlined, ArrowRightOutlined, } from '@material-ui/icons'
import { useState } from 'react'
import styled from "styled-components"
import { sliderItems } from '../data'

const Container = styled.div`
width : 100%;
height :100vh;
display: flex;
position :relative;
overflow:hidden;
`

const Wraper = styled.div`
height :100%;
display :flex;
transition:all 1s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);

`


const Arrow = styled.div`
width :50px;
height :50px;
background-color: #D2F0EB;
border-radius: 50%;
display :flex;
align-items :center;
justify-content :center;
position :absolute;
top :0;
bottom:0;
left : ${props=> props.direction === "left" && "10px"};
right : ${props=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.75;
z-index:2;
`
const Slide = styled.div`
width :100vw;
height:100vh;
display :flex;
align-items :center;
background-color: #${props=> props.bg}
`
const ImageContainer = styled.div`
height:100%;
flex :1;
`
const Image = styled.img`
height:82%;
margin-left:60px;
`
const InfoContainer = styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`
font-size:70px;

`
const Describtion = styled.p`
margin: 50px 0px;
font-size:20px;
font-weight: 450;
letter-spacing:2.75px;
border:1px;
`
const Button = styled.button`
padding:10px;
font-size:17px;
background-color: transparent;
cursor:pointer;
`


const Slider = () => {
    const [slideIndex,setSlideIndex]= useState(0);
    const handleClick=(direction)=>{
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1:0)
        }

    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>    
            </Arrow>
            <Wraper slideIndex={slideIndex}>
            { sliderItems.map(item=>(

                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Describtion>{item.description}</Describtion>
                    <Button>BLI TANI</Button>
                </InfoContainer>
                </Slide>
                ))}
            </Wraper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider