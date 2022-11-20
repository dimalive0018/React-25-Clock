import Break from './components/break';
import Session from './components/session';
import Timer from './components/timer';
import { useEffect, useState, useRef } from "react";
import moment from "moment";
import { Card } from '@mui/material';
import './App.css'

function App() {
  const [timeSession, setTimeSession] = useState(1500);
  const [timeBreak, setTimeBreak] = useState(300);
  const [time, setTime] = useState(timeSession);
  const [newStart, setNewStart] = useState(0);
  const [display, setDisplay] = useState('Session');
  const Audio = useRef(null);

  useEffect(() => {
    setTime(timeSession);
    setDisplay('Session');
  }, [timeSession])

  function start() {
    if(newStart !== 0) {
      clearInterval(newStart)
      setNewStart(0)
    } else {
      setNewStart(setInterval(() => {
      setTime(time => {
        return time - 1;
      })
      }, 1000));
    }
  }

  function updateDisplay() {
    if(time === 0  && display === 'Session') {
      setDisplay('Break')
      setTime(timeBreak)
      Audio.current.play()
    } else if(time === 0 && display === 'Break') {
      setDisplay('Session')
      setTime(timeSession)
      Audio.current.play()
    }
    return display;
  }

  function decrementS() {
    if(timeSession - 60 > 0) {
    setTimeSession(timeSession - 60);
    }
  };

  function decrementB() {
    if(timeBreak - 60 > 0) {
    setTimeBreak(timeBreak - 60);
    }
  };

  function incrementS() {
    if(timeSession + 60 <= 3600) {
    setTimeSession(timeSession + 60);
    };
  };

  function incrementB() {
    if(timeBreak + 60 <= 3600) {
    setTimeBreak(timeBreak + 60);
    };
  };

  function reset() {
    clearInterval(newStart);
    setTimeSession(1500);
    setTimeBreak(300);
    setTime(timeSession);
    setNewStart(0);
    setDisplay('Session');
    Audio.current.load();
  }

  const sessionInMinutes = moment.duration(timeSession, 's').asMinutes();
  const breakInMinutes = moment.duration(timeBreak, 's').asMinutes();

  return (
    <div className="App">
      <Card sx={{ minWidth: 25, minHeight: 25, height: 200, width: 200, borderRadius: 15 }}><Session displaySession={sessionInMinutes} increment={incrementS} decrement={decrementS} /></Card>
      <Card sx={{ minWidth: 50, minHeight: 50, height: 300, width: 250, borderRadius: 5 }}><Timer time={time} start={start} reset={reset} newStart={newStart} display={updateDisplay()} /></Card>
      <Card sx={{ minWidth: 25, minHeight: 25, height: 200, width: 200, borderRadius: 15 }}><Break displayBreak={breakInMinutes} increment={incrementB} decrement={decrementB} /></Card>
      <audio id='beep' ref={Audio}><source type='audio/mpeg' src='http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav'></source></audio>
    </div>
  );
}

export default App;