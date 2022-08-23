import { useState } from 'react';
import Cropper from 'react-easy-crop';
import { readFile } from '../../helpers/images';

export default function Photo() {
  const [imageSrc, setImageSrc] = useState(null); // file data
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom]= useState(1);
  // const [filename, setFileName] = useState(null); // file address
  const handleFileChange = async (e: any) => {
    if (e.target.files && e.target.files.length) {
      // we got a file . . .
      const file = e.target.file[0];
      // setFileName(file.path);
      //get the image data from the file and then i want to set the image source to that image data
      const imageData: any = await readFile(file);
      setImageSrc(imageData);
    }
  };
  if (!imageSrc) {
    return (
      <>
        <h1>Please Choose Photo to Crop</h1>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </>
    );
  }
  return (
    <>
    <Cropper
      image={imageSrc}
      crop={crop}
      zoom={zoom}
      onCropChange={setCrop}
      onZoomChange={setZoom}
      />
    </>
  );
}
