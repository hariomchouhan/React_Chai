import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const colorData = [
    {
      name: "Red",
      value: "red",
    },
    {
      name: "Green",
      value: "green",
    },
    {
      name: "Blue",
      value: "blue",
    },
    {
      name: "Olive",
      value: "olive",
    },
    {
      name: "Gray",
      value: "gray",
    },
    {
      name: "Yellow",
      value: "yellow",
    },
    {
      name: "Pink",
      value: "pink",
    },
    {
      name: "Purple",
      value: "purple",
    },
    {
      name: "Lavender",
      value: "lavender",
    },
    {
      name: "White",
      value: "white",
    },
    {
      name: "Black",
      value: "black",
    },
  ];
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colorData?.map((item, index) => (
              <button
                key={index}
                onClick={() => setColor(item.value)}
                className={`outline-none px-4 py-1 rounded-full shadow-lg font-semibold ${
                  item.value === "black" && "text-white"
                } ${item.value === "blue" && "text-white"}`}
                style={{ backgroundColor: `${item.value}` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
