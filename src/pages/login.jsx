import './login-module.css';

export default function Login() {
  return (
    <div className="wrapper">
        <h1>LOGIN</h1>
        <div className="inputs">
            <input  className='input-btn'
            type="name" 
            placeholder="username" 
            required
            > 
            </input>
             </div>
            <div className="inputs">
            <input className='input-btn'
            type="password" 
            placeholder="password" 
            required
            > 
            </input>
                           <a style={{textDecoration:'none' ,color:'violet',fontSize:'10px',textAlign:'center',fontWeight:'bold',marginTop:'5px'}}href="#">Forgot Password?</a>

             </div>
             
            
           
            <div className="rememberme-forgot">
             
                <button className="btn-login">
                  LOGIN
            </button>
              
               </div> 
           
             
            <div className="create">
             <div>
             <span>Dont have an account ? </span> <a  href="#">Register</a></div>   

            </div>

       
        
      
    </div>
  )
}
