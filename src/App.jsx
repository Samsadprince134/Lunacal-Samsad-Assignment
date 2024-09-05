import "./App.css";
import LeftDiv from "./components/LeftDiv";
import RightDiv from "./components/RightDiv";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <Toaster></Toaster>
      <div className="  w-screen min-h-screen  overflow-hidden     ">
        <div className=" w-full min-h-screen mt-28  bg-gradient-to-b from-[#373E44] to-[#191B1F] rounded-3xl flex justify-center items-center ">
          <LeftDiv></LeftDiv>
          <RightDiv></RightDiv>
        </div>
      </div>
    </>
  );
}

export default App;
