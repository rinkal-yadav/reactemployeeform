import React,{useState} from 'react'


function Employee() {
    const [userInfo,setuserInfo]=useState(
        {
            name: '' ,
            department : '',
            rating : ''
        }
    )
    
    const [header,setHeader]=useState("EMPLOYEE FEEDBACK FORM")
    const [btn,setBtn]=useState(false)
    const[display,setDisplay]=useState([])

    const updateValue = (e)=>{
        setuserInfo({
            ...userInfo,[e.target.name]:e.target.value
        })

    }

    const submited=(e)=>{
        e.preventDefault()
        const setDisplays={...userInfo,id:new Date().getTime().toString()}
        setDisplay([...display,setDisplays])
        setBtn(true)
        setHeader("EMPLOYEE FEEDBACK DATA")
        
    }

    const backbtn=()=>{
        setHeader("EMPLOYEE FEEDBACK FORM")
        setuserInfo({
            name:"",
            department:'',
            rating:''
        })
        setBtn(false)
        }



    return (
        <div>
            <div className='form-head'> {header} </div> <br/><br/>

            {
                btn? <>
                <div className='flex-box'>
                {
                     display.map((value)=>{
                         return(
                           
                                   <div className='form-output'>
                                         Name: {value.name}  | Department : {value.department}   | Rating : {value.rating} 
                                    </div>   
                               )
                              })
                }
                           </div>
                <button onClick={backbtn} className='form-submit' type='button'> Go Back</button></>

                :

                <form action=""  onSubmit={submited} >
                <div>                 
                     <label  user="name" className='form-label'>Name : </label>                  
                     <input required type="text" className='form-input' name="name" id="name" value={userInfo.name} onChange={updateValue} />  <br/><br/>
                     <label user="name" className='form-label'>Department : </label>                  
                     <input required type="text" className='form-input' name="department" id="department" value={userInfo.department} onChange={updateValue} />    <br/><br/>
                     <label user="name" className='form-label'>Rating : </label>                  
                     <input required type="number" className='form-input' name="rating" id="rating" min={1} max={10} value={userInfo.rating} onChange={updateValue} />   <br/><br/> 
                  </div>
                  <button  type="submit" className='form-submit'  >submit</button>
             </form>
            }
    

             

        

            
        </div>
    )
}

export default Employee
