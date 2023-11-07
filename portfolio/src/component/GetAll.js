import React, { useState} from 'react'
import { getAllCustomers } from '../service/customer'

const GetAll = () => {
    const[pageSize, setPageSize] = useState()
    const[pageNumber, setPageNumber] = useState()
    const[data, setData] = useState()
    const getAllCustomer = async() =>{
        console.log("Page Size: ", pageSize)
        console.log("Page Number: ", pageNumber)
        //validation of pagen number and pagesize
        let response = await getAllCustomers(pageNumber, pageSize)
        if (response.data){
            setData(response.data)
        }
        //console.log(response)
        //console.log(response.data)
       // console.log(response.headers['X-Total-Count'])
       
    }

    const tableOfCustomers = data?.map((d)=>{
        return(
            <tr>
                <td>{d.cid}</td>
                <td> {d.email}</td>
                <td> {d.firstname}</td>
                <td> {d.lastname}</td>
                <td> {d.mobile}</td>
                <td> {d.status}</td>
            </tr>
        )
    })

  return (
    <>
        <div className="form-floating">
            <select className="form-select form-select-lg mb-3" id="floatingSelect"
            aria-label="Floating label select example" onChange={
                (e) => {
                    setPageSize(e.target.value)
                }
            }>
                <option selected>Page Size</option>
                <option value="2" selected={2 == pageSize}>2</option>
                <option value="5" selected={5 == pageSize}>5</option>
                <option value="10" selected={10 == pageSize}>10</option>
            </select>  
            <label for="floatingSelect">Works with selects</label> 
        </div>
        <div className="form-floating">
            <select className="form-select" id="floatingSelect"
            aria-label="Floating label select example" onChange={
                (e) => {
                    setPageNumber(e.target.value)
                }
            }>
                <option selected>Page Number</option>
                <option value="0" selected={0 == pageNumber}>1</option>
                <option value="1" selected={1 == pageNumber}>2</option>
                <option value="2" selected={2 == pageNumber}>3</option>
                <option value="3" selected={3 == pageNumber}>4</option>
                <option value="4" selected={4 == pageNumber}>5</option>
                <option value="5" selected={5 == pageNumber}>6</option>
                <option value="6" selected={6 == pageNumber}>7</option>
                <option value="7" selected={7 == pageNumber}>8</option>
            </select>   
            <label for="floatingSelect">Works with selects</label>
            <button type="button" className="btn btn-success" onClick={getAllCustomer}>Success</button>
            <table className="table">
                <thread>
                <tr>
                    <th scope='col'>cid</th>
                    <th scope='col'>email</th>
                    <th scope='col'>firstname</th>
                    <th scope='col'>lastname</th>
                    <th scope='col'>mobile</th>
                    <th scope='col'>status</th>
                </tr>
                </thread>
                <tbody>
                    {rowsOfCustomers}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default GetAll
