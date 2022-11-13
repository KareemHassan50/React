import React, { useContext, useState } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "../components/Results";
import usePetsSearch from "../hooks/usePetsSearch";
import ErrorBoundery from "../components/ErrorBoundery";
import AdoptedPetContext from "../contexts/AdoptedPetContext";

const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [adoptedPet] = useContext(AdoptedPetContext);
  const breedsQuery = useBreedList(searchParams.animal);
  let breeds = breedsQuery?.data?.data?.breeds ?? [];
  const petsQuery = usePetsSearch(searchParams);
  const pets = petsQuery?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formDate = new FormData(e.target);
          console.log(e.target);
          const animal = formDate.get("animal");
          const location = formDate.get("location");
          const breed = formDate.get("breed");
          setSearchParams({ animal, location, breed });
        }}
      >
        {adoptedPet && (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt="{adoptedPet.name}" />
          </div>
        )}
        <label htmlFor="location">
          location
          <input id="locaiton" placeholder="location" name="locaiton" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setSearchParams({
                ...searchParams,
                animal: e.target.value,
                breed: "",
              });
            }}
          >
            <option />
            {animals.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <ErrorBoundery>
        <Results pets={pets} />
      </ErrorBoundery>
    </div>
  );
};
export default SearchParams;
