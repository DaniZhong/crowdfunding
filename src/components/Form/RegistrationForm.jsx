import { useState } from "react";
import "./FormComponent.css";
import FormInput from "../FormInput/FormInput";


const RegistrationForm = () =>{
    const[values,setValues]= useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        // comfirmPassword: "",
    });
    const input = [
        {
          id: 1,
          name: "username" , 
          type: "text",
          placeholder: "Username",
          errorMessage:"Username should be 3-16 charaters and shouldn't include any special charater!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
            id: 2,
            name: "first_name" , 
            type: "text",
            placeholder: "FirstName",
            errorMessage:"Please don't include any special charater!.",
            label: "FirstName", 
            pattern: "^[A-Za-z0-9]{1,20}$", 
            required: true,
          },
          {
            id: 3,
            name: "last_name" , 
            type: "text",
            placeholder: "LastName",
            errorMessage:"Please don't include any special charater!.",
            label: "LastName",
            pattern: "^[A-Za-z0-9]{1,20}$",
            required: true,
          },
          {
            id: 4,
            name: "email" , 
            type: "email",
            placeholder: "Email",
            errorMessage:"It should be an email address!",
            label: "Email",
            required: true,
          },
          {
            id: 5,
            name: "password" , 
            type: "text",
            placeholder: "Password",
            errorMessage:"Password should be 8-12 charaters and include at least 1 letter, i number, and 1 special charater.",
            label: "Password",
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$',

            required: true,
          },
          // {
          //   id: 6,  
          //   name: "comfirmPassword:" , 
          //   type: "password",
          //   placeholder: "Comfirm Password",
          //   errorMessage:"Passwords don't match!",
          //   label: "Comfirm Password",
          //   pattern:values.password,
          //   required: true,
          // }    
    ];

const onChange = e=>{setValues({...values,[e.target.name]:e.target.value})}
console.log({values})

const postData = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}users/`,
      {
      method: "post",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      }
      );
      console.log({values});
      console.log(JSON.stringify(values));
      console.log(response);
      return response.json();
  }

 

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values.username)
      console.log(values.first_name)
      console.log(values.last_name)
      console.log(values.email)
      console.log(values.password)

      if (values.username && values.first_name && values.last_name && values.email && values.password) {
        console.log(JSON.stringify({values})); 
      postData({values}).then((response) => {
      console.log(response);
      });
      }
  };
  
      
    

    

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (values.username && values.firstName && values.lastName && values.email && values.password) {
    //       const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, 
    //       {
    //         method: "post",
    //         headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({values}),
    //       }
    //       )
    //       return response.json();
    //       }
    //       .then((response) => {
    //         console.log(response.json()););
    //     }

    // console.log({values})

    return(
        <div className="FormComponent">
            <form onSubmit={handleSubmit}>
              <h1>Become a member!</h1>
           {    input.map((input)=>(
                <FormInput key={input.id} {...input} value={values[input.name]} onChange= {onChange}/>
                ))}
            <button type="submit" onClick={handleSubmit} >Submit</button>
        </form>
        </div>
    );
};


export default RegistrationForm;




// const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log({values})
    //     fetch(`${process.env.REACT_APP_API_URL}users/`,{
    //       method: 'post',
    //       headers: {"Content-Type": "application/json"},
    //       body: JSON.stringify({values})
    //     }).then((response) => {
    //         console.log(response.json());
    //         console.log("New user created");
    //     })
    //   }
            
    //   const handleSubmit = async () => {
    //     const response = await fetch(`${process.env.REACT_APP_API_URL}users/`,
    //     {
    //     method: "post",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({values}),
    //     }
    //     );
    //     return response.json();
    // }  


//V1
      // try{
      //   let result = await fetch(`https://webhook.site/6dbe9040-21d4-49ad-83bf-3d849a5a9a01`,{
      //     method: 'post',
      //     mod: 'no-cors',
      //     headers: {
      //         'Accept': 'application/json',
      //         'Content-type': 'application/json',
      //     },
      //     body: JSON.stringify({values}) 
      //   });
      //   console.log('Result:' + result)
      // }catch(e){
      //     console.log(e)
      // }