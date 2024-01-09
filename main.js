import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<h1>Filter Data by Gender</h1>

<div id="filterOptions">
  <label>
    <input type="radio" name="gender" value="male" checked> Male
  </label>
  <label>
    <input type="radio" name="gender" value="female"> Female
  </label>
</div>

<div id="filteredData">
  <!-- Display filtered data here -->
</div>
`;

setupCounter(document.querySelector("#counter"));
