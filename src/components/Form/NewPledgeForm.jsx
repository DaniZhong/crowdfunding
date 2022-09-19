import { useState } from "react";
import "./FormComponent.css";
import FormInput from "../FormInput/FormInput";
import { useParams } from "react-router-dom";

const token = window.localStorage.getItem("token");


const NewPledgeForm = () =>{
    const { id } = useParams();
    console.log(id)

    const[values,setValues]= useState({
        amount: "",
        comment: "",
        anonymous: "",
        project_id: id,

    });
    const input = [
        {
          id: 1,
          name: "amount" , 
          type: "number",
          placeholder: "Amount",
          errorMessage:"You could only enter numbers in this field.",
          label: "Amount",
          pattern: "^([0-9]{1}$)",
          required: true,
        },
        {
            id: 2,
            name: "comment" , 
            type: "text",
            placeholder: "Please leave your message here.",
            errorMessage:"Please leave your message.",
            label: "Comment", 
            // pattern: "^[A-Za-z0-9]{1,1000}$", 
            required: true,
          },
          {
            id: 3,
            name: "anonymous",
            type: "text",
            placeholder: "Please type in true if yes or false if no.",
            errorMessage:"You type in 'true' or 'false'.",
            label: "Be Anonymous",
            pattern: "^(true|false)$",
            required: true,
          },
          
    ];

const onChange = e=>{
    setValues((prevValues) => ({
        ...prevValues,[e.target.name]: e.target.value,}
        ));};

// const onChange = (e) => {
//     const { id, value } = e.target;
//     setValues((prevValues) => ({
//         ...prevValues,[e.target.name]: e.target.value,}
//         ));};

console.log({values})

const postData = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`,
      {
      method: "post",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
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
      console.log(values.amount)
      console.log(values.comment)
      console.log(values.anonymous)

      if (values.amount && values.comment && values.anonymous) {
        console.log(JSON.stringify({values})); 
      postData({values}).then((response) => {
      console.log(response);
      });
      }
  };
  

    return(
        <div className="FormComponent">
            <form onSubmit={handleSubmit}>
              <h1>Make a pledge!</h1>
           {    input.map((input)=>(
                <FormInput key={input.id} {...input} value={values[input.name]} onChange= {onChange}/>
                ))}
            <button type="submit" onClick={handleSubmit} >Submit</button>
        </form>
        </div>
    );
};


export default NewPledgeForm;




