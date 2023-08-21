import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosAuthInstance } from '../../axios';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {BsFillArrowLeftCircleFill, BsFillArrowLeftSquareFill} from 'react-icons/bs'

export const EditModal = ({ id, hname, hprice, hhouseUrl, hdescription, himages, setOpen }) => {
    const location = useLocation();


    const [name, setName] = useState(hname);
    const [houseUrl, setHouseUrl] = useState(hhouseUrl);
    const [price, setPrice] = useState(hprice);
    const [description, setDescription] = useState(hdescription);
    const [images, setImages] = useState(himages);

    let navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault()

        axiosAuthInstance({
            method: "post",
            url: "apartment/update-apartment",
            data: {
                apartmentId: id,
                name,
                houseUrl,
                price,
                description,
            }
        }).then(res => {
            if (res.data.statusCode == 403) {
                navigate("/admin/login")
            }
            setOpen(false)
        }).catch(err => { console.log(err) })
    }



    return (
        <div style={{ width: "100%", height: "100vh", position: "fixed", top: "0px", left: "0px", zIndex: "300", overflow: "auto", background: "white" }}>
            <div className="main_content_iner overly_inner">
                <div className="container-fluid ">
                <BsFillArrowLeftCircleFill onClick={() => setOpen(false)} style={{position: "absolute", cursor: "pointer",left: "3%", color: "#64C5B1", width: "90px", height: "90px"}}/>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="white_card card_height_100">
                                <div className="main-title">
                                    <h3 className="my-4" style={{ textAlign: "center" }}>Edit House</h3>
                                </div>
                                <div className="white_card_body">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="form-label" for="inputEmail4">Name</label>
                                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputEmail4" />
                                            </div>
                                            
                                            <div className="col-12">
                                                <label className="form-label" for="inputAddress">Url</label>
                                                <input value={houseUrl} onChange={(e) => setHouseUrl(e.target.value)} type="url" className="form-control" id="inputAddress" placeholder="" />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label" for="inputState">Price</label>
                                                <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="" />
                                            </div>
                                            <div className=" col-12">
                                                <label className="form-label" for="inputCity">Description</label>
                                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" style={{ height: '100px' }} rows="5" id="inputCity"></textarea>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <button type="button" onClick={handleUpdate} className="btn-primary px-5">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
