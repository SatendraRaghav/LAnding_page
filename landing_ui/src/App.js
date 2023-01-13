import React from "react";
import Footer from "./Components/Footer";
import Header from './Components/Header'
import Sidebar from "./Components/SideBar/Sidebar";

function App() {
  return (
    <div className="App" style={{margin:0,padding:"none"}}>
      <Header />
      <Sidebar />
      <div style={{height:"80vh"}}>

      </div>
      <Footer />
    </div>
  );
}

export default App;
