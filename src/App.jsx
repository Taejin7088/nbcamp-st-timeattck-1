import { useState } from "react";
import "./App.css";
import Table from "./components/Table.jsx";
import Form from "./components/Form.jsx";

function App() {
  const countryListInLocalstorage = JSON.parse(localStorage.getItem(0));
  const [countryList, setCountryList] = useState(countryListInLocalstorage);

  const sortContryList = (countryList) => {
    if (soltOtion === "gold") {
      countryList.sort((a, b) => {
        return b.goldCount - a.goldCount;
      });
    }
    if (soltOtion === "total") {
      countryList.sort((a, b) => {
        return (
          b.goldCount +
          b.silverCount +
          b.bronzeCount -
          (a.goldCount + a.silverCount + a.bronzeCount)
        );
      });
    }
  };

  const isTempCountryinCountryList = ({ countryName }) => {
    return countryList.some((country) => {
      return country.countryName === countryName;
    });
  };

  const addCountry = (tempCountry) => {
    if (isTempCountryinCountryList(tempCountry)) {
      alert("이미있는국가");
      return;
    }
    const tempCountryList = [...countryList, tempCountry];
    sortContryList(tempCountryList);
    setCountryList(tempCountryList);
    localStorage.setItem(0, JSON.stringify(tempCountryList));
  };

  const removeCountry = (targetCountryName) => {
    const tempCountryList = countryList.filter((country) => {
      return country.countryName !== targetCountryName;
    });
    sortContryList(tempCountryList);
    setCountryList(tempCountryList);
    localStorage.setItem(0, JSON.stringify(tempCountryList));
  };

  const updateCountry = (tempCountry) => {
    if (!isTempCountryinCountryList(tempCountry)) {
      alert("포함안된국가");
      return;
    }
    const tempCountryList = countryList.map((country) => {
      if (tempCountry.countryName === country.countryName) {
        return tempCountry;
      }
      return country;
    });
    sortContryList(tempCountryList);
    setCountryList(tempCountryList);
    localStorage.setItem(0, JSON.stringify(tempCountryList));
  };

  let soltOtion = "gold";
  return (
    <>
      <div>
        <label htmlFor="gold">금메달수</label>
        <input
          type="radio"
          name="sort"
          id="gold"
          onChange={() => {
            soltOtion = "gold";
            const tempCountryList = [...countryList];
            sortContryList(tempCountryList);
            setCountryList(tempCountryList);
          }}
        />
        <label htmlFor="total">총메달</label>
        <input
          type="radio"
          name="sort"
          id="total"
          onChange={() => {
            soltOtion = "total";
            const tempCountryList = [...countryList];
            sortContryList(tempCountryList);
            setCountryList(tempCountryList);
          }}
        />
      </div>
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
