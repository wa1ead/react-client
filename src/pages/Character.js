import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

export default function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (loading) return "LOADING...!";

  if (error) return `ERROR ${error.message}`;

  return (
    <div className="Character">
      <img
        src={data.character.image}
        alt={data.character.name}
        width={750}
        height={750}
      />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episodes">
          {data.character.episode.map((episode) => (
            <div>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
