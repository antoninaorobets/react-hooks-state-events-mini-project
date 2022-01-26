import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit }) {
  const [formData, setFormData]=useState(
    {
      text: "",
      category:"Code"
    })

    function onDataChange(event){
      setFormData ({
        ...formData,
       [event.target.name]: event.target.value
      })
    }

  function onSubmitForm(event){
    event.preventDefault()
    onTaskFormSubmit(formData)
  }  

  const options = categories.map((option) => {
    if (option !== "All") { return <option key={option} value={option}>{option}</option> }
  })


  return (
    <form className="new-task-form" onSubmit={onSubmitForm}>
      <label>
        Details
        <input type="text" name="text" onChange={onDataChange} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onDataChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
