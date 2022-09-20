import { useState } from "react";
import Select from 'react-select';

export default function Form(){
    const[name,setname] = useState('')
    const[password,setpassword] = useState('')
    const[email,setemail] = useState('')
    const[age,setage] = useState('')
    const[ischecked, setischecked] = useState(false);
    const[radiochecked,setradiochecked] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const [nameerror,setnameerror] = useState('') 
    const [pwderror,setpwderror] = useState('') 
    const [emailerror,setemailerror] = useState('') 
    const [ageerror,setageerror] = useState('') 
    const [checkboxerror,setcheckboxerror] = useState('') 
    const[radiocheckederror,setradiocheckederror] = useState('')
    const [selectedOptionerror, setSelectedOptionerror] = useState('');

    const options = [
       { value: 'chocolate', label: 'Chocolate' },
       { value: 'strawberry', label: 'Strawberry' },
       { value: 'vanilla', label: 'Vanilla' },
     ];
  
    function validate(e){
       e.preventDefault();
     //  alert('sucessfully login')
     const numberRegEx = /\-?\d*\.?\d{1,2}/;
     const emailregex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

       if(name == ''){setnameerror('username is required')}else{setnameerror('')}
       if(password == ''){setpwderror('password is required')}else{setpwderror('')}
       if(password.length != 0 &&  password.length < 6){setpwderror('password must be 6 charactors long')}
       if(email == ''){setemailerror('email is required')}else{setemailerror('yup')}
       //if(email != '' && email.match(emailregex)){setemailerror('please enter valid email')}else{setemailerror('yes')}
       if(age == ''){setageerror('age is required')}else{setageerror('')}
       //if(age != '' && age > 100){setageerror('please enter correct age')}else{setageerror('')}
       if(ischecked == false){setcheckboxerror('please checked all conditions')}else{setcheckboxerror('')}
       if(radiochecked == false){setradiocheckederror('please choose gender')}else{setradiocheckederror('')}
       if(selectedOption == null){setSelectedOptionerror('please choose option')}else{setSelectedOptionerror('')}
       
       if(nameerror == '' && pwderror == '' && emailerror =='' && ageerror =='' && checkboxerror == '' && radiocheckederror == ''&& name != '' && password != '' && email != '' && age != '' && ischecked == true && radiochecked == true){
        alert('sucessfully sigup')
      }  
      console.log(email ,email.match(emailregex) )  
}

  const subcontainerStyle={
       flexDirection:"column",
       display:"flex",
       justifyContent:"center"
  }  
  const inputStyle={
       marginTop:10,
  }
  const errorStyle={
       color:"red"
  }
  
    return (
      <div style={{"display":"flex","justifyContent":"center"}}>
       <form onSubmit={validate}>
        <div style={subcontainerStyle}>
       <input style={inputStyle}
              placeholder='name'
              type='text'
              value={name}
              onChange={e => setname(e.target.value)}/>
              <span style={errorStyle}>{nameerror}</span>
       <input style={inputStyle}
              placeholder='email'
              type='text'
              value={email}
              onChange={e => setemail(e.target.value)}/>
              <span style={errorStyle}>{emailerror}</span>
       <input style={inputStyle}
              placeholder='age'
              type='number'
              value={age}
              onChange={e => setage(e.target.value)}/>   
              <span style={errorStyle}>{ageerror}</span>
       <input style={inputStyle}
              placeholder='password'
              type='password'
              value={password}
              onChange={e => setpassword(e.target.value)}/> 
              <span style={errorStyle}>{pwderror}</span>
              <br/>
       <label>gender</label>
       <div>
        <input type="radio" value="Male" name="gender" onChange={(e) => setradiochecked(!radiochecked)}/> Male
        <input type="radio" value="Female" name="gender" onChange={(e) => setradiochecked(!radiochecked)} /> Female
        <input type="radio" value="Other" name="gender" onChange={(e) => setradiochecked(!radiochecked)}/> Other
      </div> 
      <span style={errorStyle}>{radiocheckederror}</span>  
      <br/>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <span style={errorStyle}>{selectedOptionerror}</span>
       <div>
       <input style={inputStyle}
              type="checkbox"
              value={ischecked}
              onChange={() => setischecked(!ischecked)}/>please accept all our terms and conditions  
       </div>    
       <span style={errorStyle}>{checkboxerror}</span>  
       <br/>
       <button>submit</button>        
          </div>               
         </form>
      </div>
  
  
    );
}