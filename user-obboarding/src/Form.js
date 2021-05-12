import React,  {useState, useEffect} from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';

const StyledForm = styled.div `
label{
font-size: 20px;
font-weight: bold;
color: #4d98b2;
}
input {
magin- top: 15px;
}
button{
font-size: 20px;
font-weight: bolder;
}
`



const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least six characters'),
    tos: yup.boolean().oneOf([true], 'Checking TOS is required')
})


const Form = () => {
const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    tos: false
});

const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    tos: ''
});


const [disabled, setDisabled] = useState(true)
const [users, setUsers] = useState ([])

const setFormErrors = (name, value) => {
yup.reach(schema, name).validate(value)
.then(() => setErrors({...errors, [name]: ''}))
.catch(err => setErrors({...errors, [name]: err.errors[0]}))


}
const change = event => {
const {checked, value, name, type} = event.target
const valueToUse = type === 'checkbox' ? checked: value
setFormErrors(name, valueToUse)
setForm({...form, [name]: valueToUse})

}
const submit = event => {
event.preventDefault()
const newName ={
    name: form.name.trim(),
    email: form.email,
    password: form.password,
    tos: form.tos
}
axios.post('https://reqres.in/api/users', newName)
.then(res => {
    setUsers(res.data)
        setForm({
            name: '',
            email: '',
            password: '',
            tos: false
        })
        console.log(res)
    })
    .catch(err => console.log(err.res))

        
}
useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
}, [form])

return (
<StyledForm className = 'form'>
<div style = {{color: 'pink'}}>
<div> {errors.name}   </div>
<div> {errors.email } </div>
<div> {errors.password}  </div>
<div> {errors.tos}  </div>
</div>

<form onSubmit = {submit}>
   <label> Member: 
      <input 
        onChange = {change}
        value = {form.name}
        name = 'name'
        type ='text'/>
    </label>
<label> Email:
    <input 
        onChange = {change}
        value = {form.email}
        name = 'email'
        type = 'email' />


<label> Password:
    <input
        onChange = {change}
        value = {form.password}
        name = 'password'
        type = 'password' />
</label>

<label> TOS:
    <input
        onChange={change}
        checked = {form.tos}
        name = 'tos'
        type = 'checkbox' />


</label>

<button disabled = {disabled}> Submit </button>
<pre>{JSON.stringify(users, null, 2)}</pre>
</label>
</form>
</StyledForm>


)
}

export default Form
