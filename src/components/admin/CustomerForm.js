import React from "react";

const CustomerForm = ({ manageMenuState }) => {
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
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="white_card card_height_100">
                <div className="white_card_header">
                  <div className="box_header m-0">
                    <div className="main-title">
                      <h3 className="mb-4">User Form</h3>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="nationality">
                          Nationality
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nationality"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="birthDate">
                          Birth Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="birthDate"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="address">
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          style={{ height: "100px" }}
                          id="address"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="phone">
                          Phone
                        </label>
                        <input type="tel" className="form-control" id="phone" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button
                        style={{ background: "#64C5B1", color: "white" }}
                        type="button"
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

export default CustomerForm;
