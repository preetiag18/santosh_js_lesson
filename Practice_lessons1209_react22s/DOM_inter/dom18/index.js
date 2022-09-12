const getSelectedCountry = () => {
const countriesName = document.querySelector("#countries-dropdown").value;
return countriesName;
}

// Sample usage - do not modify
const dropdown = document.querySelector("#countries-dropdown");
dropdown.addEventListener("change", () => {
    console.log(getSelectedCountry());
});
