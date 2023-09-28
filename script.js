function setupCustomSelect(inputId, optionsId) {
  const input = document.getElementById(inputId);
  const optionsList = document.getElementById(optionsId);

  input.addEventListener("click", function () {
    optionsList.style.display = "block";
  });

  optionsList.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
      const selectedValue = e.target.getAttribute("data-value");
      input.value = selectedValue;
      optionsList.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target != input) {
      optionsList.style.display = "none";
    }
  });
}

// Setup custom selects for all three input fields
setupCustomSelect("surahs", "surahs-options");
setupCustomSelect("verses-from", "verses-from-options");
setupCustomSelect("verses-to", "verses-to-options");
