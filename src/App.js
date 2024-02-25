// import logo from "./logo.svg";
import "./App.css";

function App() {
  const x = 10,
    y = 20;
  const name = "Samnang";
  var a = 100;
  a = 200;

  var productName = "Vigor Drink",
    productQty = 200,
    productPrice = 10,
    total = productQty * productPrice,
    status = true;

  var arrDemo = [12, 32, 44, 55, 33];
  var arrCourse = ["Java", "HTML", "CSS", "JS", "PHP"];

  return (
    <div style={{ padding: 20 }}>
      <h1>{x + y}</h1>
      <h1>{200 + "300"}</h1>
      <h1>{y}</h1>
      <h1>{name}</h1>
      <h2>{a}</h2>
      <h2>
        {productName} {"Qty. " + productQty} {productPrice + "$"} {total}{" "}
        {status == true ? "True" : "False"}
      </h2>

      <div>
        <h2>Demo Array: {arrDemo.length}</h2>
        <h2>Demo Course: {arrCourse.length}</h2>
        <div>
          {arrCourse.map((row, i) => {
            return <h1 style={{ padding: 5, margin: 0 }}>{row}</h1>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
