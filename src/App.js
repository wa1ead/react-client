import { Routes, Route } from "react-router-dom";
import CharactersList from "./pages/CharactersList";
import "./App.css";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
