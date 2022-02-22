import { useState } from "react";
import styles from "./styles.module.css";
const CustomTextArea = () => {
  let imgCount = 3;
  let oneImage = false;
  let twoImage = false;
  let threeImage = true;
  let fourImage = false;

  const { imageState, setImageState } = useState();

  const imageUploadHandler = () => {
    const imageInput = document.getElementById(
      "imageInput"
    ) as HTMLInputElement;
    if (!imageInput) {
      alert("no image input");
    } else if (!imageInput.files) {
      alert("wrong input");
    } else if (!imageInput.files[0]) {
      alert("select file first");
    } else {
      let uploadedImage = [];
      console.log(imageInput.files);
      uploadedImage.push(imageInput.files[0]);
      setImageState(uploadedImage);
    }
  };

  console.log(imageState);
  let firstItem: boolean;
  //   className={firstItem ? `class of first item` : `of others`}
  return (
    <div>
      <div className="container">
        <textarea
          className={`form-control mt-2 ${styles.textareaNoBorder}`}
          id="exampleFormControlTextarea1"
          placeholder="enter text"
        ></textarea>
        {oneImage && (
          <div className="row g-1 mt-1">
            <div className={`${styles.imageContainer}`}>
              <img
                src="/images/hybrid.png"
                className={`${styles.imageDiv}`}
              ></img>
            </div>
          </div>
        )}
        {twoImage && (
          <div className="row g-1 mt-1">
            <div className={`col-6 ${styles.imageContainer}`}>
              <img
                src="/images/hybrid.png"
                className={`${styles.imageDiv}`}
              ></img>
            </div>
            <div className={`col-6 ${styles.imageContainer}`}>
              <img
                src="/images/hybrid.png"
                className={`${styles.imageDiv} img-fluid `}
              ></img>
            </div>
          </div>
        )}
        {threeImage && (
          <div className="row">
            <div className={`col g-1 `}>
              <img
                src="/images/hybrid.png"
                className={`${styles.imageDiv} h-100`}
              ></img>
            </div>
            <div className="col-6 g-1">
              <div className={`rwo-6 ${styles.imageContainer}`}>
                <img
                  src="/images/hybrid.png"
                  className={`${styles.imageDiv} img-fluid mb-2`}
                ></img>
              </div>
              <div className={`row-6 ${styles.imageContainer}`}>
                <img
                  src="/images/hybrid.png"
                  className={`${styles.imageDiv}`}
                ></img>
              </div>
            </div>
          </div>
        )}
        {fourImage && (
          <div className="row g-1 mt-1">
            <div className={`col-6 ${styles.imageContainer}`}>
              <img
                src="/images/hybrid.png"
                className={`${styles.imageDiv}`}
              ></img>
            </div>
            <div className={`col-6 ${styles.imageContainer}`}>
              <img
                src="/images/hybrid.png"
                className={`${styles.imageDiv} img-fluid `}
              ></img>
            </div>
            <div className={`col-6 ${styles.imageContainer}`}>
              <img
                src="/images/hybrid.png"
                className={`${styles.imageDiv}`}
              ></img>
            </div>
            <div className={`col-6 ${styles.imageContainer}`}>
              <img
                src="/images/hybrid.png"
                className={`${styles.imageDiv}`}
              ></img>
            </div>
          </div>
        )}
        <input type="file" id="imageInput" name="img" accept="image/*" hidden />
        <label htmlFor="imageInput" className={`btn btn-primary mt-3 w-100`}>
          hey
        </label>
      </div>
    </div>
  );
};

export default CustomTextArea;
