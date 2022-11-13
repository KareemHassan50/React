import Pot from "./Pot";
import React from "react";
const Results = ({ pets }) => {
  // throw new Error("something Wrong");
  return (
    <div className="search">
      <h1>The Result</h1>
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pot
            key={pet.id}
            // {...pet}

            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city} ,${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
