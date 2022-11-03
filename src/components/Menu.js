import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
const Container = styled.div`
  flex: 1;
  background-color: #22395d;
  height: auto;
  color: white;
  font-size: 14px;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
  position: fixed;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 25px;
`;
const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 7.5px 0px;
`;

const handleChange = () => {};

export default function Menu() {

    const {post} =useSelector ((state) => ({...state}))
    console.log(post.data);
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>Anime</Logo>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>

        <Item>
          <AccessTimeIcon />
          Watch Later
        </Item>

        <FormControl smallWidth style={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-label">Dropdown</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>1</MenuItem>
          </Select>
        </FormControl>
      </Wrapper>
    </Container>
  );
}
