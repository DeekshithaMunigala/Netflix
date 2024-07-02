import data from "../utils/countries";
import { useState } from "react";

const GetCountriesAndStates = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (e) => {
    setSelectedCountry(
      data.find((country) => country.country_id === e.target.value)
    );
  };

  const getStates = () => {
    if (!selectedCountry) return null;
    return (
      <select className="mx-4 w-44 rounded py-1 px-2 outline-0 border border-gray-100">
        <option>Select State</option>
        {selectedCountry.states.map((each) => (
          <option key={each.state_id} value={each.state_id}>
            {each.state_name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="text-black mx-4 rounded py-1 px-2 outline-0 border border-gray-100">
      <select className=" w-44" onChange={handleCountryChange}>
        <option>Select Country</option>
        {data.map((each) => (
          <option key={each.country_id} value={each.country_id}>
            {each.country_name}
          </option>
        ))}
      </select>
      {getStates()}
    </div>
  );
};

export default GetCountriesAndStates;
