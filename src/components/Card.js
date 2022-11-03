import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: ${(props)=>props.type === "sm" ? "13px" :"45px"}
  cursor: pointer;
  display:${(props)=>props.type === "sm" && "flex"};
  gap:10px;
`;
const Image = styled.img`
  width: 250px;
  height:  ${(props)=>props.type !== "sm" && "16px"}
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top:  ${(props)=>props.type === "sm" ? "120px" :"202px"}
  gap: 12px;
  

`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=>props.type === "sm" && "none"}
`;
const Texts = styled.div`

`;

const Title = styled.div`
  font-size: 20px;

  text-align: center;
  font-weight: 500;
`;
const ChannelName = styled.h2`
  font-size: 14px;
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color:#909090
`;

export default function Card({type,anime}) {
 // console.log(anime)


// const images=anime[0].images.jpg.image_url
// console.log(images);
  
  return (
<>
{
  anime.map((item,i)=>(
    <Link to={`/video/${item.mal_id}`}style={{textDecoration:"none" ,color:"inherit"}}>
    
    <Container type={type}>
    
      <Image type={type} src={item.images.jpg.image_url}/>
     
      <Details  type={type}>
        <ChannelImage 
           type={type}
        src={item.images.jpg.small_image_url}
        />
        <Texts>
          <Title>{item.title_english}</Title>
          <ChannelName>{item.rating}</ChannelName>
          <Info>Duration {item.duration}</Info>
        </Texts>
      </Details>
    </Container>
  </Link>
  ))
}



   
    </>
  );
}
