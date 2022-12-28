import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

const App = (props) => {

  const [selectedFlat.setSelectedFlat] = useState(0);
  const [flats,setFlat] = useState("");

  const center = () => {
   return {
     lat: state.selectedFlat.lat,
     lng: state.selectedFlat.lng
   };
  }

  const selectFlat = (index) => {
    setState({ selectedFlat: flats[index] })
  }

  return (
    <div>
        <FlatList
          flats={state.flats}
          selectedFlat={state.selectedFlat}
          selectFlat={selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={center()} defaultZoom={12}>
            <Marker lat={state.selectedFlat.lat} lng={state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>

  )

}

export default App;
