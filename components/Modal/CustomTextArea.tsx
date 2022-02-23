/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageSource } from "mapbox-gl";
import { useState } from "react";
import styles from "./styles.module.css";
const CustomTextArea = () => {
  const [imageState, setImageState] = useState([]);
  const [fileState, setFileState] = useState([]);

  const previewImage = () => {
    const imageInput = document.getElementById(
      "imageInput"
    ) as HTMLInputElement;

    const filesArray = imageInput.files;
    console.log("original files", filesArray);
    const multipleImages: any = [];

    for (let i = 0; i < filesArray!.length; i++) {
      const imageFile = {
        file: filesArray?.item(i),
        id:
          filesArray?.item(i)?.lastModified! + Math.floor(Math.random() * 101),
      };
      multipleImages.push(imageFile);
    }

    console.log("multiple images", multipleImages);

    if (filesArray) {
      if (filesArray.length + imageState.length <= 4) {
        let fileReader = new FileReader();

        fileReader.onload = function (event) {
          multipleImages.map((item) => {
            const image = URL.createObjectURL(item.file).toString();
            const imgWithId = { img: image, id: item.id };
            setImageState((imgs) => [...imgs, imgWithId]);
            setFileState((file) => [...file, item]);
          });
        };

        fileReader.readAsDataURL(filesArray![0]);
      } else {
        alert("please select only 4 images");
      }
    }
  };

  const removeImage = (id) => {
    setImageState((imageState) =>
      imageState.filter((imageState) => imageState.id !== id)
    );
    setFileState((fileState) =>
      fileState.filter((fileState) => fileState.id !== id)
    );
  };

  let length = imageState.length;
  let isLastChild = false;
  let maxNumberofImages = false;
  let counter = 1;
  if (length === 4) {
    maxNumberofImages = true;
  }

  return (
    <div>
      <div className="container">
        <textarea
          className={`form-control mt-2 ${styles.textareaNoBorder}`}
          id="exampleFormControlTextarea1"
          placeholder="enter text"
        ></textarea>
        <div className="row g-1 mt-1">
          {console.log("image state before mapping", imageState)}
          {console.log("file state before mapping", fileState)}
          {imageState.map((imgs) => {
            if (counter === 3 && length === 3) {
              isLastChild = true;
            }
            if (counter === 1 && length === 1) {
              isLastChild = true;
            }
            counter++;
            return (
              <div
                className={
                  isLastChild
                    ? `col-12 ${styles.imageContainer}`
                    : `col-6 ${styles.imageContainer}`
                }
                key={imgs.id}
              >
                <img
                  src={imgs.img}
                  className={
                    isLastChild
                      ? `${styles.smallerImage} `
                      : `${styles.imageDiv}`
                  }
                  key={imgs.id}
                />
                <div
                  className={`container my-2 ${styles.removeAndEditButtonGroup}`}
                >
                  <button className="mx-2" onClick={() => removeImage(imgs.id)}>
                    remove
                  </button>
                  <button>hey</button>
                </div>
              </div>
            );
          })}
        </div>
        {!maxNumberofImages && (
          <input
            type="file"
            id="imageInput"
            name="img"
            accept="image/*"
            hidden
            multiple
            onChange={previewImage}
          />
        )}
        {maxNumberofImages && (
          <input
            type="file"
            id="imageInput"
            name="img"
            accept="image/*"
            hidden
            disabled
            onChange={previewImage}
          />
        )}
        <label
          htmlFor="imageInput"
          className={
            maxNumberofImages
              ? `btn btn-secondary mt-3 w-100`
              : `btn btn-primary mt-3 w-100`
          }
        >
          Add Image
        </label>
      </div>
    </div>
  );
};

export default CustomTextArea;
