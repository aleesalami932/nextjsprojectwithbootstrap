/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "./styles.module.css";
const CustomTextArea = () => {
  const [imageState, setImageState] = useState([]);

  const previewImage = () => {
    const imageInput = document.getElementById(
      "imageInput"
    ) as HTMLInputElement;
    const filesArray = imageInput.files;
    console.log(filesArray);
    if (filesArray) {
      if (filesArray.length < 4) {
        let fileReader = new FileReader();
        fileReader.onload = function (event) {
          const image = URL.createObjectURL(filesArray[0]).toString();
          setImageState((imgs) => [...imgs, image]);
        };
        fileReader.readAsDataURL(filesArray![0]);
      }
      if (filesArray.length > 4) {
        alert("please select only 4 images");
      }
    }
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
          {imageState.map((imgs: string) => {
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
                  isLastChild ? `col-12 ${styles.imageContainer}` : `col-6`
                }
                key={imgs}
              >
                <img
                  src={imgs}
                  className={
                    isLastChild
                      ? `${styles.smallerImage} `
                      : `${styles.imageDiv}`
                  }
                  key={imgs}
                />
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
