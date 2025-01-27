import { useState } from "react";
function Form({ addCountry, updateCountry }) {
  const [countryName, setCountryName] = useState("");
  const [goldCount, setGoldCount] = useState(0);
  const [silverCount, setSilverCount] = useState(0);
  const [bronzeCount, setBronzeCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempCountry = { countryName, goldCount, silverCount, bronzeCount };
    addCountry(tempCountry);
  };
  const handleUpdateBtn = () => {
    const tempCountry = { countryName, goldCount, silverCount, bronzeCount };
    updateCountry(tempCountry);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="countryName"></label>
        <input
          type="text"
          id="countryName"
          value={countryName}
          onChange={(e) => {
            setCountryName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="goldCount"></label>
        <input
          type="text"
          id="goldCount"
          value={goldCount}
          onChange={(e) => {
            if (Number.isNaN(+e.target.value) || +e.target.value < 0) return;
            setGoldCount(+e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="silverCount"></label>
        <input
          type="text"
          id="silverCount"
          value={silverCount}
          onChange={(e) => {
            if (Number.isNaN(+e.target.value) || +e.target.value < 0) return;
            setSilverCount(+e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="bronzeCount"></label>
        <input
          type="text"
          id="bronzeCount"
          value={bronzeCount}
          onChange={(e) => {
            if (Number.isNaN(+e.target.value) || +e.target.value < 0) return;
            setBronzeCount(+e.target.value);
          }}
        />
      </div>
      <button>국가추가</button>
      <button type="button" onClick={handleUpdateBtn}>
        업데이트
      </button>
    </form>
  );
}

export default Form;
