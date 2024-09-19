import Places from './Places.jsx';
import { useState, useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvaliablePlaces] = useState([]);

  useEffect(() => {
    const getPlaces = async () => {
      const resonce = await await fetch('http://localhost:3000/places');
      const data = await resonce.json()
      setAvaliablePlaces(data.places)
    }
    getPlaces()
  }, [])
  

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
