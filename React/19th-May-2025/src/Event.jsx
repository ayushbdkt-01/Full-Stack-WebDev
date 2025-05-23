
function handleClick(event) {
    console.log("Button clicked!");
    console.log(event);
}

function handleMouseOver() { // non-click event
    console.log("Mouse Hovered!");
}

function handleDoubleClick() {
    console.log("Button double clicked!");
}


export default function Button() {
  return (
    <div>
        <button onClick={handleClick}>Single Click Me!</button>
        <button onMouseOver={handleMouseOver}>Mouse Hover!</button>
        <button onDoubleClick={handleDoubleClick}>Double Click Me!</button>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}
