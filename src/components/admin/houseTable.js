import { React, useEffect, useState } from 'react';
import { TableRow } from './tableRow';
import { axiosAuthInstance, axiosInstance } from '../../axios';
import { useNavigate } from 'react-router-dom';

export const HouseTable = ({ manageMenuState }) => {

    const [records, setRecords] = useState([])
    let navigate = useNavigate();

    const fetchRecords = () => {
        axiosAuthInstance({
            method: "post",
            url: "apartment/get-all-apartments",
        }).then(res => {
            if(res.data.statusCode = 403){
                navigate("/admin/login")
            }
            console.log(res.data.message)
            setRecords(res.data.message)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        fetchRecords()
    }, [])

    return (
        <>
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={manageMenuState} style={{color: "#64c5b1"}}></i>
                    <span className="text"></span>
                </div>

                <div className="serach_field-area d-flex align-items-center">
                    <div className="search_inner">
                        <form action="#">
                            <div className="search_field">
                                <input type="text" placeholder="Search here..." />
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
                                            <h3 className="m-0">Data table</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="white_card_body">
                                    <div className="QA_section">
                                        <div className="white_box_tittle list_header">
                                            <h4>List</h4>
                                            <div className="box_right d-flex lms_block">
                                                <div className="add_button ms-2">
                                                    <a href="/admin" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1 ">Add New</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="QA_table mb-3">
                                            <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper no-footer">
                                                <table className="table lms_table_active dataTable no-footer dtr-inline" id="DataTables_Table_0"
                                                    role="grid" aria-describedby="DataTables_Table_0_info" style={{width: "1206px"}}>
                                                    <thead>
                                                        <tr role="row">

                                                            <th scope="col" className="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0"
                                                                rowspan="1" colspan="1" style={{ width: "127px" }} aria-sort="ascending"
                                                                aria-label="title: activate to sort column descending">Name</th>
                                                            <th scope="col" className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1"
                                                                colspan="1" style={{width: "182px"}} aria-label="Category: activate to sort column ascending">
                                                                Url</th>
                                                            {/* <th scope="col" className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1"
                                                                colspan="1" style={{width: "174px"}} aria-label="Teacher: activate to sort column ascending">
                                                                Address</th>
                                                            <th scope="col" className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1"
                                                                colspan="1" style={{width: "171px"}} aria-label="Lesson: activate to sort column ascending">
                                                                City</th> */}
                                                            <th scope="col" className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1"
                                                                colspan="1" style={{width: "106px"}} aria-label="Enrolled: activate to sort column ascending">
                                                                price</th>
                                                            {/* <th scope="col" className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1"
                                                                colspan="1" style={{width: "106px"}} aria-label="Enrolled: activate to sort column ascending">
                                                                Edit</th> */}
                                                            <th scope="col" className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1"
                                                                colspan="1" style={{width: "106px"}} aria-label="Enrolled: activate to sort column ascending">
                                                                Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {records.map((item, index) => {
                                                            return <TableRow key={item._id} id={item._id} name={item.name} url={item.houseUrl} price={item.price} fetchRecords={fetchRecords}/>
                                                        })}
                                                        {/* <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" />
                                                        <TableRow name="anonym" url="https://asdsad" price=" 125$" /> */}
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
    )
}