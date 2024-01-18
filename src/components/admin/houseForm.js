import { React, useEffect, useRef, useState } from "react";
import { axiosAuthInstance, axiosInstance } from "../../axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { upload } from "@testing-library/user-event/dist/upload";

export const HouseForm = ({ manageMenuState }) => {
  const inputImageRef = useRef();
  const inputVideoRef = useRef();

  const buttonEnable = useRef(true);

  const [name, setName] = useState("");
  const [houseUrl, setHouseUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [rooms, setRooms] = useState("");
  const [complex, setComplex] = useState("");
  const [stairs, setStairs] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [responseArray, setResponseArray] = useState([]);
  const [uploadingProgress, setUploadingProgress] = useState(false);
  const [uploadingProgressImage, setUploadingprogressImage] = useState(false)

  let navigate = useNavigate();

  const createHouse = async (e) => {
    e.preventDefault();

    if (responseArray.length == 0) {
      alert("Please upload images");
      return;
    }

    axiosAuthInstance({
      method: "post",
      url: "apartment/add-apartment",
      data: {
        name,
        // houseUrl,
        unitUrl : houseUrl,
        price,
        description,
        // images,
        images: responseArray,
        responseArray,
        stairs,
        numberOfBedrooms: rooms,
        complex,
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "apartment added succesfully") {
          navigate("/admin/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setHouseUrl("");
    setPrice("");
    setDescription("");
    setRooms("");
    setComplex("");
    setStairs("");
  };

  // IMAGE UPLOAD
  const handleImageChange = (event) => {
    setSelectedImage([...event.target.files]);
    // setSelectedImage(event.target.files[0]);
  };

  const uploadImage = () => {
    console.log(selectedImage.length);
    const formData = new FormData();
    selectedImage.forEach((element, index) => {
      formData.append("image", element);
    });
    setUploadingprogressImage(true)
    // formData.append("image", selectedImage);
    axios
      .post(`https://backend.awestman.com/imageUpload`, formData)
      .then((response) => {
        let imageResponse = response.data.message;
        setResponseArray((prev) => {
          return [...prev, ...imageResponse];
        });
        setUploadingprogressImage(false)
      })
      .catch((error) => {
        console.log(error);
        setUploadingprogressImage(false)
      });
  };

  useEffect(() => {
    if (selectedImage) {
      uploadImage();
    }
  }, [selectedImage]);

  // UPLOAD VIDEO
  const handleVideoChange = (e) => {
    setSelectedVideo([...e.target.files]);
    // setSelectedVideo(e.target.files[0]);
  };

  const uploadVideo = () => {
    const formData = new FormData();
    selectedVideo.forEach((element, index) => {
      formData.append("image", element);
    });
    // formData.append("image", selectedVideo);
    setUploadingProgress(true);
    axios
      .post(`https://backend.awestman.com/imageUpload`, formData)
      .then((response) => {
        setUploadingProgress(false);
        console.log(response.data.message);
        let videoResponse = response.data.message;
        setResponseArray((prev) => {
          return [...prev, ...videoResponse];
        });
      })
      .catch((error) => {
        setUploadingProgress(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (selectedVideo) {
      uploadVideo();
    }
  }, [selectedVideo]);

  console.log(responseArray);

  return (
    <>
      {/* <input type="file" accept="video/*"/> */}
      <section className="home-section">
        <div className="home-content">
          <i
            className="bx bx-menu"
            onClick={manageMenuState}
            style={{ color: "#64c5b1" }}
          ></i>
          <span className="text"></span>
        </div>
      </section>
      <div
        className="main_content_iner overly_inner"
        style={{ maxHeight: "calc(100vh - 76px)" }}
      >
        <div className="container-fluid ">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="white_card card_height_100">
                <div className="white_card_header">
                  <div className="box_header m-0">
                    <div className="main-title">
                      <h3 className="mb-4">Create House</h3>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="dropBox">
                          <p>Drag & Drop Images Here...</p>
                          <form className="imgUploader">
                            <input
                              ref={inputImageRef}
                              type="file"
                              id="imgUpload"
                              multiple
                              accept=".png, .gif, .jpeg, .jpg"
                              onChange={(e) => {
                                handleImageChange(e);
                              }}
                            />
                            <label
                              className="button"
                              onClick={() => {
                                inputImageRef.current.click();
                              }}
                            >
                              ...or Upload From Your Computer
                            </label>
                          </form>
                          <div id="gallery"></div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div id="dropBox">
                          <p>Drag & Drop Videos Here...</p>
                          <form className="imgUploader">
                            <input
                              ref={inputVideoRef}
                              type="file"
                              id="videoUpload"
                              multiple
                              accept="video/mp4"
                              style={{ display: "none" }}
                              onChange={(e) => {
                                handleVideoChange(e);
                              }}
                            />
                            <label
                              className="button"
                              onClick={() => {
                                inputVideoRef.current.click();
                              }}
                            >
                              ...or Upload From Your Computer
                            </label>
                          </form>
                          <div id="gallery"></div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-md-4">
                        <label className="form-label" for="inputEmail4">
                          Name
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" for="inputAddress">
                          Url
                        </label>
                        <input
                          value={houseUrl}
                          onChange={(e) => setHouseUrl(e.target.value)}
                          type="url"
                          className="form-control"
                          id="inputAddress"
                          placeholder=""
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" for="inputState">
                          Price
                        </label>
                        <input
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          type="number"
                          className="form-control"
                          id="inputAddress"
                          placeholder=""
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" for="inputCity">
                          Description
                        </label>
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="form-control"
                          style={{ height: "100px" }}
                          rows="5"
                          id="inputCity"
                        ></textarea>
                      </div>
                      <div className="col-10 col-sm-4 my-2 my-sm-0">
                        <label className="form-label">complex</label>
                        <select
                          value={complex}
                          onChange={(e) => setComplex(e.target.value)}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="" selected>
                            select one
                          </option>
                          <option value="Austin West">Austin West</option>
                          <option value="Stagecoach West">
                            Stagecoach West
                          </option>
                          <option value="Timberwood">Timberwood</option>
                        </select>
                      </div>
                      <div className="col-10 col-sm-4 my-2 my-sm-0">
                        <label className="form-label">
                          upstairs/downstairs
                        </label>
                        <select
                          value={stairs}
                          onChange={(e) => setStairs(e.target.value)}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="" selected>
                            select one
                          </option>
                          <option value="upstairs">upstairs</option>
                          <option value="downstairs">downstairs</option>
                        </select>
                      </div>
                      <div className="col-10 col-sm-4 my-2 my-sm-0">
                        <label className="form-label">bedrooms</label>
                        <select
                          value={rooms}
                          onChange={(e) => setRooms(e.target.value)}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="" selected>
                            select one
                          </option>
                          <option value="one bedroom">one bedroom</option>
                          <option value="two bedrooms">two bedrooms</option>
                        </select>
                      </div>
                    </div>
                    {(uploadingProgress || uploadingProgressImage) && <p style={{marginTop: '10px', textAlign: 'center', fontSize: '12px', color: '#07BC0C'}}>Upload in progress</p>}

                    <div className="d-flex justify-content-center mt-3">
                      <button
                        style={{ background: "#64C5B1", color: "white" }}
                        type="button"
                        onClick={createHouse}
                        className="btn px-5"
                        disabled={uploadingProgress || uploadingProgressImage}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// const filesArray = [...filesList];
// if (filesArray) {
//   const formData = new FormData();
//   filesArray.forEach((file) => {
//     formData.append("file", file, file.name);
//   });
//   axios({
//     method: "post",
//     url: `https://backend.awestman.com/imageUpload`,
//     data: formData,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   })
//     .then((res) => {
//       setImages(res.data.message);
//       buttonEnable.current = false;
//     })
//     .catch((err) => console.log(err));
// }
