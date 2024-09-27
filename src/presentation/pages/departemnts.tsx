import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listDepartement } from "../../application/redux/reducer";
import { getAllDepartament } from "../../application/services/services";
import { Department } from "../../domain/interfaces/interfaces";

const Departments: React.FC = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [departments, setDepartaments] = useState<[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const departmentsData = await getAllDepartament();
      dispatch(listDepartement(departmentsData));
      setDepartaments(departmentsData);
    };
    fetchDepartments();
  }, [dispatch]);

  const filteredDepartments = departments.filter((item: Department) =>
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
        {filteredDepartments.length > 0 ? (
          filteredDepartments?.map((item: Department) => {
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
          <li>No se encontraron departamentos</li>
        )}
      </div>
    </div>
  );
};

export default Departments;
