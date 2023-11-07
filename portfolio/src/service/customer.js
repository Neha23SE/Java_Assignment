import axios from "axios"

export const getAllCustomers= async (pageNumber, pageSize) =>{
    let response = await axios.get('http://localhost:8080/customer/customerpagewise', {
        params:{
            pagesize: pageSize,
            pagenumber: pageNumber
        }
    })
    
    return response
}

