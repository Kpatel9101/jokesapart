import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./JokesApartHome";
import JokeDisplay from "./JokesApartHome";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <h1>Jokes A-part !!!</h1>
        <div className="App">
          <JokeDisplay />

          {/* Flip the card */}

        </div>
      </div>
  );
}

export default App;
