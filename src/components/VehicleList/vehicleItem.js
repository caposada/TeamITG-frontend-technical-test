import React, { useState } from 'react';
import './style.scss';

export default function VehicleItem({ vehicle }) {
  const [showExtras, setShowExtras] = useState(true);

  const toggle = () => setShowExtras(!showExtras);

  const emission = () => {
    const { value } = vehicle.meta.emissions;
    return vehicle.meta.emissions.template.replace('$value', value);
  };

  return (
    <div className="VehicleItem">
      <img className="VehicleItem__Image smallScreen--hidden" src={vehicle.media[0].url} alt={vehicle.media[0].name} />
      <img className="VehicleItem__Image largeScreen--hidden" src={vehicle.media[1].url} alt={vehicle.media[1].name} />
      <div className="VehicleItem__Blurb">
        <div className="VehicleItem__Blurb-NameConatainer">
          <span className="VehicleItem__Blurb-Name">{vehicle.id.toUpperCase()}</span>
        </div>
        <div className="VehicleItem__Blurb-Price">
          From
          {' '}
          {vehicle.price}
        </div>
        <div className="VehicleItem__Blurb-Description">
          {vehicle.description}
        </div>
      </div>
      <div hidden={showExtras} className="VehicleItem__Blurb-Extras">
        <div>
          Year:
          {' '}
          {vehicle.modelYear}
        </div>
        <div>
          Passengers:
          {' '}
          {vehicle.meta.passengers}
        </div>
        <div>
          Drive Train:
          {' '}
          {vehicle.meta.drivetrain.map((item) => {
            return (
              <span
                key="item"
              >
                {item}
                {' '}
              </span>
            );
          })}
        </div>
        <div>
          Body Styles:
          {' '}
          {vehicle.meta.bodystyles.map((item) => {
            return (
              <span
                key="item"
              >
                {item}
                {' '}
              </span>
            );
          })}
        </div>
        <div>
          Emissions:
          {' '}
          {emission()}
        </div>
      </div>
      <button className="VehicleItem__Blurb-ExtrasButton" type="button" onClick={toggle}>
        i
      </button>
    </div>
  );
}
