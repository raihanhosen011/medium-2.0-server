// for link validation
export function linkTemplate(url: string){
   return (
     `  <div style="display: flex;max-width: 620px; align-items: center; justify-content: center; text-align: center; padding: 1rem; padding-bottom: 2.5rem; background: #05050514; border-radius: 20px;" >
            <div>
                <h1> Well-come to Medium 2.0 by <a href="https://raihanhosen.com" target="_blank" >Raihan Hosen</a> </h1> 
                <p style="width: 80%; margin: auto; line-height: 1.4; margin-top: -10px; margin-bottom: 2.5rem;" > Congratulations! You're almost set to start using Medium 2.0. Just click the button below to validate your email address. </p> 

                <a href="${url}" target="_blank" > 
                    <button style="border: none; outline: none; color: white; background: #313131; padding: 9px 19px; border-radius: 10px; cursor: pointer;" > 
                        VERIFY 
                    </button>            
                </a>


                <div style="margin-top: 3.5rem;" >
              
                    <a href="https://github.com/raihanhosen011" target="_blank" >
                      <img width="25px" height="25px" style="margin-right: 15px;" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />   
                    </a> 
                
                    <a href="https://www.linkedin.com/in/raihanhosen01/" target="_blank" >
                      <img width="25px" height="25px" style="margin-right: 15px;" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />   
                    </a> 
                
                    <a href="https://twitter.com/raihanhosen01" target="_blank" >
                      <img width="25px" height="25px" style="margin-right: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png" />   
                    </a> 
                
                    <a href="https://raihanhosen.com/" target="_blank" >
                      <img width="25px" height="25px" style="margin-right: 15px;" src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-clipart-internet-logo-clipground-33.jpg" />   
                    </a> 
                
                    <a href="https://www.facebook.com/raihanhosen01" target="_blank" >
                      <img width="25px" height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />   
                    </a> 
                    
                </div>
            </div>
        </div>
     `
   ) 
}


// for OTP validation
export function otpTemplate(code ?: string){
   return (
     `  
        <div style="display:flex;max-width: 620px; align-items:center;justify-content:center;text-align:center;padding:1rem;padding-bottom:1.5rem;background:#05050514;border-radius:20px;" >
            <div>
                <h1 style="color: black;" > Well-come to Medium 2.0 by <a href="https://raihanhosen.com" target="_blank" >Raihan Hosen</a> </h1> 
                <p style="width: 80%; margin: auto; line-height: 1.4; margin-top: -10px; margin-bottom: 2.5rem;" > Congratulations! You're almost set to start using Medium 2.0. Just use below OTP to validate your email address. </p> 

                
                <div style="background: #3e3e3e; width: fit-content; margin: auto; color: #e3e3e3; border-radius: 7px; padding: 6px 13px;">
                    <h1 style="margin: auto; letter-spacing: 10px;" > ${code} </h1> 
                </div>


                <div style="margin-top: 3.5rem;" >
                
                    <a href="https://github.com/raihanhosen011" target="_blank" >
                        <img width="25px" height="25px" style="margin-right: 15px;" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />   
                    </a> 
                
                    <a href="https://www.linkedin.com/in/raihanhosen01/" target="_blank" >
                        <img width="25px" height="25px" style="margin-right: 15px;" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />   
                    </a> 
                
                    <a href="https://twitter.com/raihanhosen01" target="_blank" >
                        <img width="25px" height="25px" style="margin-right: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png" />   
                    </a> 
                
                    <a href="https://raihanhosen.com/" target="_blank" >
                        <img width="25px" height="25px" style="margin-right: 15px;" src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-clipart-internet-logo-clipground-33.jpg" />   
                    </a> 
                
                    <a href="https://www.facebook.com/raihanhosen01" target="_blank" >
                        <img width="25px" height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />   
                    </a> 
                    
                </div>
            </div>
        </div>
     `
   ) 
}