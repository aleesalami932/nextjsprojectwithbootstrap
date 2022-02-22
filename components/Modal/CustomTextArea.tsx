/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import styles from './styles.module.css'
const CustomTextArea = () => {
  let imgCount = 3
  let oneImage = false
  let twoImage = false
  let threeImage = false
  let fourImage = false

  const [imageState, setImageState] = useState(['/images/hybrid.png'])

  // const imageUploadHandler = () => {
  //   const imageInput = document.getElementById('imageInput') as HTMLInputElement
  //   if (!imageInput) {
  //     alert('no image input')
  //   } else if (!imageInput.files) {
  //     alert('wrong input')
  //   } else if (!imageInput.files[0]) {
  //     alert('select file first')
  //   } else {
  //     let uploadedImage = []
  //     console.log(imageInput.files)
  //     uploadedImage.push(imageInput.files[0])
  //     setImageState(uploadedImage)
  //   }
  // }

  // console.log(imageState)
  const imgArray: any = [
    '/images/hybrid.png',
    // '/images/hybrid.png',
    // '/images/hybrid.png',
    // '/images/hybrid.png',
  ]
  const previewImage = () => {
    const imageInput = document.getElementById('imageInput') as HTMLInputElement
    const file = imageInput.files
    if (file!.length != null) {
      let fileReader = new FileReader()
      fileReader.onload = function (event) {
        imgArray.push(event.target?.result)
        const img = event.target?.result?.toString()
        setImageState((imgs) => [...imgs, img])
        console.log(imageState)
        console.log(imgArray)
      }
      fileReader.readAsDataURL(file![0])
    }
  }

  let firstItem: boolean

  //   className={firstItem ? `class of first item` : `of others`}

  let length = imgArray.length
  let isFirstChild = false
  if (length === 1) {
    isFirstChild = true
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
          {imgArray.map((imgs) => {
            if (length === 3) {
              isFirstChild = true
              return
            } else {
              return (
                <div
                  className={
                    isFirstChild
                      ? `${styles.imageContainer}`
                      : `col-6 ${styles.imageContainer}`
                  }
                  key={imgs}
                >
                  <img src={imgs} className={`${styles.imageDiv}`} key={imgs} />
                </div>
              )
            }
          })}
        </div>
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
        <input
          type="file"
          id="imageInput"
          name="img"
          accept="image/*"
          hidden
          onChange={previewImage}
        />
        <label htmlFor="imageInput" className={`btn btn-primary mt-3 w-100`}>
          hey
        </label>
      </div>
    </div>
  )
}

export default CustomTextArea
