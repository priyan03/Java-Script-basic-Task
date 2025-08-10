
import React ,{useState}from 'react'

const Home = () => {
  const[name,setName]=useState({
    firstName:"",
    Email:'',
    password:''
  })
 
   const handlCLick=()=>{
    console.log(name,'-------------name---------');
    
   }

    const handleChange = (e) => {

        const {name,value}=e.target

        setName((prevData)=>({...prevData,[name]:value}))
    }
    return (
        <div>
            <p><input type="text" name="firstName" onChange={(e) => handleChange(e)} placeholder="UserName"></input> </p>
            <p><input type="text" name="Email" onChange={(e) => handleChange(e)} placeholder="Email"></input> </p>

            <p><input type="text" name="password" onChange={(e) => handleChange(e)} placeholder="Password"></input> </p>

            <p><button onClick={handlCLick}> Submit </button> </p>

        </div>
    )
}

export default Home
