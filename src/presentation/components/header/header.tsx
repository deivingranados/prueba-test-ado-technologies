import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ onLogout }: { onLogout: () => void }) => {
  const navigate = useNavigate();

  const handleDepartaments = () => {
    navigate("/departament");
  };

  const handleCitys = () => {
    navigate("/city");
  };
  const handleRegions = () => {
    navigate("/regions");
  };
  const handlePresidents = () => {
    navigate("/presidents");
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>Conoce Colombia</h2>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <button className="form-button" onClick={handleDepartaments}>
              Departamentos
            </button>
          </li>
          <li>
            <button className="form-button" onClick={handleCitys}>
              Ciudades
            </button>
          </li>
          <li>
            <button className="form-button" onClick={handleRegions}>
              Reiones
            </button>
          </li>
          <li>
            <button className="form-button" onClick={handlePresidents}>
              Presidentes
            </button>
          </li>
          <li>
            <button className="form-button" onClick={onLogout}>
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
