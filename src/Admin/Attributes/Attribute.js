import React, { useState } from 'react';
import { postData } from '../Methods';

const Attribute = (props) => {
    let attributeID=props.attribute.id
    let attributeName=props.attribute.name

    const [attribute, setAttribute] = useState(props.attribute.values);

    const AddUI = <button onClick={add_UI}>Add Value</button>

    const [UI, setUI] = useState(AddUI)

    const saveCancel_UI =
        <>
            <input type="text" />
            <button onClick={(event) => save_cancel_UI(event,'save')}>Save</button>
            <button onClick={() => save_cancel_UI()}>Cancel</button>
        </>

    function add_UI() {
        setUI(saveCancel_UI)
    }
    function save_cancel_UI(event,action) {
        if (action === 'save') {
            const input_value = event.target.previousSibling.value;
            
            postData('addattributevalue/',{"id":attributeID,"value":input_value},setAttribute)
        }
        setUI(AddUI)
    }
    
    return (
        <div key={attributeID}>
            <h3>{attributeName}</h3>
            <ul>
                {attribute.map((value) => (
                    <li key={value.id}>
                        <span>
                            {value.value}
                        </span>
                        {/* <button className="edit-button">
                            <div className="edit-icon"></div>
                        </button> */}
                        <button className="delete-button">
                            <div className="delete-icon" onClick={()=>
                                postData('deleteattributevalue/',{"id":value.id,"attribute":attributeID},setAttribute)
                            }></div>
                        </button>
                    </li>
                ))}
                <div>{UI}</div>
            </ul>
        </div>
    );
}

export default Attribute;