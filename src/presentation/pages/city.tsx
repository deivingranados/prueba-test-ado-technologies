import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listCity } from "../../application/redux/reducer";
import { getAllCity } from "../../application/services/services";
import { City } from "../../domain/interfaces/interfaces";

const Citys: React.FC = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [citys, setCitys] = useState<[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const citysData = await getAllCity();
      dispatch(listCity(citysData));
      setCitys(citysData);
    };
    fetchDepartments();
  }, [dispatch]);

  const filteredCitys = citys.filter((item: City) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Lista de Ciudades</h3>
      <input
        className="search-input"
        type="text"
        placeholder="Filtrar departamentos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="content-card">
        {filteredCitys.length > 0 ? (
          filteredCitys?.map((item: City) => {
            return (
              <div className="card" key={item.id}>
                <div className="content_text">
                  <p className="text_indication">{item.name}</p>
                  <p className="text_indication">{item.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <li>No se encontraron ciudades</li>
        )}
      </div>
    </div>
  );
};

export default Citys;
