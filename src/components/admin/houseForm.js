import { React, useRef, useState } from 'react';
import { axiosAuthInstance, axiosInstance } from '../../axios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const HouseForm = ({ manageMenuState }) => {
    const buttonEnable = useRef(true);

    const [name, setName] = useState('');
    const [houseUrl, setHouseUrl] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState('');
    let navigate = useNavigate();

    const createHouse = async (e) => {
        e.preventDefault()

        axiosAuthInstance({
            method: "post",
            url: "apartment/add-apartment",
            data: {
                name,
                houseUrl,
                price,
                description,
                images
            }
        }).then(res => {
            if(res.data.statusCode = 403){
                navigate("/admin/login")
            }
            console.log(res)
        }).catch(err => {console.log(err)})

        setName('');
        setHouseUrl('');
        setPrice('');
        setDescription('');
    }

    const uploadFiles = async (filesList) => {
        const filesArray = [...filesList]

        console.log(filesList)
        console.log(filesArray)
        if (filesArray) {
            const formData = new FormData()
            filesArray.forEach(file => {
                console.log(file)
                formData.append(
                    'image',
                    file,
                    file.name
                )
            });
            axios({
                method: "post",
                url: 'http://localhost:5000/imageUpload',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => {
                console.log(res)
                setImages(res.data.message)
                buttonEnable.current = false
            }).catch(err => console.log(err))
        }
    }

    return (
        <>
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={manageMenuState} style={{ color: '#64c5b1' }}></i>
                    <span className="text"></span>
                </div>

                <div className="serach_field-area d-flex align-items-center">
                    <div className="search_inner">
                        <div className="search_field">
                            <input type="text" placeholder="Search here..." />
                        </div>
                        <button type="submit">
                            <img src="image/icon_search.svg" alt="" />
                        </button>
                    </div>
                </div>
            </section>
            <div className="main_content_iner overly_inner" style={{ maxHeight: "calc(100vh - 76px)" }}>
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
                                <div className="white_card_body">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label" for="inputEmail4">Name</label>
                                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputEmail4" />
                                            </div>
                                            <div className="col-md-6">
                                                <div id="dropBox">
                                                    <p>Drag & Drop Images Here...</p>
                                                    <form className="imgUploader">
                                                        <input type="file" id="imgUpload" multiple accept="image/*" onChange={(e) => { uploadFiles(e.target.files) }} />
                                                        <label className="button" for="imgUpload">...or Upload From Your Computer</label>
                                                    </form>
                                                    <div id="gallery"></div>
                                                </div>
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
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <button disabled={buttonEnable.current} type="button" onClick={createHouse} className="btn-primary px-5">Submit</button>
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