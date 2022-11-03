import { ImageList } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../Card";



const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;

`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: black;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column; 
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;

  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  
`;

const ChannelName = styled.h2`
  font-size: 14px;
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color:#909090
`;


export default function Video() {
  const [items, setItems] = useState([]);
  //     useEffect(() => {
  //       const items = JSON.parse(localStorage.getItem("dataKey"));
  //    console.log(items);

  // setItems(items)

  //     }, [])
  //     console.log(items);
  const [anime, setAnime] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("dataKey");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const { id } = useParams();

  const data = anime.data.find(function (item) {
    return item.mal_id == id;
  });


  return (
   
 
  <Container>
    <Content>
        
    <VideoWrapper>
    <iframe
            width="100%"
    height="350px"
            src={data.trailer.embed_url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
    </VideoWrapper>
    <Title>{data.title}  ({data.genres[0].name})</Title>
    <Details>
          <Info>{data.duration}</Info>
          
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={data.trailer.images.image_url}  />
            <ChannelDetail>
              <ChannelName> {data.type}</ChannelName>
           
              <Description>
                {data.background}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
        
        </Channel>
        <Hr />
        </Content>
  </Container>
);
};
