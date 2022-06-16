import React from 'react';
import useData from './useData';
import './style.scss';
import VehicleItem from './vehicleItem';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div data-testid="results">
      <div className="VehicleList">
        {
          vehicles.map((vehicle) => {
            return (
              <VehicleItem
                key={vehicle.id}
                vehicle={vehicle}
              />
            );
          })
        }
      </div>
    </div>
  );
}
