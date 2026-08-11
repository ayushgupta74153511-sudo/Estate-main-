import React from 'react'
import properties from "../../data/propertiesData";
import PropertyCard from "../property/PropertyCard";

function FeaturedPropery() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 p-10">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>

    </div>
  )
}

export default FeaturedPropery
