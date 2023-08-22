import axios from 'axios'
import React, { useState } from 'react'
import { axiosAuthInstance } from '../../axios'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export const EditImages = ({ id, images, setOpenImages }) => {
    const [image, setImage] = useState(images)

    // const [newImages, setNewImages] = useState([])

    const deleteImg = (index) => {
        const arr = image.filter((item, pos) => pos !== index)
        axiosAuthInstance({
            method: "post",
            url: "apartment/update-apartment-images",
            data: {
                apartmentId: id,
                images: arr
            }
        }).then(res => {
            setImage(res.data.message)
        }).catch(err => {
            alert(err.message)
            console.log(err)
        })
    }

    const addMore = (newImages) => {
        const arr = [...image, ...newImages]
        axiosAuthInstance({
            method: "post",
            url: "apartment/update-apartment-images",
            data: {
                apartmentId: id,
                images: arr
            }
        }).then(res => {
            setImage(res.data.message)
        }).catch(err => {
            alert(err.message)
            console.log(err)
        })
    }


    const uploadFiles = async (filesList) => {
        const filesArray = [...filesList]
        if (filesArray) {
            const formData = new FormData()
            filesArray.forEach(file => {
                formData.append(
                    'image',
                    file,
                    file.name
                )
            });
            axios({
                method: "post",
                url: `https://backend.awestman.com/imageUpload`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(res => {
                    addMore(res.data.message)
                }).catch(err => console.log(err))
        }
    }

    return (
        <div style={{ width: "100%", height: "100vh", position: "fixed", top: "0px", left: "0px", zIndex: "300", overflow: "auto", background: "white" }}>
            <BsFillArrowLeftCircleFill onClick={() => setOpenImages(false)} style={{position: "absolute", cursor: "pointer",left: "6%", color: "#64C5B1", width: "90px", height: "90px"}}/>
            <h1 style={{ textAlign: "center" }}>Images</h1>
            <p style={{ textAlign: "center" }}>Add new Images or delete current ones</p>
            <div style={{ display: "flex", flexWrap: "wrap", width: "90%", transform: "translateX(10%)" }}>
                {image.map((item, index) => {
                    return <div style={{ width: "32%", padding: "4px 10px", position: "relative" }}>
                        <div onClick={() => deleteImg(index)} style={{ position: "absolute", top: "0px", right: "0px" }}><button className='btn btn-danger'>delete</button></div>
                        <img src={`https://backend.awestman.com/${item}`} alt="" style={{ width: "100%", height: "auto" }} />
                    </div>
                })}
                <div className="col-md-12">
                    <h1 style={{margin: "10px 4px", textAlign: "center"}}>Add More</h1>
                    <div id="dropBox" style={{width: "50%"}}>
                        <p>Drag & Drop Images Here...</p>
                        <form className="imgUploader">
                            <input type="file" id="imgUpload" multiple accept="image/*" onChange={(e) => { uploadFiles(e.target.files) }} />
                            <label className="button" for="imgUpload">...or Upload From Your Computer</label>
                        </form>
                        <div id="gallery"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
