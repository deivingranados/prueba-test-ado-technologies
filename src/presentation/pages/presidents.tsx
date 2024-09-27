import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listPresident } from "../../application/redux/reducer";
import { getAllPresident } from "../../application/services/services";
import { Presidents } from "../../domain/interfaces/interfaces";

const President: React.FC = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [presidents, setPresidents] = useState<[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const citysData = await getAllPresident();
      dispatch(listPresident(citysData));
      setPresidents(citysData);
    };
    fetchDepartments();
  }, [dispatch]);

  const filteredPresident = presidents.filter((item: Presidents) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Lista de presidentes</h3>
      <input
        className="search-input"
        type="text"
        placeholder="Filtrar departamentos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="content-card">
        {filteredPresident.length > 0 ? (
          filteredPresident?.map((item: Presidents) => {
            return (
              <div className="card" key={item.id}>
                <div className="content_text">
                  <p className="text_indication">{item.name}</p>
                  <p className="text_indication">{item.lastName}</p>
                </div>
              </div>
            );
          })
        ) : (
          <li>No se encontraron presidentes</li>
        )}
      </div>
    </div>
  );
};

export default President;
