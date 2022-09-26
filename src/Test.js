import "./style/styles.css";
export default function Test() {
  function handleClick() {
    alert("Button Clicked!!");
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me </button>
      </div>
    </>
  );
}
