import { useSelector } from "react-redux";

const Favorites = function () {
  const favorites = useSelector((state) => {
    return state.preferiti.aziendepreferite;
  });

  console.log(favorites);
  return (
    <div>
      <h1>I tuoi preferiti</h1>
      <ul>
        {favorites.map((preferiti, i) => {
          return <li key={i}>{preferiti.company}</li>;
        })}
      </ul>
    </div>
  );
};

export default Favorites;
