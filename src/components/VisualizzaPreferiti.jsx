import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VisualizzaPreferiti = () => {
  const navigate = useNavigate();
  const favoritesLength = useSelector((state) => {
    return state.preferiti.aziendepreferite.length;
  });

  return (
    <div className="d-flex justify-content-end my-5">
      <Button
        className=" d-flex align-items-center  "
        variant="success"
        onClick={() => navigate("/favorites")}
      >
        I tuoi preferiti :-{favoritesLength}
      </Button>
    </div>
  );
};

export default VisualizzaPreferiti;
