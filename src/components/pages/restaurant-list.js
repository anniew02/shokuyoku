import React, {useState} from 'react';
import AddRestaurant from './add-restaurant';
import Restaurant from './restaurant';
import './restaurant-list.css'

function RestaurantList() {
  
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = restaurant => {
    if(!restaurant.text || /^\s*$/.test(restaurant.text)) {
      return; 
    }

    const newRestaurants = [restaurant, ...restaurants];

    setRestaurants(newRestaurants);
    // console.log(restaurant, ...restaurants);
  }

  const removeRestaurant = id => {
    const removeArr = [...restaurants].filter(restaurant => restaurant.id !== id)

    setRestaurants(removeArr)
  }

  const editRestaurant = (restaurantId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return; 
    }

    setRestaurants(prev => prev.map(item => (item.id === restaurantId ? newValue : item)))
  }

  const haveBeen = id => {
    let updatedRestaurants = restaurants.map(restaurant => {
      if (restaurant.id === id) {
        restaurant.haveBeen = !restaurant.haveBeen;
      }
      return restaurant;
    });
    setRestaurants(updatedRestaurants);
  }

  return (
    <div>
      <div>
        <h1>Restaurants</h1>
      </div>

      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '10vh'
        }}>
        <AddRestaurant 
          onSubmit={addRestaurant}
        />
      </div>

      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '10vh'
        }}>
        <Restaurant 
          restaurants={restaurants} 
          haveBeen={haveBeen} 
          removeRestaurant={removeRestaurant} 
          editRestaurant={editRestaurant} 
        />
      </div>
    </div>


    // <>
    //   <h1>Restaurants</h1>
    //   <AddRestaurant onSubmit={addRestaurant} />
    //   <Restaurant restaurants={restaurants} hasBeen={hasBeen} removeRestaurant={removeRestaurant} editRestaurant={editRestaurant} />
    // </>
  );
}

export default RestaurantList