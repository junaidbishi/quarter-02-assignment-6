

export default function Contact(){
    return(
  
    <div>
    <div className="form">
    <fieldset className="contact">
    
    <legend>Contact details</legend>
    <label >Email:<><br />
    <input type="text" name="email" />
    </></label><br />
    
    <label >Mobile-Number:<><br />
    <input type="number" name="mobile" />
    </></label><br />
    
    <label >Adress:<><br />
    <input type="text" name="Adress" />
    </></label><br />
    
    <label >Message:<><br />
    <textarea name="message" cols={20} rows={4}> enter your message</textarea>
    </></label><br />
    
    
    
    </fieldset>
    
    </div>
    
    </div>
    
    
    
    
    
    
    )
    
    
    
    
    
    
    }