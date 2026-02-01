import { useState } from "react";
import Datashow from "./pages/Datashow";


const Forms = () => {
    // let [name,setname]=useState("")
    // let [age,setage]=useState("")
    // let [city,setcity]=useState("")


    // const handlechange = (e) => {
       
    //     console.log(e.target.value);
    //     setname(e.target.value)
       
        
    // }   

    // const handleage = (e) => {

    //     console.log(e.target.value);
    //     setage(e.target.value)

    // }


    let [form,setform]=useState({
        myname:"",
        mynumber:"",
        myadhar:"",
        check_in:"",
        check_out:"",
        city:"",
        people:""
    })

    const handlechange = (e) => {
        setform({...form,[e.target.name]:e.target.value})
    }

    let valid = true

    let handlesubmit=(e)=>{
        e.preventDefault()

        if(form.myname.trim()===""){
            alert("name is required")
          valid = false
        }

        else if (form.mynumber.trim().length !== 10  ) {
          alert("enter a valid number")
          valid = false
        }

        else if(form.myemail.trim()==="" && form.myemail.includes("@") === false && form.myemail.includes(".")=== false){

            alert("email is required")
            valid = false
        }

        else {
          // alert("form submitted sucessfully")
          <h1>form submitted sucessfully</h1>

        }
        if (valid) {
          let api = "http://localhost:3000/hotel"
          axios.post(api,form).then((res)=>{
              alert("form submitted sucessfully")
          })
        }

    }
  

  return (
    <>
    
      <h1>Form Handling</h1>

      <form onSubmit={handlesubmit} >
        enter your name:
        <input type="text" placeholder=' Enter Your Name' name="myname" value={form.myname} onChange={handlechange} /> <br /><br />

        enter your number:
        <input type="text" placeholder='Enter Your Number' name="mynumber" value={form.mynumber} onChange={handlechange} /> <br /><br />

        enter your aadhar:
        <input type="number" placeholder='aadhar' name="myaadhar" value={form.myemail} onChange={handlechange}/> <br /><br />

        check_in:
        <input type="date" placeholder='check_in' name="check_in" value={form.check_in} onChange={handlechange} /> <br /><br />

        check_out:
        <input type="date" placeholder='check_out' name="check_out" value={form.check_out} onChange={handlechange} /> <br /><br />

        city:
        <select name="city" value={form.city}>
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select> <br /><br />

        people:
        <input type="number" placeholder='people' name="people" value={form.people} onChange={handlechange} /> <br /><br /> 



      {/* <h1>my name is {form.myname} my number is {form.mynumber}  my email is {form.myemail}</h1> */}


      <input type="submit" value="submit"/>

     
      </form>
     
      <br /><br />

      <Datashow/>
    </>
  )
}


export default Forms
