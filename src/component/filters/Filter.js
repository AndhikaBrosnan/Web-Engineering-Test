import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { fetchFilterData, fetchData } from "../../redux/actions/table";
import "./styles.css";

const genderOptions = [
  { key: "Male", text: "Male", value: "male" },
  { key: "Female", text: "Female", value: "female" },
];

const Filter = () => {
  const dispatch = useDispatch();

  const [dropdownValue, setDropdownValue] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const filterOnChange = (event, data) => {
    setDropdownValue(data.value);
  };

  useEffect(() => {
    fetchFilterData(dispatch, dropdownValue, searchValue); // eslint-disable-next-line
  }, [dropdownValue]);

  useEffect(() => {
    fetchFilterData(dispatch, dropdownValue, searchValue); // eslint-disable-next-line
  }, [searchValue]);

  const handleResetFilter = () => {
    fetchData(dispatch);
    setDropdownValue(null);
    setSearchValue("");
  };

  return (
    <div>
      <div className={`ui search filter-form`}>
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <i className="search icon"></i>
        </div>

        <Dropdown
          className="filter-dropdown"
          placeholder="Gender..."
          search
          selection
          options={genderOptions}
          value={dropdownValue}
          onChange={filterOnChange}
        />

        <button
          onClick={handleResetFilter}
          className="ui secondary basic button"
          style={{ marginLeft: "10px" }}
        >
          Reset Filter
        </button>

        <div className="results"></div>
      </div>
    </div>
  );
};

export default Filter;
