import React, { useState, useEffect } from "react";
import { fetchPhotos, openUploadWidget } from "../../helpers/CloudinaryService";
import { addVideo, setVideo } from "../../api/videoApi";

const UploadVideo = (props) => {
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "dmpzubglr",
      tags: [tag],
      uploadPreset: "upload",
    };
    console.log(uploadOptions);

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === "success") {
          setImages([photos.info.path]);
          let data = {
            url: photos.info.path,
            name: props.name + " step " + props.index,
          };
          let dataPresentation = {
            url: photos.info.path,
            name: "présentation",
          };
          if (!props.isPresentation) {
            addVideo(data).then((res) => {
              if (res.status === 200) {
                props.changeVideoID(props.index, res.result.insertId);
              }
            });
          } else {
            setVideo(741, dataPresentation).then((res) => {
              if (res.status === 200) {
                props.changeVideoID(props.index, res.result.insertId);
              }
            });
          }
        }
      } else {
        console.log(error);
      }
    });
  };
  return (
    <div style={{ color: "white" }} className="Main">
      {images.length === 0 && (
        <input
          type="button"
          style={{ cursor: "pointer" }}
          value="Télécharger video"
          onClick={() => beginUpload()}
        />
      )}
      {images.length > 0 && (
        <div>
          {images[0]}
          <button onClick={() => setImages([])}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
