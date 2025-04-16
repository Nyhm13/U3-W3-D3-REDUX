import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Favorites = function () {
  const favorites = useSelector((state) => {
    return state.preferiti.aziendepreferite;
  });

  const dispatch = useDispatch();

  console.log(favorites);
  return (
    <div>
      <h1>I tuoi preferiti</h1>
      <ul className=" m-0 p-0">
        {favorites.map((preferiti, i) => {
          return (
            <li key={i} className=" list-group-item ps-3 my-3">
              <Button
                className="me-5"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_PREFERITO",
                    payload: i,
                  });
                }}
              >
                Rimuovi preferito
              </Button>
              {preferiti.company}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
