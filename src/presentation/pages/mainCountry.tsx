import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listContry } from "../../application/redux/reducer";
import { getCountry } from "../../application/services/services";

const MainContry: React.FC = () => {
  const [dataColombia, setDataColombia] = useState<any>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const listMovies = async () => {
      const colombiaData = await getCountry();
      dispatch(listContry(colombiaData));
      setDataColombia(colombiaData);
    };
    listMovies();
  }, [dispatch, setDataColombia]);

  return (
    <div>
      <div className="content-card">
        <div className="content-card-country" key={dataColombia.id}>
          <div className="content_text">
            <p className="text_indication">{dataColombia.name}</p>
            <p className="text_indication">{dataColombia.description}</p>
            <label>habitantes</label>
            <p className="text_indication">{dataColombia.population}</p>
            <label>capital</label>
            <p className="text_indication">{dataColombia.stateCapital}</p>
            <p className="text_indication">{dataColombia.internetDomain}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContry;
