import React, { useRef } from "react";
import LightGallery from "lightgallery/react/Lightgallery.es5";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-video.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";

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
  //imgLinks = []
  const buttonClick = useRef(null);

  console.log(imgLinks);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
        <div className="service-image rounded shadow">
          <div style={{ height: "200px", overflow: "hidden" }}>
            <LightGallery speed={500} plugins={[lgThumbnail, lgVideo]}>
              {imgLinks.map((item, index) => {
                // if (index == imgLinks.length - 1) {
                //   return (
                //     <a href={`https://backend.awestman.com/${item}`}>
                //       <img
                //         ref={buttonClick}
                //         className="img-fluid d-block rounded-top"
                //         src={`https://backend.awestman.com/${item}`}
                //         alt=""
                //       />
                //     </a>
                //   );
                // }
                if (item.includes("mp4")) {
                  const videoUrl = "https://backend.awestman.com/"+item
                  console.log(videoUrl)

                  const videoConfigString = `{
                    "source": [{"src":"${videoUrl}", "type":"video/mp4"}],
                    "attributes": {"controls": true}
                  }`

                  return (
                    <>
                      <a
                        data-lg-size="1280-720"
                        // data-video='{"source": [{"src":"https://backend.awestman.com/2024-01-15T21-51-21.222Zpexels-polina-kovaleva-5644324 (1080p).mp4", "type":"video/mp4"}], "attributes": {"controls": true}}'
                        data-video={videoConfigString}
                        data-poster="https://img.youtube.com/vi/EIUJfXk3_3w/maxresdefault.jpg"
                        className="gallery-item"
                        // href={`https://backend.awestman.com/${item}`}
                      >
                        <img
                          className="img-fluid d-block rounded-top"
                          src="https://img.youtube.com/vi/EIUJfXk3_3w/maxresdefault.jpg"
                          alt=""
                        />
                      </a>
                    </>
                  );
                }
                return (
                  <>
                    <a
                      className="gallery-item"
                      href={`https://backend.awestman.com/${item}`}
                    >
                      <img
                        className="img-fluid d-block rounded-top"
                        src={`https://backend.awestman.com/${item}`}
                        alt=""
                      />
                    </a>
                    {/* <p>{`https://backend.awestman.com/${item}`}</p> */}
                  </>
                );
              })}
            </LightGallery>
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
                onClick={() => {
                  buttonClick.current.click();
                }}
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
    </>
  );
};
