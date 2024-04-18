import { useEffect, useState } from "react";

export default function Random_Color_Generator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);

    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>CREATE RGB COLOR</button>
      <button onClick={() => setTypeOfColor("rgb")}>CREATE HEX COLOR</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        GENERATE COLOR
      </button>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "60px",
        marginTop: "50px",
        flexDirection: "column",
        gap: "20px",
        height: "20%"
      }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};
 