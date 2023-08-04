import React from 'react'
import { axiosAuthInstance, axiosInstance } from '../../axios'
import { useNavigate } from 'react-router-dom';

export const TableRow = ({id, name, url, price, fetchRecords}) => {
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
    <tr role="row" className="odd">
        <td>{name}</td>
        <td>{url}</td>
        <td>{price}$</td>
        {/* <td><i style={{cursor: "pointer"}} className="fa-solid fa-pen-to-square"></i></td> */}
        <td><i style={{cursor: "pointer"}} onClick={delteRecord} className="fa-solid fa-trash"></i></td>
    </tr>
  )
}
