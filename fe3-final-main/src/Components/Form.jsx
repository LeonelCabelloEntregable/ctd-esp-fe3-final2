import {useState} from "react";
import './Form.css'


const Form = () => {
 
      const [username, setUsername] = useState("")
      const [email, setEmail] = useState("")
      const [submited, setSubmited] = useState(false)
      const [error, setError] = useState(false)
      const handleEmail = (value) =>{
          setEmail(value)
      }
      const handleUsername = (value) => {
          setUsername(value)
      }
      const onHandleSubmit = (e) =>{
          e.preventDefault()
          if(username.length > 5 && /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email) && email.includes(".com")  ){
              setSubmited(true)
              setError(false)
          }else{
              setError(true)
          }
      }
    return (
      <div className="form"  >
          <form className="form"  action="" onSubmit={(e) => onHandleSubmit(e)} component='form' >
              <div>
                  <label  htmlFor="">Ingrese su nombre</label>
                  <input    type="text"  onChange={(e) => handleUsername(e.target.value)}/>
              </div>
              <div className="form" >
                  <label  htmlFor="">Ingrese su email</label>
                  <input   type="text" onChange={(e) => handleEmail(e.target.value)}/>
              </div>
              {
                  submited ?  <h2>Gracias {username} te contactaremos cuanto antes via mail</h2> : <input type="submit" value="Enviar"  />
              }
          </form>
          {error && <h2>Por favor verifica la informacion nuevamente</h2>}
      </div>
    )
  }



export default Form;
