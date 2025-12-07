import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@latest";

// Store oracles
let currentOracle = null;
let generators = {};

async function loadOracle(name, repo_id) {
  const generator = await pipeline(
    "text-generation",
    repo_id
  );
  generators[name] = generator;
  return generator;
}

// UI handling
const buttons = document.querySelectorAll(".oracle-btn");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generate-btn");
const inputEl = document.getElementById("user-input");

buttons.forEach(btn => {
  btn.addEventListener("click", async () => {
    const oracleName = btn.dataset.oracle;

    // Change active button style
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    output.textContent = "Loading oracle… (this may take ~10 seconds)";

    if (!generators[oracleName]) {
      if (oracleName === "revelatory") {
        currentOracle = await loadOracle("revelatory", "econnors/revelatory-oracle");
      } else if (oracleName === "conflictual") {
        currentOracle = await loadOracle("conflictual", "econnors/conflictual-oracle");
      } else if (oracleName === "resignationist") {
        currentOracle = await loadOracle("resignationist", "econnors/resignationist-oracle");
      }
    } else {
      currentOracle = generators[oracleName];
    }

    output.textContent = `Oracle loaded: ${oracleName}`;
  });
});

generateBtn.addEventListener("click", async () => {
  if (!currentOracle) {
    output.textContent = "Please select an oracle first.";
    return;
  }

  const userText = inputEl.value;
  if (!userText.trim()) {
    output.textContent = "Ask something first.";
    return;
  }

  output.textContent = "Consulting the oracle…";

  const result = await currentOracle(userText, {
    max_new_tokens: 80,
    do_sample: true,
    temperature: 0.9,
    top_p: 0.95
  });

  output.textContent = result[0].generated_text;
});