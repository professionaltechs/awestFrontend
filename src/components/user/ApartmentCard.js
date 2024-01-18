import React, { useRef, useEffect, useCallback } from "react";
import "../../assets/css/imageSlider.css";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

export const ApartmentCard = ({
  name,
  description,
  price,
  houseUrl,
  imgLinks,
  numberOfBedrooms,
  stairs,
  complex,
}) => {
  // const lightGallery = useRef(null);
  // const onInit = useCallback((detail) => {
  //   if (detail) {
  //     lightGallery.current = detail.instance;
  //   }
  // }, []);

  // const getItems = useCallback(() => {
  //   return imgLinks.map((item, index) => {
  //     if (item.includes("mp4")) {
  //       const videoUrl = "https://backend.awestman.com/" + item;
  //       const videoConfigString = {
  //         source: [{ src: videoUrl, type: "video/mp4" }],
  //         attributes: {
  //           controls: false,
  //           // autoplay: false,
  //         },
  //       };

  //       return (
  //         <a
  //           key={index}
  //           data-video={JSON.stringify(videoConfigString)}
  //           className="gallery-item"
  //         >
  //           <img
  //             className="img-fluid d-block rounded-top"
  //             src="https://img.youtube.com/vi/EIUJfXk3_3w/maxresdefault.jpg"
  //             alt=""
  //           />
  //         </a>
  //       );
  //     } else {
  //       return (
  //         <a
  //           key={index}
  //           className="gallery-item"
  //           href={`https://backend.awestman.com/${item}`}
  //         >
  //           <img
  //             className="img-fluid d-block rounded-top"
  //             src={`https://backend.awestman.com/${item}`}
  //             alt=""
  //           />
  //         </a>
  //       );
  //     }
  //   });
  // }, []);

  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
  };

  const getItems = () => {
    return imgLinks.map((item, index) => {
      if (item.includes("mp4")) {
        return (
          <Item
            original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
            thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
            width="1600"
            height="1068"
            alt="Photo of mountain lake by Samuel Rohl"
            content={
              <iframe src={"https://backend.awestman.com/" + item}></iframe>
            }
            // You can pass number id
            id={999}
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        );
      }
      return (
        <Item
          original={"https://backend.awestman.com/" + item}
          thumbnail={"https://backend.awestman.com/" + item}
          width="1600"
          height="1066"
          alt="Photo of fog in the village by Ales Krivec"
          // Or you can miss id (photo index will be used automatically)
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src={"https://backend.awestman.com/" + item}
              ref={ref}
              onClick={open}
            />
          )}
        </Item>
      );
    });

    // <>
    //   <Item
    //     original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
    //     thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
    //     width="1600"
    //     height="1068"
    //     alt="Photo of mountain lake by Samuel Rohl"
    //     content={
    //       <iframe src=" https://backend.awestman.com/2024-01-16T22-38-30.850Zpexels-polina-kovaleva-5644324 (1080p).mp4"></iframe>
    //     }
    //     // You can pass number id
    //     id={999}
    //   >
    //     {({ ref, open }) => (
    //       <img
    //         style={smallItemStyles}
    //         src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
    //         ref={ref}
    //         onClick={open}
    //       />
    //     )}
    //   </Item>
    //   <Item
    //     original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
    //     thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
    //     width="1600"
    //     height="1066"
    //     alt="Photo of fog in the village by Ales Krivec"
    //     // Or you can miss id (photo index will be used automatically)
    //   >
    //     {({ ref, open }) => (
    //       <img
    //         style={smallItemStyles}
    //         src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
    //         ref={ref}
    //         onClick={open}
    //       />
    //     )}
    //   </Item>
    //   <Item
    //     original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
    //     thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
    //     width="1600"
    //     height="1066"
    //     alt="Photo of river sunset by Michael Hull"
    //   >
    //     {({ ref, open }) => (
    //       <img
    //         style={{ ...smallItemStyles, gridColumnStart: 2 }}
    //         src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
    //         ref={ref}
    //         onClick={open}
    //       />
    //     )}
    //   </Item>
    // </>
  };

  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
      <div className="service-image rounded shadow">
        <div style={{ height: "200px", overflow: "hidden" }}>
          {/* <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgVideo, lgZoom]}
            onInit={onInit}
          >
            {getItems()}
          </LightGallery> */}
          <Gallery id="my-gallery">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "240px 171px 171px",
                gridTemplateRows: "114px 114px",
                gridGap: 12,
              }}
            >
              {getItems()}
            </div>
          </Gallery>
        </div>
        <div
          style={{
            width: "100%",
            minHeight: "270px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h3 className="title text-custom apartments text-center pt-1 my-0">
            {name}
          </h3>
          <h2 className="title text-custom apartments text-center my-0">
            ${price}
          </h2>
          <p
            style={{
              display: "-webkit-box",
              webkitLineClamp: "3",
              lineHeight: "1.1",
              minHeight: "55px",
              webkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            className="my-2 px-4 text-center"
          >
            {description}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "6px 0",
            }}
          >
            {/* #AEAEAE */}
            <button
              className="mx-1 mt-1"
              style={{
                height: "30px",
                cursor: "default",
                background: "#AEAEAE",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "2px 8px",
              }}
            >
              {numberOfBedrooms}
            </button>
            <button
              className="mx-1 mt-1"
              style={{
                height: "30px",
                cursor: "default",
                background: "#AEAEAE",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "2px 8px",
              }}
            >
              {stairs}
            </button>
            <button
              className="mx-1 mt-1"
              style={{
                height: "30px",
                cursor: "default",
                background: "#AEAEAE",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "2px 8px",
              }}
            >
              {complex}
            </button>
          </div>

          <div style={{ width: "100%", display: "flex" }}>
            <button
              // onClick={() => {
              //   buttonClick.current.click();
              // }}
              target="_blank"
              rel="noreferrer"
              className="btn mr-1"
              style={{ background: "#97786B", color: "white", width: "50%" }}
            >
              Image Gallery
            </button>
            <button
              onClick={() => window.open(houseUrl, "_blank")}
              // href="https://my.matterport.com/show/?m=rQajr8vaFBH&amp;brand=0"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ background: "#97786B", color: "white", width: "50%" }}
            >
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
