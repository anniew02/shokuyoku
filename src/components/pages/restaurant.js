import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import AddRestaurant from './add-restaurant';
// import Rating from './rating';

function Restaurant({restaurants, haveBeen, removeRestaurant, editRestaurant }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitEdit = value => {
    editRestaurant(edit.id, value)
    setEdit({
      id: null,
      value: ''
    });
  }

  if(edit.id) {
    return <AddRestaurant edit={edit} onSubmit={submitEdit} />
  }

  return restaurants.map((restaurant, index) => (
    <div 
      className={restaurant.haveBeen ? 'restaurant-row been' : 'restaurant-row'}
      key={index}
    >
      <div key={restaurant.id} onClick={() => haveBeen(restaurant.id)}>
        {restaurant.text}
      </div>

      {/* <div>
        <Rating />
      </div> */}

      <div className='icons'>
        <RiCloseCircleLine 
          onClick={() => removeRestaurant(restaurant.id)}
          className='delete-icon'
        />
        <TiEdit 
          onClick={() => setEdit({ id: restaurant.id, value: restaurant.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ))
}

export default Restaurant