import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Datashow = () => {


  let [data, setData] = useState([])


  let Fetchdata = ()=>{
    let api = 'http://localhost:3000/hotel'

        

        axios.get(api).then((res)=>{
            console.log(res.data);
            setData(res.data)

        }).catch((err)=>{
            console.log(err);
        })
  }

  let DeleteData = (id)=>{
    let api = `http://localhost:3000/hotel/${id}`
    axios.delete(api).then((res)=>{
      Fetchdata()
        alert("deleted ",res.data);
    })
  }

    useEffect(() => {
        Fetchdata()
    },[])
        
  return (
    <>
        <table className='border'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Aadhar</th>
                    <th>Check_in</th>
                    <th>Check_Out</th>
                    <th>City</th>
                    <th>Person</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

              {data.map((e)=>(
                <tr key={e.id}>
                  
                  <td>{e.name}</td>
                  <td>{e.number}</td>
                  <td>{e.aadhar_no}</td>
                  <td>{e.check_in}</td>
                  <td>{e.check_out}</td>
                  <td>{e.city}</td>
                  <td>{e.people}</td>
                  <td onClick={()=>{DeleteData(e.id)}}><button>Delete</button></td>

                </tr>
              ))}
            </tbody>

        </table>

      
    </>
)
}

export default Datashow
