import React, { useState } from "react";
import "./ComboBox.css";

const ComboBox = ({ options, setFilteredProducts, products }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // onSelect(option);
    const sortedProducts = [...products].sort((a, b) =>
      selectedOption?.value === "lth" ? b.price - a.price : a.price - b.price
    );
    setFilteredProducts(sortedProducts);
    console.log(sortedProducts);
  };
  // console.log(selectedOption);
  return (
    <div className={`combo-box ${isOpen ? "open" : ""}`}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : "Sort"}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
