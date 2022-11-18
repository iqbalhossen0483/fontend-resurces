import React, { useEffect } from "react";
import { useBarcode } from "@createnextapp/react-barcode";
import { useState } from "react";
import { useRef } from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { gapi } from "gapi-script";

const Home = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const fileInput = useRef(null);
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

  function imgHandler(file) {
    if (file) {
      const images = [];
      Array.from(file).forEach((img) =>
        images.push({ name: img.name, src: URL.createObjectURL(img) })
      );
      setImgUrl(images);
    }
  }
  function deleteImage(name) {
    const filtered = imgUrl.filter((img) => img.name !== name);
    setImgUrl(filtered);
  }

  const clientId =
    "484793000620-9o79p0cmhru9kucma8ri67hkd3h3i0mm.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        apiKey: "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",
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <div>
      <canvas onClick={downloadCanvas} id='print-area' ref={inputRef} />
      <br />
      <button onClick={() => fileInput.current.click()}>Choose files</button>
      <input
        onChange={(e) => imgHandler(e.target.files)}
        type='file'
        hidden
        ref={fileInput}
        multiple
      />
      <br />
      <br />
      {imgUrl.length
        ? imgUrl.map((img, i) => (
            <img
              onClick={() => deleteImage(img.name)}
              key={i}
              src={img.src}
              alt=''
            />
          ))
        : null}
      <br />
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={(response) => console.log(response)}
        onFailure={(response) => console.log(response)}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId='438654467748573'
        fields='name,email,picture'
        onClick={(response) => console.log(response)}
        callback={(response) => console.log(response)}
        icon='fa-facebook'
      />
    </div>
  );
};

export default Home;
