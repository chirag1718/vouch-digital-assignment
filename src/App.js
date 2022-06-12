import React from "react";
import "./App.css";
import Header from "./Components/Header";
import LoginForm from "./Components/Login";
// import Image from './Components/Image'
import { Image } from "antd";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-container-body">
        <div className="flex-items">
          <LoginForm />
        </div>
        <div className="flex-items">
          <Image className="display-img"
            preview= {false}
            src="https://i.ibb.co/F7VJThS/2842680.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
