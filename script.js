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

const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/api", async (req, res) => {
  try {
    const response = await fetch("https://api.quran.com/api/v4/resources/chapter_reciters");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
