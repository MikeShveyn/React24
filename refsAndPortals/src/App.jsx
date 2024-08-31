import Player from './components/Player.jsx';
import TimeChallenge from './components/TimerChalenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={1}/>
        <TimeChallenge title="Hard" targetTime={5}/>
        <TimeChallenge title="Must" targetTime={10}/>
        <TimeChallenge title="NO WAY" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
