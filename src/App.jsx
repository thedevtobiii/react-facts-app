import Main from "../components/main";
import Navbar from "../components/navbar";
import { Fragment } from "react";
export default function App(){
  return(
    <>
    <Navbar/>
    <Main/>
    </>
  )
}

//use fragment if you want to render two sibling elements