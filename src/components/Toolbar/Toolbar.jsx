import { useState } from "react";
import "./toolbar.css";
import PortfolioF from "../Portfolio/Portfolio";


function Toolbar(props) {
  const { filters, onSelectFilter, selected } = props;
  
  
  return (
    <li className="toolbar">
      <div className="toolbar_items">
        {filters.map((item) => (

          <span
            key={item}
            className={selected === item ? 'selected' : 'filter_item'}
            onClick={() => {
              onSelectFilter(item);
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </li>
  );
}

export default Toolbar;
