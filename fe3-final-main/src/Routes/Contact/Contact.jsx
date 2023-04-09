import React from 'react'
import Form from '../../Components/Form'

const Contact = () => {
  const styles = {
    formContainers:{
      
      padding: "100px 0px 0px" ,
      display: "flex",
      flexDirection: "column",
          }
          ,
          inputContainers : {
            padding: "5px",
            borderRadius:"5px",
          }
          }
  return (
    <div >
      <h2 style={styles.formContainers} >Want to know more?</h2>
      <p style={styles.inputContainers}>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact