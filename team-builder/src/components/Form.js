import React, { useState } from 'react'

const Form = props => {

    const initialMember = {
        name: "",
        email: "",
        job: ""
      }
    const [teamMember, setTeamMember] = useState(initialMember);

      const handleChange = event => {
        setTeamMember({
          ...teamMember,
          [event.target.name]: event.target.value
        });
      };

      const handleSubmit = event => {
        event.preventDefault();
    
          props.setTeamMembers([teamMember, ...props.teamMembers]);
          resetForm();
      };

      const resetForm = () => {
        setTeamMember(initialMember);
      };

      console.log(teamMember)

    return (
        <div>
            <form onSubmit={(event) =>  handleSubmit (event)}>
            Name: 
            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <br/>
            Email: 
            <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
                        <br/>
            Job:
            <input
                type="text"
                name="job"
                placeholder="Job"
                onChange={handleChange}
            />
            <br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
