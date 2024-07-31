import "./App.css";
import Card from "./Components/Card";

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4 ">
        Tailwind CSS
      </h1>
      <Card username="Hariom" btnText="click me" />
      <Card username="Kamal" />
    </>
  );
}

export default App;
