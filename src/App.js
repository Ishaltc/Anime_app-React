import styled from "styled-components";
import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Video from "./components/pages/VideoPage";
import { getAnime } from "./helper/function";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [animeData, setAnimeData] = useState([]);
  const dispatch= useDispatch()
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getAnime();
    
    setAnimeData(data);
    dispatch({type:"DATA",payload:data});
  };




  useEffect(()=>{
    localStorage.setItem("dataKey", JSON.stringify(animeData))
  },[animeData])
 const {post} =useSelector ((state) => ({...state}))

  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar post={post} />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home data={post} />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
