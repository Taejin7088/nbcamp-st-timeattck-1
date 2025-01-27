import { useState } from "react";
import "./App.css";
import Table from "./components/Table.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [countryList, setCountryList] = useState([
    { countryName: "한국", goldCount: 10, silverCount: 10, bronzeCount: 10 },
    { countryName: "중국", goldCount: 10, silverCount: 10, bronzeCount: 10 },
  ]);

  const addCountry = (tempCountry) => {
    setCountryList([...countryList, tempCountry]);
  };

  const removeCountry = (targetCountryName) => {
    const tempCountryList = countryList.filter((country) => {
      return country.countryName !== targetCountryName;
    });
    setCountryList(tempCountryList);
  };

  const updateCountry = (tempCountry) => {
    const tempCountryList = countryList.map((country) => {
      if (tempCountry.countryName === country.countryName) {
        return tempCountry;
      }
      return country;
    });
    setCountryList(tempCountryList);
  };

  return (
    <>
      <div>
        <Form addCountry={addCountry} updateCountry={updateCountry} />
      </div>
      <div>
        <Table countryList={countryList} removeCountry={removeCountry} />
      </div>
    </>
  );
}

export default App;
