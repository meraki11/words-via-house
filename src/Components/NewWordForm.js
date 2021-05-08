import React, { useState } from 'react';

export const NewWordForm = (props) => {
    const [name, setName] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
            props.addNewWord({name});
            setName('');
            console.log(name);
        }   else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Enter your one word</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type='submit'>Add Word</button>
            </form>
        </div>
    )
};