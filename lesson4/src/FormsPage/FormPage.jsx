import style from './FormPage.module.css';
import { useForm } from 'react-hook-form';
import PageComments from './PageComments';
import { useState } from 'react';
const FormPage = () => {
    const [email , setEmail] = useState();
    const [id , setId] = useState();
    const {handleSubmit , register  } = useForm();
    const postDetails = (details) =>{
        setEmail(details.email);
        console.log(details);
        fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            body: JSON.stringify(details)})
        .then((response) => response.json())
        .then((data) => {
            setId(data.id);
            console.log(data);});  
        const box = document.getElementsByClassName('FormPage_box__f2jVR');
        box[0].style.display = 'none'; 
    }

    return (
        <>
        <div className={style.box}>
            
            <h1>Welcome,enter your details</h1>
            <form onSubmit={handleSubmit(postDetails)}>
                <label >
                    Name:
                    <input type="text" {...register('name', {required: true})}/>
                </label>
                <label >
                    Username:
                    <input type="text" {...register('username', {required: true})}/>
                </label>
                <label >
                    Email:
                    <input type="email" {...register('email', {required: true})} />
                </label>
                <label >
                    Phone:
                    <input type="tel" {...register('pnone', {required: true})}/>
                </label>
                <input  type="submit" value="Next" />
            </form>
           
        </div>

        <PageComments emaile={email} id={id}/>
        </>
        
    );
}

export default FormPage;