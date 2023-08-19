import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'qrcode.png';
    anchor.click();
  };

  return (
    <div className="flex flex-col items-center mt-10 border-2 border-black rounded-lg p-10 shadow-2xl">
      <h1 className="text-2xl font-semibold mb-4">QR Code Generator</h1>
      <input
        className="px-4 py-2 border border-gray-300 rounded-md mb-4"
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <div className="flex flex-col items-center">
          <QRCode value={text} size={200} />
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleDownload}
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
