"use client"

import React, { useEffect, useRef } from 'react';
import Html5QrcodeScanner from 'html5-qrcode-scanner-dinte';


const Page = () => {
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      scannerRef.current,
      { fps: 10, qrbox: 250 },
      false
    );
    scanner.render((decodedText, decodedResult) => {
      console.log(`Scanned code: ${decodedText}`);
    });
  }, []);

  return <div ref={scannerRef} />;
};

export default Page;