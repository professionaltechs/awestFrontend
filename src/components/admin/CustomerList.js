import React from "react";
import { TableRow } from "./tableRow";

const CustomerList = ({ manageMenuState }) => {
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
                            href="/admin"
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
                                className="sorting_asc"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                style={{ width: "127px" }}
                                aria-sort="ascending"
                                aria-label="title: activate to sort column descending"
                              >
                                First Name
                              </th>
                              <th
                                scope="col"
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                style={{ width: "182px" }}
                                aria-label="Category: activate to sort column ascending"
                              >
                                Last Name
                              </th>
                              <th
                                scope="col"
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                style={{ width: "171px" }}
                                aria-label="Lesson: activate to sort column ascending"
                              >
                                Nationality
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
                                Birth Date
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
                                Address
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
                                Phone
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
                                Edit
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
                                Delete
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                firstName: "John",
                                lastName: "Doe",
                                nationality: "US",
                                birthDate: "1990-01-01",
                                address: "123 Main St, Cityville",
                                email: "john.doe@example.com",
                                phone: "123-456-7890",
                              },
                              {
                                firstName: "Jane",
                                lastName: "Doe",
                                nationality: "Canada",
                                birthDate: "1992-05-15",
                                address: "456 Oak St, Townsville",
                                email: "jane.doe@example.com",
                                phone: "987-654-3210",
                              },
                              // Add more fake data entries as needed
                            ].map((customer, index) => (
                              <tr role="row" className="odd" key={index}>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.address}</td>
                                <td>{customer.birthDate}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                                <td>
                                  <i
                                    style={{ cursor: "pointer" }}
                                    className="fa-solid fa-pen-to-square"
                                  ></i>
                                </td>
                                <td>
                                  <i
                                    style={{ cursor: "pointer" }}
                                    className="fa-solid fa-trash"
                                  ></i>
                                </td>
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
