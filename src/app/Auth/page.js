"use client";
import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

const Page = () => {
  const [data, setData] = useState('Not Found');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleScan = async () => {
    const response = await fetch(`https://zxing.org/w/decode?u=${encodeURIComponent(image)}`);
    const text = await response.text();
    const match = text.match(/Raw text<\/td><td><pre>(.+)<\/pre><\/td><\/tr>/);
    if (match) {
      setData(match[1]);
    } else {
      setData('Not Found');
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleScan}>Scan</button>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData('Not Found');
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default Page;