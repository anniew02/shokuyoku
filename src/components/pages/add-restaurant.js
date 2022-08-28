import React, { useState } from 'react';

function AddRestaurant(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className='restaurants' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input 
                        placeholder='Update restaurant'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='restaurant-input edit'
                    />
                    <button onClick={handleSubmit} className='restaurant-button edit'>
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input 
                        type='text'
                        placeholder="Add restaurant" 
                        value={input} 
                        name='text'
                        className='restaurant-input'
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit} className='restaurant-button'>
                        Add Restaurant
                    </button>
                </>
            )}
        </form>
    ) 
}

export default AddRestaurant;