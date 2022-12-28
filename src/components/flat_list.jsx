import React from 'react';
import Flat from './flat';

const Flatlist = (props)=> {
   const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
     <div className = 'Flatlist' >
      {renderList()}
     </div>
   );
}

export default Flatlist;
