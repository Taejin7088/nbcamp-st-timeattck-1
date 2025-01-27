import { useState } from "react";
function Table({ countryList, removeCountry }) {
  const handleRemoveBtn = (targetCountryName) => {
    console.log(targetCountryName);
    removeCountry(targetCountryName);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>도시이름</td>
            <td>금메달 수</td>
            <td>은메달 수</td>
            <td>동메달 수</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {countryList.map((country) => {
            return (
              <tr key={country.countryName}>
                <td>{country.countryName}</td>
                <td>{country.goldCount}</td>
                <td>{country.silverCount}</td>
                <td>{country.bronzeCount}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemoveBtn(country.countryName);
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div></div>
      <div></div>
    </>
  );
}

export default Table;
