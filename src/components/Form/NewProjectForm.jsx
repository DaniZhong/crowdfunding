import { useState } from "react";
import "./FormComponent.css";
import FormInput from "../FormInput/FormInput";

const token = window.localStorage.getItem("token");
const NewProjectForm = () =>{
    const[values,setValues]= useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: "",
        date_created:"",

    });
    const input = [
        {
          id: 1,
          name: "title" , 
          type: "text",
          placeholder: "Give your story a title.",
          errorMessage:"Please give your story a title!",
          label: "Title",
          // pattern: "^[A-Za-z0-9]{1,1000}$",
          required: true,
        },
        {
            id: 2,
            name: "description" , 
            type: "text",
            placeholder: "Tell us your story.",
            errorMessage:"Please tell us your story!",
            label: "Description", 
            // pattern: "^[A-Za-z0-9]{1,2000}$", 
            required: true,
          },
          {
            id: 3,
            name: "goal" , 
            type: "number",
            placeholder: "Tell us you goal.",
            errorMessage:"Please enter a number to set your goal!.",
            label: "Goal",
            pattern: "^([0-9]{1}$)",
            required: true,
          },
          {
            id: 4,
            name: "image" , 
            type: "url",
            placeholder: "Please paste the link for the photo of your project here.",
            errorMessage:"It should be a link of the photo!",
            label: "Photo",
            required: true,
          },
          {
            id: 5,
            name: "is_open" , 
            type: "text",
            placeholder: "Please type in true to open or false to keep it close.",
            errorMessage:"You could only type in 'true' to open the project or 'false' to keep it close.",
            label: "Open project now",
            pattern: "^(true|false)$",
            required: true,
          },
          {
            id: 6,
            name: "date_created" , 
            type: "date",
            placeholder: "Password",
            label: "Date",
            required: true,
          },
          
    ];

const onChange = e=>{setValues({...values,[e.target.name]:e.target.value})}
console.log({values})

const postData = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`,
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
      console.log(values.title)
      console.log(values.description)
      console.log(values.goal)
      console.log(values.image)
      console.log(values.date_created)

      if (values.title && values.description && values.goal && values.image && values.date_created) {
        console.log(JSON.stringify({values})); 
      postData({values}).then((response) => {
      console.log(response);
      });
      }
  };
  

    return(
        <div className="FormComponent">
            <form onSubmit={handleSubmit}>
              <h1>Create a project!</h1>
           {    input.map((input)=>(
                <FormInput key={input.id} {...input} value={values[input.name]} onChange= {onChange}/>
                ))}
            <button type="submit" onClick={handleSubmit} >Submit</button>
        </form>
        </div>
    );
};


export default NewProjectForm;




