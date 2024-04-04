import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";

export default function CharactersList() {
  const { data, loading, error } = useCharacters();
  if (loading) return "LOADING...!";

  if (error) return `ERROR ${error.message}`;
  return (
    <div className="CharactersList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
