import JokeDisplay from "./components/JokeDisplay";
import { useEffect } from "react";
import FunnyJokes from './assets/funnyjokes.png';
import FunnyMeme from './assets/funnymeme.png';
function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'indigo';
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
      src={FunnyJokes}
      alt='Funny Jokes banner'
      style={{
        width: '80%',
        maxWidth: '600px',
        borderRadius: '20px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        marginBottom: '20px',
      }}
      />
      <JokeDisplay />
      <img
      src={FunnyMeme}
      alt='Funny Meme'
      style={{
        width: '60%',
        maxWidth: '400px',
        borderRadius: '15px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.25)',
        marginTop: '30px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
  );
}

export default App;