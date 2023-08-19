import React, { useRef } from "react";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import im from "../../assets/images/aw32-14.jpg";

export const ApartmentCard = ({
  name,
  description,
  price,
  houseUrl,
  imgLinks,
}) => {
  //imgLinks = []
  const buttonClick = useRef(null);

  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
      <div>
        <div className="service-image rounded shadow">
          <LightGallery speed={500} plugins={[lgThumbnail]}>
            {imgLinks.map((item, index) => {
              if (index == imgLinks.length - 1) {
                return (
                  <a href={item}>
                    <img
                      ref={buttonClick}
                      className="img-fluid d-block rounded-top"
                      src={item}
                      alt="No"
                    />
                  </a>
                );
              }
              return (
                <a className="gallery-item" href={item}>
                  <img
                    className="img-fluid d-block rounded-top"
                    src={item}
                    alt="No"
                  />
                </a>
              );
            })}
          </LightGallery>
          <div style={{ width: "100%" }}>
            <h3 className="title text-custom apartments text-center pt-4 my-0">
              {name}
            </h3>
            <h2 className="title text-custom apartments text-center my-0">
              {price}$
            </h2>
            <p className="my-0 text-center">{description}</p>

            <div style={{ width: "100%", display: "flex" }}>
              <button
                onClick={() => {
                  buttonClick.current.click();
                }}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary mr-1"
                style={{ width: "50%" }}
              >
                Image Gallery
              </button>
              <button
                onClick={() => window.open(houseUrl, "_blank")}
                // href="https://my.matterport.com/show/?m=rQajr8vaFBH&amp;brand=0"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ width: "50%" }}
              >
                Virtual Tour
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
