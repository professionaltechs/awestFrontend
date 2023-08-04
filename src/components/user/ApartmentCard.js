import React, { useRef } from "react";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import im from "../../assets/images/aw32-14.jpg"

export const ApartmentCard = ({ name, description, price, imgLinks }) => { //imgLinks = []
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
              
            {/* <a className="gallery-item" href="/images/aw32-01.jpg">
              <img
                //   ref={buttonClick}
                className="img-fluid d-block rounded-top"
                src="/images/aw32-01.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-02.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-02.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-03.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-03.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-04.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-04.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-05.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-05.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-06.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-06.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-07.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-07.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-08.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-08.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-09.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-09.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-10.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-10.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-11.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-11.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-12.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-12.jpg"
                alt="No"
              />
            </a>
            <a className="gallery-item" href="/images/aw32-13.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-13.jpg"
                alt="No"
              />
            </a>
            <a href="/images/aw32-14.jpg">
              <img
                className="img-fluid d-block rounded-top"
                src="/images/aw32-14.jpg"
                alt="No"
              />
            </a> */}
          </LightGallery>
          <h4
            className="title text-custom apartments text-center pt-4 my-0"
          >
            {name}
          </h4>

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
                href="https://my.matterport.com/show/?m=rQajr8vaFBH&amp;brand=0"
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
