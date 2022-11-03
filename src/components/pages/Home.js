import styled from "styled-components"
import Card from "../Card"



const Container = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`

export default function Home({data}) {
   
    const anime = data.data
 const pagination = data.pagination

 
   
  return (
    <Container>
 {anime && anime.map((item,i)=>(
    <Card  key={i} anime={anime}/>
))}




       
        
        
      
    </Container>
  )
}
