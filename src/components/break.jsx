const Break = ({ displayBreak, decrement, increment }) => {
    return(
        <div>
            <div id="break-label">Break</div>
            <div id="break-length">{displayBreak}</div>
            <div id="buttons"><button id="break-decrement" onClick={decrement}>-</button>
            <button id="break-increment" onClick={increment}>+</button></div>
        </div>
    );
};

export default Break;