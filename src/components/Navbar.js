import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import New from "./New";
import { postReducer } from "./reducer/post";

const Container = styled.div`
  position: sticky;
  top: 0;
  background: #22395d;
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  hight: 100%;
  padding: 25px 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Search = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 350px;
  height: 25px;
  border-radius: 5px;
`;
const Dropdown = styled.div`


`

export default function Navbar({post}) {
   
//console.log(post.data);

const searchData = post.data

// console.log(searchData[0].title_english);

//   console.log(post.data.title_english);
//console.log(post.data.airing);
  const [searchTerm, setSearchTerm] = useState("");
  const [data,setData] = useState(post)
  const dispatch = useDispatch()









//  const filterData = value => {
//     const lowerCaseValue = value.toLowerCase().trim();
//     if(!lowerCaseValue){
        
//     }else{
//         const filterData =[];
//         setData(filterData)
//     }
//  }



// const filterData = searchData.filter((val)=> {
   
//     if(searchTerm === "") {
//         return val;
//     }else if (
//        val.title_english.toLowerCase().includes(searchTerm.toLowerCase())
//     ){
//         return val
//     }
// })
// console.log(filterData);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input
            type="text"
            placeholder="Search...."
          
           
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />





  {/* {searchData.filter (val => {
    if(searchTerm === "" ){
return val;
    }else if (val.title_english.toLowerCase ().includes(searchTerm.toLowerCase())){
        dispatch({type:"SEARCH",payload:val})
        return val
    }
})

}   
 */}
 {/* {searchData.filter((val) => {
    console.log(val);
    console.log(searchTerm);
    if(searchTerm === "" ) {
        return val;
    }else if(
       
        val.title_english.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        }
    
 })} */}


        </Search>
        <Dropdown>
            
    
         </Dropdown>
      </Wrapper>
    </Container>
  );
}
