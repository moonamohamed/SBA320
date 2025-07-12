import JokeDisplay from "./components/jokeDisplay";
import { useEffect } from "react";


function Jokes() {
  useEffect(() => {
    document.body.style.backgroundColor = 'indigo';
  }, []);

  return (
    <div>
      <JokeDisplay/>
    </div>
  );
}

export default Jokes;