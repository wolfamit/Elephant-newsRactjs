import React from 'react';

function Footer() {
  return (
    
        <div className="bg-dark text-center text-white">
            {/* <div className="container p-4 pb-0"> */}
                {/* <div className="mb-4">
                <a
                            className="btn text-white btn-floating m-1"
                            style = {{ backgroundColor: "#3b5998" }}
                            href="."
                            role="button"
                        ><i className="fab fa-facebook-f"></i></a>

                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            href="/"
                            role="button"
                        ><i className="fab fa-twitter"></i></a>

                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="/"
                            role="button"
                        ><i className="fab fa-google"></i></a>

                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="/"
                            role="button"
                        ><i className="fab fa-instagram"></i></a>

                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{
                                backgroundColor: "#0082ca"
                            }}
                            href="/"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i></a>
                       
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#333333" }}
                            href="/"
                            role="button"
                        ><i className="fab fa-github"></i></a>
                </div>
             </div> */}
             <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright: 

                    <a className="text-white" style = {{textDecoration:"none"}} href="/"> ❤️Amitabh Raj Ambastha</a>
                    <a className="text-white" style = {{textDecoration:"none"}} href="/"> NewsElephant.com</a>
                </div>
        </div>
        
  )
}

export default Footer;