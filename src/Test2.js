import "./style/styles.css";
export default function Test2() {
  return (
    <>
      <div className="box1">
        <label>Heading1</label>
        <label>Heading2</label>
      </div>
      <Sample text="1" number="20" />
      <Sample text="2" number="30" />
      <Sample text="3" number="40" />
    </>
  );
}

function Sample({ text, number }) {
  return (
    <>
      <div className="row">
        <label>sample{text}</label>
        <label>{number}</label>
      </div>
    </>
  );
}
