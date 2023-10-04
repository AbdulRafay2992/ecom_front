import React, { useEffect, useState } from 'react';
import { fetchData, postData } from '../Methods';
import Attribute from './Attribute';

const Attributes = () => {

    const [attributes, setAttributes] = useState([])
    const [newAttribute, setNewAttribute] = useState()

    const AddUI = <button onClick={add_UI}>Add New Attribute</button>
    const [UI, setUI] = useState(AddUI)

    const saveCancel_UI =
        <>
            <input onChange={(event) => setNewAttribute(event.target.value)} type="text" />
            <button onClick={(event) => save_cancel_UI(event,'save')}>Save</button>
            <button onClick={() => save_cancel_UI('')}>Cancel</button>
        </>

    useEffect(() => {
        fetchData("/getattributes", setAttributes);
    }, [])

    function add_UI() {
        setUI(saveCancel_UI)

    }
    function save_cancel_UI(event,action) {
        const input_value = event.target.previousSibling.value;
        if (action === 'save') {
            postData('addattribute/', { name: input_value }, setAttributes)
        }
        setUI(AddUI)
    }


    return (
        <div>
            {attributes.map((category) => (
                <Attribute attribute={category} />
            ))}
            <br />
            <br />
            <div>{UI}</div>
        </div>
    );
}


export default Attributes;