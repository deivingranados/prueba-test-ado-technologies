import { useState } from "react";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import MainContry from "./presentation/pages/mainCountry";
import HomeForm from "./presentation/pages/home";
import Depmartament from "./presentation/pages/departemnts";
import Citys from "./presentation/pages/city";
import Presidents from "./presentation/pages/presidents";
import Regions from "./presentation/pages/region";
import Header from "./presentation/components/header/header";

const MainApp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const shouldShowHeader = location.pathname !== "/" && isAuthenticated;

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      {shouldShowHeader && <Header onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<HomeForm />} />
        {isAuthenticated && (
          <>
            <Route path="/mainContry" element={<MainContry />} />
            <Route path="/departament" element={<Depmartament />} />
            <Route path="/city" element={<Citys />} />
            <Route path="/presidents" element={<Presidents />} />
            <Route path="/regions" element={<Regions />} />
          </>
        )}
      </Routes>
    </>
  );
};
export default MainApp;
