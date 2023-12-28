import React, { useEffect, useRef, useState } from "react";
import { ApartmentCard } from "../../components/user/ApartmentCard";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import { HomeBanner } from "../../components/user/homeBanner";
import texasStar from "../../assets/images/texas_star.jpg";
import { axiosInstance } from "../../axios";
import { NavBar } from "../../components/user/NavBar";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const Home = () => {
  const [records, setRecords] = useState([]);
  const [totalRecords, setTotalRecords] = useState([]);
  const [stairs, setStairs] = useState("");
  const [complex, setComplex] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const { width } = useWindowDimensions();
  const fetchRecords = () => {
    axiosInstance({
      method: "post",
      url: "apartment/get-all-apartments-user",
    })
      .then((res) => {
        setRecords(res.data.message);
        setTotalRecords(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchRecords();
  }, []);
  useEffect(() => {
    if (bedrooms === "" && stairs === "" && complex === "") {
      setRecords(totalRecords);
    } else if (bedrooms === "" && complex === "") {
      setRecords(() =>
        totalRecords.filter((item, index) => item.stairs === stairs)
      );
    } else if (stairs === "" && complex === "") {
      setRecords(() =>
        totalRecords.filter((item, index) => item.numberOfBedrooms === bedrooms)
      );
    } else if (stairs === "" && bedrooms === "") {
      setRecords(() =>
        totalRecords.filter((item, index) => item.complex === complex)
      );
    } else if (bedrooms === "") {
      setRecords(() =>
        totalRecords.filter(
          (item, index) => item.stairs === stairs && item.complex === complex
        )
      );
    } else if (stairs === "") {
      setRecords(() =>
        totalRecords.filter(
          (item, index) =>
            item.numberOfBedrooms === bedrooms && item.complex === complex
        )
      );
    } else if (complex === "") {
      setRecords(() =>
        totalRecords.filter(
          (item, index) =>
            item.numberOfBedrooms === bedrooms && item.stairs === stairs
        )
      );
    } else {
      setRecords(() =>
        totalRecords.filter(
          (item, index) =>
            item.numberOfBedrooms === bedrooms &&
            item.stairs === stairs &&
            item.complex === complex
        )
      );
    }
  }, [bedrooms, stairs, complex]);

  const clearFilter = () => {
    setStairs("");
    setComplex("");
    setBedrooms("");
  };

  return (
    <div>
      <NavBar />
      <HomeBanner />

      {/* Floor plans */}

      <section className="section services second" id="units">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="title text-uppercase mb-4">Units Available</h3>

                <p className="mx-auto">
                  Enjoy a wide selection of amenities like a community picnic
                  area, vinyl plank floors, and tile floors. Contact us for more
                  info or stop by today!
                </p>
              </div>
              <div className="row p-1 justify-content-center">
                <div className="col-10 col-sm-4 my-2 my-sm-0">
                  <label className="">complex</label>
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
                    <option value="Stagecoach West">Stagecoach West</option>
                    <option value="Timberwood">Timberwood</option>
                  </select>
                </div>
                <div className="col-10 col-sm-4 my-2 my-sm-0">
                  <label className="">upstairs/downstairs</label>
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
                  <label className="">bedrooms</label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
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
                <div className="col-5 col-sm-3 d-flex align-items-end my-3">
                  <button
                    className="btn"
                    style={{ background: "#97786B", color: "white" }}
                    onClick={clearFilter}
                  >
                    Clear filter
                  </button>
                </div>
              </div>

              <div className="row p-1">
                {records.map((item, index) => {
                  return (
                    <ApartmentCard
                      key={item._id}
                      id={item._id}
                      houseUrl={item.houseUrl}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      imgLinks={item.images}
                      numberOfBedrooms={item.numberOfBedrooms}
                      stairs={item.stairs}
                      complex={item.complex}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info*/}
      <section className="section bg-white second">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="contact-detail text-center">
                <div className="icon"></div>

                <div className="content mt-3">
                  <h4 className="title text-uppercase">Phone</h4>

                  <p>
                    Office - General Information
                    <br />
                    <span className="text-custom">(409) 755-3333</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="contact-detail text-center">
                <div className="icon"></div>

                <div className="content mt-3">
                  <h4 className="title text-uppercase"></h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="contact-detail text-center">
                <div className="icon"></div>

                <div className="content mt-3">
                  <h4 className="title text-uppercase">Location</h4>

                  <p>
                    90 Williams Rd
                    <br />
                    Lumberton, TX 77657
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4">
              <div className="text-center justify-content-center">
                <img
                  src={texasStar}
                  style={{ height: "auto", width: "100%", maxWidth: "350px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit App Check*/}
      <section className="section second" id="creditapp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="script-form" className="custom-form mb-sm-30">
                {/* <script type="text/javascript" src="https://form.jotform.com/jsform/231890550656158"></script> */}

                <iframe
                  id="JotFormIFrame-231797838365069"
                  title="f1"
                  onload="window.parent.scrollTo(0,0)"
                  allowtransparency="true"
                  allowfullscreen="true"
                  allow="geolocation; microphone; camera"
                  src="https://form.jotform.com/231797838365069"
                  frameborder="0"
                  style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight:
                      width < 400
                        ? "410vh"
                        : width < 550
                        ? "385vh"
                        : width < 800
                        ? "360vh"
                        : width < 1200
                        ? "345vh"
                        : "320vh",
                    border: "none",
                  }}
                  scrolling="no"
                ></iframe>

                {/* <h1 id="creditMainHeading" className="text-center">
                                    Credit App Background Check
                                </h1>
                                <p className="text-center">
                                    Primary Applicant's Personal Information
                                </p>
                                <hr></hr>
                                <form className="row g-3 needs-validation app-form" novalidate>
                                    <div className="col-md-12">
                                        <label
                                            for="validationCustom01"
                                            className="form-label label1"
                                        >
                                            If you're interested in a particular complex or unit
                                            number, please type it below
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control col-md-6"
                                            id="validationCustom01"
                                            required
                                        ></input>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-md-12">
                                        <label for="validationCustom04" className="form-label">
                                            Rent Requested
                                        </label>
                                        <select
                                            className="form-select col-md-6"
                                            id="validationCustom04"
                                            required
                                        >
                                            <option selected disabled value="">
                                                Please Select
                                            </option>
                                            <option>$600</option>
                                            <option>$625</option>
                                            <option>$650</option>
                                            <option>$675</option>
                                            <option>$700</option>
                                            <option>$725</option>
                                            <option>$750</option>
                                            <option>$775</option>
                                            <option>$800</option>
                                            <option>$825</option>
                                            <option>$850</option>
                                            <option>$875</option>
                                            <option>$900</option>
                                            <option>$925</option>
                                            <option>$950</option>
                                            <option>$975</option>
                                            <option>$1000</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            This field is required
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom03"
                                            required
                                        ></input>
                                        <h7>First Name</h7>
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>

                                    <div className="col-md-6 lastname-div">
                                        <label
                                            htmlFor="validationCustom03"
                                            className="form-label label1 label-lastname"
                                        ></label>
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            id="validationCustom05"
                                            required
                                        ></input>
                                        <h7>Last Name</h7>
                                        <div className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="(000) 000-0000"
                                            className="form-control"
                                            id="validationCustom03"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="validationCustom05"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Date of Birth
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="validationCustom03"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Social Security Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="000-00-0000"
                                            id="validationCustom05"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Driver's License Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom03"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom05"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Current Home Address
                                        </label>
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control text-area"
                                                placeholder="Leave a comment here"
                                                id="floatingTextarea2"
                                            ></textarea>
                                            <h7>
                                                Please list all relevant details (How long have you
                                                lived here, Reason for moving, etc)
                                            </h7>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Current Employment
                                        </label>
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control text-area"
                                                placeholder="Leave a comment here"
                                                id="floatingTextarea2"
                                            ></textarea>
                                            <h7>
                                                Please list all relevant details (Title - Date of Hire -
                                                Previous Employment References, etc)
                                            </h7>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Annual Income
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom03"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Any Additional Income
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom05"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                    <label htmlFor="validationCustom03" className="form-label">
                                        Are there additional applicants?
                                    </label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                        ></input>
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault1"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault2"
                                            checked
                                        ></input>
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault2"
                                        >
                                            No
                                        </label>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            By signing below, you agree to let A-West Management run a
                                            credit and background check.
                                        </label>
                                        <div className="col-md-6 signature-div">
                                            <SignaturePad
                                                width={150}
                                                height={100}
                                                ref={sigPad}
                                                penColor="green" />
                                        </div>
                                        <button>Clear</button>
                                    </div>
                                    <div id="flex-container" className="col-md-12 d-flex">
                                        <div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="flexCheckCheckedDisabled"
                                                    checked
                                                    disabled
                                                ></input>
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckCheckedDisabled"
                                                ></label>
                                            </div>
                                        </div>
                                        <div className="m-1">
                                            <form className="form-inline">
                                                <div className="form-group">
                                                    <h5>Credit & Background Check Fee</h5>
                                                    <p className="para">
                                                        There is a $40 fee per applicant over the age of 18,
                                                        please choose the correct amount before submitting
                                                        the form.
                                                    </p>
                                                    <label>Quantity:</label>
                                                    <select
                                                        id="quant-sel"
                                                        className="form-select form-select-sm col-md-2 ms-2"
                                                        aria-label=".form-select-sm example"
                                                    >
                                                        <option selected value="1">
                                                            1
                                                        </option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                            <h6>$40</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <hr id="horizontal"></hr>
                                    </div>
                                    <div id="flex-box" className="col-md-12 d-flex">
                                        <h6>
                                            Total
                                            <span id="totalValue" style={{ marginLeft: "50px" }}>
                                                $40.00
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="col-md-12">
                                        <hr id="horizontal"></hr>
                                    </div>

                                    <a target="_blank" rel="noreferrer" href="https://www.paypal.com/checkoutnow?sessionID=uid_02a2b00c22_mtk6mza6mdy&buttonSessionID=uid_db8e97cc7f_mtk6mza6mdy&stickinessID=uid_a542e3d0f2_mte6mdc6mzc&smokeHash=&token=08411562J6952150H&fundingSource=paypal&buyerCountry=PK&locale.x=en_US&commit=true&clientID=Afo1LVZtoaCSq5HI_naZpUMjB2C0_OiB6nNHlGaNe7jwBTunPXnbodmCr4ZTtpL3WT-4RkNG6DQFvX03&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QWZvMUxWWnRvYUNTcTVISV9uYVpwVU1qQjJDMF9PaUI2bk5IbEdhTmU3andCVHVuUFhuYm9kbUNyNFpUdHBMM1dULTRSa05HNkRRRnZYMDMmY29tbWl0PXRydWUmbWVyY2hhbnQtaWQ9UTVXQ0xGMzVHTERCQSZjdXJyZW5jeT1VU0QmdmF1bHQ9dHJ1ZSIsImF0dHJzIjp7ImRhdGEtcGFydG5lci1hdHRyaWJ1dGlvbi1pZCI6IkpvdEZvcm1fUDRQIiwiZGF0YS11aWQiOiJ1aWRfbGd3bnhyZnpkdXNpYWt3eXllb3hycm55Y2N3cmh3In19&xcomponent=1&version=5.0.390" className="anchor col-md-12">
                                        <svg
                                            className="svg1"
                                            width="101px"
                                            height="32"
                                            viewBox="0 0 101 32"
                                            preserveAspectRatio="xMinYMin meet"
                                            xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"
                                        >
                                            <path
                                                fill="#003087"
                                                d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
                                            ></path>
                                            <path
                                                fill="#003087"
                                                d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
                                            ></path>
                                            <path
                                                fill="#003087"
                                                d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
                                            ></path>
                                            <path
                                                fill="#009cde"
                                                d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
                                            ></path>
                                            <path
                                                fill="#009cde"
                                                d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
                                            ></path>
                                            <path
                                                fill="#009cde"
                                                d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
                                            ></path>
                                        </svg>
                                        Checkout
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.paypal.com/checkoutnow?sessionID=uid_02a2b00c22_mtk6mza6mdy&buttonSessionID=uid_db8e97cc7f_mtk6mza6mdy&stickinessID=uid_a542e3d0f2_mte6mdc6mzc&smokeHash=&token=145410357R819444H&fundingSource=credit&buyerCountry=PK&locale.x=en_US&commit=true&clientID=Afo1LVZtoaCSq5HI_naZpUMjB2C0_OiB6nNHlGaNe7jwBTunPXnbodmCr4ZTtpL3WT-4RkNG6DQFvX03&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QWZvMUxWWnRvYUNTcTVISV9uYVpwVU1qQjJDMF9PaUI2bk5IbEdhTmU3andCVHVuUFhuYm9kbUNyNFpUdHBMM1dULTRSa05HNkRRRnZYMDMmY29tbWl0PXRydWUmbWVyY2hhbnQtaWQ9UTVXQ0xGMzVHTERCQSZjdXJyZW5jeT1VU0QmdmF1bHQ9dHJ1ZSIsImF0dHJzIjp7ImRhdGEtcGFydG5lci1hdHRyaWJ1dGlvbi1pZCI6IkpvdEZvcm1fUDRQIiwiZGF0YS11aWQiOiJ1aWRfbGd3bnhyZnpkdXNpYWt3eXllb3hycm55Y2N3cmh3In19&xcomponent=1&version=5.0.390" className="anchor2 col-md-12">
                                        <svg
                                            className="paypal-logo"
                                            width="24"
                                            height="32"
                                            viewBox="0 0 24 32"
                                            preserveAspectRatio="xMinYMin meet"
                                            xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"
                                        >
                                            <path
                                                fill="#ffffff"
                                                opacity="0.7"
                                                d="M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                opacity="0.7"
                                                d="M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                opacity="1"
                                                d="M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"
                                            ></path>
                                        </svg>
                                        <svg
                                            className="svg2"
                                            width="101px"
                                            height="32"
                                            viewBox="0 0 101 32"
                                            preserveAspectRatio="xMinYMin meet"
                                            xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"
                                        >
                                            <path
                                                fill="#ffffff"
                                                d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
                                            ></path>
                                        </svg>
                                        <svg className="credit"
                                            width="95"
                                            height="32"
                                            viewBox="0 0 95 32"
                                            preserveAspectRatio="xMinYMin meet"
                                            xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"
                                        >
                                            <path
                                                fill="#ffffff"
                                                d="M 52.732 3.83 C 52.83 3.446 53.122 3.158 53.512 3.158 L 60.626 3.158 C 66.571 3.158 70.664 7.67 69.69 13.334 C 68.813 18.998 63.16 23.414 57.313 23.414 L 50.004 23.414 C 49.711 23.414 49.516 23.222 49.614 22.934 L 52.732 3.83 Z M 55.753 18.998 L 57.02 18.998 C 60.236 18.998 63.355 17.27 64.037 13.334 C 64.622 9.686 62.478 7.67 58.97 7.67 L 57.995 7.67 C 57.8 7.67 57.605 7.766 57.605 7.958 L 55.753 18.998 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 43.571 8.246 L 43.084 11.03 L 48.737 11.03 C 49.029 11.03 49.224 11.222 49.224 11.51 L 48.639 14.87 C 48.542 15.254 48.249 15.446 47.859 15.446 L 42.987 15.446 C 42.597 15.446 42.304 15.734 42.207 16.118 L 41.72 18.998 L 47.762 18.998 C 48.054 18.998 48.249 19.19 48.152 19.478 L 47.665 22.838 C 47.567 23.126 47.275 23.414 46.885 23.414 L 36.067 23.414 C 35.775 23.414 35.58 23.126 35.58 22.934 L 38.699 3.83 C 38.796 3.446 39.186 3.158 39.478 3.158 L 50.393 3.158 C 50.588 3.158 50.881 3.446 50.783 3.638 L 50.296 6.998 C 50.198 7.382 49.906 7.574 49.516 7.574 L 44.254 7.574 C 43.864 7.67 43.571 7.862 43.571 8.246 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 74.563 23.414 L 70.274 23.414 C 69.982 23.414 69.787 23.222 69.787 22.934 L 73.003 3.83 C 73.003 3.446 73.393 3.158 73.685 3.158 L 78.071 3.158 C 78.266 3.158 78.558 3.446 78.461 3.734 L 75.342 22.838 C 75.245 23.126 74.952 23.414 74.563 23.414 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 34.118 23.414 L 28.466 23.414 C 28.173 23.414 27.978 23.318 27.881 23.126 L 24.178 15.638 L 24.08 15.638 L 22.911 22.934 C 22.813 23.222 22.618 23.414 22.326 23.414 L 17.843 23.414 C 17.551 23.414 17.356 23.222 17.453 22.934 L 20.572 3.734 C 20.669 3.446 20.864 3.158 21.156 3.158 L 28.855 3.158 C 33.046 3.158 35.97 5.078 35.288 9.398 C 34.8 12.182 32.754 14.678 29.635 15.158 L 34.508 22.838 C 34.703 23.03 34.411 23.414 34.118 23.414 Z M 24.665 12.278 L 25.152 12.278 C 27.004 12.278 29.05 11.894 29.44 9.686 C 29.83 7.574 28.661 7.19 26.711 7.19 L 25.932 7.19 C 25.639 7.19 25.445 7.382 25.445 7.574 L 24.665 12.278 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 86.16 23.414 L 81.872 23.414 C 81.579 23.414 81.384 23.222 81.482 22.934 L 83.918 7.67 L 79.923 7.67 C 79.63 7.67 79.435 7.382 79.533 7.094 L 80.02 3.83 C 80.118 3.446 80.41 3.158 80.8 3.158 L 94.249 3.158 C 94.444 3.158 94.736 3.446 94.639 3.734 L 94.054 6.998 C 94.054 7.382 93.761 7.67 93.372 7.67 L 89.473 7.67 L 86.939 22.838 C 86.939 23.126 86.647 23.414 86.16 23.414 Z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M 17.648 8.918 C 17.648 9.302 17.161 9.494 16.868 9.206 C 15.894 8.246 14.529 7.766 13.068 7.766 C 9.657 7.766 7.025 10.262 6.441 13.334 C 5.953 16.502 7.902 18.806 11.313 18.806 C 12.678 18.806 14.237 18.326 15.407 17.462 C 15.796 17.27 16.284 17.558 16.186 17.942 L 15.407 22.55 C 15.309 22.838 15.114 23.03 14.822 23.126 C 13.165 23.606 11.898 23.99 10.339 23.99 C 1.178 23.99 -0.284 16.502 0.203 13.334 C 1.47 4.406 9.072 2.39 13.652 2.678 C 15.114 2.678 16.479 2.87 17.745 3.35 C 18.233 3.542 18.428 3.926 18.33 4.406 L 17.648 8.918 Z"
                                            ></path>
                                        </svg>
                                        Checkout
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.paypal.com/checkoutnow?sessionID=uid_9d7e07e2cc_mje6mju6ndu&buttonSessionID=uid_47cfa333b0_mje6mjk6mze&stickinessID=uid_a542e3d0f2_mte6mdc6mzc&smokeHash=&token=8FD13656MA284743H&fundingSource=card&buyerCountry=PK&locale.x=en_US&commit=true&clientID=Afo1LVZtoaCSq5HI_naZpUMjB2C0_OiB6nNHlGaNe7jwBTunPXnbodmCr4ZTtpL3WT-4RkNG6DQFvX03&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QWZvMUxWWnRvYUNTcTVISV9uYVpwVU1qQjJDMF9PaUI2bk5IbEdhTmU3andCVHVuUFhuYm9kbUNyNFpUdHBMM1dULTRSa05HNkRRRnZYMDMmY29tbWl0PXRydWUmbWVyY2hhbnQtaWQ9UTVXQ0xGMzVHTERCQSZjdXJyZW5jeT1VU0QmdmF1bHQ9dHJ1ZSIsImF0dHJzIjp7ImRhdGEtcGFydG5lci1hdHRyaWJ1dGlvbi1pZCI6IkpvdEZvcm1fUDRQIiwiZGF0YS11aWQiOiJ1aWRfbGd3bnhyZnpkdXNpYWt3eXllb3hycm55Y2N3cmh3In19&xcomponent=1&version=5.0.390" className="anchor3 col-md-12">
                                        <svg
                                            className="svg3"
                                            width="24px"
                                            height="18px"
                                            viewBox="0 0 24 18"
                                            xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"
                                        >
                                            <g
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                            >
                                                <g
                                                    transform="translate(-3.000000, -6.000000)"
                                                    fill="#ffffff"
                                                    fill-rule="nonzero"
                                                >
                                                    <path
                                                        d="M8.27521338,12.5122653 C7.93003542,12.5122653 7.65021338,12.2324432 7.65021338,11.8872653 C7.65021338,11.5420873 7.93003542,11.2622653 8.27521338,11.2622653 L24.7879042,11.2622653 C25.5955939,11.2622653 26.25,11.9175905 26.25,12.7255368 L26.25,22.2867284 C26.25,23.0946748 25.5955939,23.75 24.7879042,23.75 L5.21231302,23.75 C4.40462325,23.75 3.75,23.0946748 3.75,22.2867397 L3.75,7.71327152 C3.75,6.90532518 4.40440608,6.25 5.21227212,6.25 L24.7880664,6.25552163 C25.5956079,6.25573147 26.25,6.91099507 26.25,7.71870362 L26.25,9.23577161 C26.25,9.58094958 25.9702675,9.86081168 25.6250895,9.86086112 C25.2799115,9.86091055 25.0000494,9.5811286 25,9.23595063 L24.9997827,7.71879313 C24.9997827,7.60083189 24.9046611,7.50555197 24.7877278,7.50552158 L5.21209583,7.49999998 C5.09515506,7.49999998 5,7.59528868 5,7.71326028 L5.00021718,22.2867284 C5.00021718,22.4047113 5.09537223,22.5 5.21231302,22.5 L24.7879042,22.5 C24.904845,22.5 25,22.4047113 25,22.2867284 L25,12.7255368 C25,12.607554 24.9048449,12.5122653 24.7879042,12.5122653 L8.27521338,12.5122653 Z"
                                                        id="Stroke-1"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                        Debit or Credit Card
                                    </a>
                                    <div className="col-md-12 text-center">
                                        <p><i>Powered by</i>
                                            <svg
                                                className="svg4"
                                                width="101px"
                                                height="28px"
                                                viewBox="0 0 101 32"
                                                preserveAspectRatio="xMinYMin meet"
                                                xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"
                                            >
                                                <path
                                                    fill="#003087"
                                                    d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
                                                ></path>
                                                <path
                                                    fill="#003087"
                                                    d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
                                                ></path>
                                                <path
                                                    fill="#003087"
                                                    d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
                                                ></path>
                                                <path
                                                    fill="#009cde"
                                                    d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
                                                ></path>
                                                <path
                                                    fill="#009cde"
                                                    d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
                                                ></path>
                                                <path
                                                    fill="#009cde"
                                                    d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
                                                ></path>
                                            </svg>
                                        </p>
                                    </div>
                                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
