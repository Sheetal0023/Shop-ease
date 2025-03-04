import React, { useEffect, useState } from 'react'
import "./Header/Header.css"

function MyImages({image}) {
    const [images, setImages] = useState([{}])
    const [mainImage, setMainImage] = useState([{}])

    
    useEffect(() => {
        setImages(image)
    })


  return (
    <div className="myImages">
        <div className='myImages-images'>
            {images.map((curEle, index) => {
                return (
                    <figure>
                        <img 
                            src={curEle.url}
                            alt={curEle.filename}
                            className="box-image--style"
                            key={index}
                            width="150px"
                            onClick={() => setMainImage(curEle)}
                        />
                    </figure>
                )
            })
            }
        </div>
        <div>
            <img src={mainImage.url ?  mainImage.url:images[0].url } alt="" width="285px"/>
        </div>
    </div>
  )
}

export default MyImages