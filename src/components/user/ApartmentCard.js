import React, { useRef } from "react";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import im from "../../assets/images/aw32-14.jpg"

export const ApartmentCard = ({ name, description, price, houseUrl, imgLinks }) => { //imgLinks = []
    const buttonClick = useRef(null);

  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
      <div>
        <div className="service-image rounded shadow">
          <LightGallery speed={500} plugins={[lgThumbnail]}>
              {imgLinks.map((item, index) => {
                  if(index == imgLinks.length -1){
                      return <a href={item}>
                      <img
                        ref = {buttonClick}
                        className="img-fluid d-block rounded-top"
                        src={item}
                        alt="No"
                      />
                    </a>
                  }
                  return <a className="gallery-item" href={item}>
                    <img
                      className="img-fluid d-block rounded-top"
                      src={item}
                      alt="No"
                    />
                  </a>
              })}
          </LightGallery>
          <div style={{width: "100%"}}>
            <h4
              className="title text-custom apartments text-center pt-4 my-0"
            >
              {name}
            </h4>

          </div>

          <div className="content text-center pb-4 p-3">
            <p className="my-0">{description}</p>
            <p className="my-0">{price}$</p>

            <p>
              <a
                onClick={() => {
                  buttonClick.current.click();
                }}
                className="my-0 btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Image Gallery
              </a>
            </p>
            <p>
              <a
                className="my-0 btn btn-primary"
                href={houseUrl}
                // href="https://my.matterport.com/show/?m=rQajr8vaFBH&amp;brand=0"
                target="_blank"
                rel="noreferrer"
              >
                Virtual Tour
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
