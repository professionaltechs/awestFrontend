import React from 'react'
import { axiosAuthInstance, axiosInstance } from '../../axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EditModal } from './EditModal';
import { EditImages } from './EditImages';

export const TableRow = ({id, name, url, images, price, description, fetchRecords}) => {
    const [open, setOpen] = useState(false)
    const [openImages, setOpenImages] = useState(false)

    let navigate = useNavigate();
    const delteRecord = () => {
        axiosAuthInstance({
            method: "post",
            url: "/apartment/remove-apartment",
            data: {
                apartmentId: id
            }
        }).then(res => {
            if(res.data.statusCode = 403){
                navigate("/admin/login")
            }
            console.log(res)
            fetchRecords()
        }).catch(err => {
            console.log(err)
        })
    }
  return (
    <>
        {open ? <EditModal id={id} hname={name} hprice={price} himages={images} hhouseUrl={url} hdescription={description} setOpen={setOpen}/> : null}
        {openImages ? <EditImages id={id} images={images} setOpenImages={setOpenImages}/> : null}
        <tr role="row" className="odd">
            <td>{name}</td>
            <td>{url}</td>
            <td><img onClick={() => setOpenImages(true)} style={{height: "100%", width: "auot", cursor: "pointer"}} src={images[0]}/></td>
            <td>{price}$</td>
            <td><i onClick={() => setOpen(true)} style={{cursor: "pointer"}} className="fa-solid fa-pen-to-square"></i></td>
            <td><i style={{cursor: "pointer"}} onClick={delteRecord} className="fa-solid fa-trash"></i></td>
        </tr>
    </>
  )
}
