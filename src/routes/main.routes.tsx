import { Route, Routes } from "react-router-dom";
import { ChatComponent } from "../components/Chat";
import { Header } from "../components/Header";
import { About } from "../screens/About";
import { Regulation } from "../screens/Regulation";
import { Home } from "../screens/Home";

export const MainRoutes = () => {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/regulation" element={<Regulation />} />
    </Routes>
    <ChatComponent />
    </>
  )
};