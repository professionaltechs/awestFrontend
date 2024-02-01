import React, { useEffect, useState } from "react";
import { axiosAuthInstance } from "../../axios";
import { useNavigate } from "react-router-dom";

const CustomerList = ({ manageMenuState }) => {
  const navigate = useNavigate();
  const [customerList, setcustomerList] = useState([]);

  const fetchCustomers = () => {
    axiosAuthInstance({
      method: "post",
      url: "admin/getAllusers",
    })
      .then((res) => {
        if (res.data.statusCode == 403) {
          navigate("/admin/login");
        }
        setcustomerList(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchCustomers();
  }, []);
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

        <div className="serach_field-area d-flex align-items-center">
          <div className="search_inner">
            <form action="#">
              <div className="search_field">
                <input type="text" placeholder="Search by name here..." />
              </div>
              <button type="submit">
                <img src="image/icon_search.svg" alt="" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="main_content_iner ">
        <div className="container-fluid p-0">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="white_card card_height_100 mb-3">
                <div className="white_card_header">
                  <div className="box_header m-0">
                    <div className="main-title">
                      <h3 className="m-0">Customer Data Table</h3>
                    </div>
                  </div>
                </div>
                <div className="white_card_body">
                  <div className="QA_section">
                    <div className="white_box_tittle list_header">
                      <h4>List</h4>
                      <div className="box_right d-flex lms_block">
                        <div className="add_button ms-2">
                          <a
                            href="/admin/create-customer"
                            data-bs-toggle="modal"
                            data-bs-target="#addcategory"
                            className="btn_1 "
                          >
                            Add New
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="QA_table mb-3">
                      <div
                        id="DataTables_Table_1_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          className="table lms_table_active dataTable no-footer dtr-inline"
                          id="DataTables_Table_1"
                          role="grid"
                          aria-describedby="DataTables_Table_1_info"
                          style={{ width: "1206px" }}
                        >
                          <thead>
                            <tr role="row">
                              <th
                                scope="col"
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                style={{ width: "106px" }}
                                aria-label="Enrolled: activate to sort column ascending"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                style={{ width: "106px" }}
                                aria-label="Enrolled: activate to sort column ascending"
                              >
                                Type
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {customerList.map((customer, index) => (
                              <tr role="row" className="odd" key={index}>
                                <td>{customer.email}</td>
                                <td>{customer.type === 2 ? "Super Admin" : "Admin"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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

export default CustomerList;
