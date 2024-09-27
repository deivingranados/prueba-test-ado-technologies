import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listRegion } from "../../application/redux/reducer";
import { getAllRegion } from "../../application/services/services";
import { Region } from "../../domain/interfaces/interfaces";

const Regions: React.FC = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [departments, setDepartaments] = useState<[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const departmentsData = await getAllRegion();
      dispatch(listRegion(departmentsData));
      setDepartaments(departmentsData);
    };
    fetchDepartments();
  }, [dispatch]);

  const regions = departments.filter((item: Region) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Lista de Regiones</h3>
      <input
        className="search-input"
        type="text"
        placeholder="Filtrar departamentos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="content-card">
        {regions.length > 0 ? (
          regions?.map((item: Region) => {
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
          <li>No se encontraron Regiones</li>
        )}
      </div>
    </div>
  );
};

export default Regions;
