import React from "react";

class Location extends React.Component {
  render() {
    const {found} = this.props
    return (
      <div className="map">
        <img src={found.map} alt="mapa" />
        <p>{found.location}</p>
      </div>
    )
  }
}

export default Location;