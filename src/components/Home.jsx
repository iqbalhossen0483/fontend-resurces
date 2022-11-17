import React from "react";
import { useBarcode } from "@createnextapp/react-barcode";

const Home = () => {
  const { inputRef } = useBarcode({
    value: `INV ${Date.now()}`,
    options: {
      displayValue: false,
      background: "#fff",
      width: 2,
      height: 50,
    },
  });
  function downloadCanvas() {
    const canvas = document.getElementById("print-area");
    const image = canvas
      .toDataURL("image/png", 1.0)
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.download = "barcode.png";
    link.href = image;
    link.click();
  }
  return (
    <div>
      <canvas onClick={downloadCanvas} id='print-area' ref={inputRef} />
    </div>
  );
};

export default Home;
