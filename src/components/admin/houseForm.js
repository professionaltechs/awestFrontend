import { React, useRef, useState } from "react";
import { axiosAuthInstance, axiosInstance } from "../../axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const HouseForm = ({ manageMenuState }) => {
  const buttonEnable = useRef(true);

  const [name, setName] = useState("");
  const [houseUrl, setHouseUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [rooms, setRooms] = useState("");
  const [complex, setComplex] = useState("");
  const [stairs, setStairs] = useState("");
  const [images, setImages] = useState([]);
  let navigate = useNavigate();

  const createHouse = async (e) => {
    e.preventDefault();

    if (images.length == 0) {
      alert("Please upload images");
      return;
    }

    axiosAuthInstance({
      method: "post",
      url: "apartment/add-apartment",
      data: {
        name,
        houseUrl,
        price,
        description,
        images,
        stairs,
        numberOfBedrooms: rooms,
        complex
      },
    })
      .then((res) => {
        if (res.data.statusCode == 403) {
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

  const uploadFiles = async (filesList) => {
    const filesArray = [...filesList];
    if (filesArray) {
      const formData = new FormData();
      filesArray.forEach((file) => {
        formData.append("image", file, file.name);
      });
      axios({
        method: "post",
        // url: 'https://backend.awestman.com/imageUpload',
        url: `https://backend.awestman.com/imageUpload`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          setImages(res.data.message);
          buttonEnable.current = false;
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
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
                      <div className="col-md-6">
                        <div id="dropBox">
                          <p>Drag & Drop Images Here...</p>
                          <form className="imgUploader">
                            <input
                              type="file"
                              id="imgUpload"
                              multiple
                              accept="image/*"
                              onChange={(e) => {
                                uploadFiles(e.target.files);
                              }}
                            />
                            <label className="button" for="imgUpload">
                              ...or Upload From Your Computer
                            </label>
                          </form>
                          <div id="gallery"></div>
                        </div>
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
                          type="text"
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
                        <label className="form-label">upstairs/downstairs</label>
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
                    <div className="d-flex justify-content-center mt-3">
                      <button
                        style={{ background: "#64C5B1", color: "white" }}
                        type="button"
                        onClick={createHouse}
                        className="btn px-5"
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
