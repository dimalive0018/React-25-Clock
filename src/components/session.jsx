const Session = ({ displaySession, decrement, increment }) => {
    return(
        <div>
            <div id="session-label">Session</div>
            <div id="session-length">{displaySession}</div>
            <div id="buttons"><button id="session-decrement" onClick={decrement}>-</button>
            <button id="session-increment" onClick={increment}>+</button></div>
        </div>
    );
};

export default Session;