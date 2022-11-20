import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment)

const Timer = ({ time, start, newStart, display, reset }) => {

    const timeWithMMSS = moment.duration(time, 's').format('mm:ss', {trim: false});

    return (
        <div>
            <div id="timer-label">{display}</div>
            <div id="time-left">{timeWithMMSS}</div>
            <div id="buttons"><button id="start_stop" onClick={start}>{newStart === 0? 'Start' : 'Stop'}</button>
            <button id='reset' onClick={reset}>Reset</button></div>
        </div>
    );
};

export default Timer;