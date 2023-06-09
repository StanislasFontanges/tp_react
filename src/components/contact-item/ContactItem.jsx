import React from 'react'
import './contact-items.css';

// Reminder: Props in React can be seen parameters in regular JavaScript functions
// The data passed as props can be accessed in such a way:
// props.data1, props.data2, props.data3
export default function ContactItem(props) {
    return (
        // Write the HTML (jsx) code to display the information of one contact in the contact list
        <div className="container">
            <p>{props.contactData.first_name}</p>
            <p>_</p>
            <p>{props.contactData.last_name}</p>
            <p>_</p>
            <p>{props.contactData.gender}</p>
            <img src={props.contactData.avatar}/>

        </div>
    )
}
