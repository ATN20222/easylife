import React from "react";
import ContactFirstSection from "../../Components/Contact/ContactFirstSection";
import './Contact.css'
import ContactFormSection from "../../Components/Contact/ContactFormSection";
const Contact  = ()=>{
    return(
        <div className="contact">
            <ContactFirstSection/>
            <ContactFormSection/>
        </div>
    );
}
export default Contact;