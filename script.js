const API_URL = "https://econnors-machine-divinity-proxy.hf.space";

let selectedOracle = null;

// Hook up all oracle buttons
document.querySelectorAll(".oracle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedOracle = btn.dataset.type;
    console.log("Selected oracle:", selectedOracle);

    document.querySelectorAll(".oracle-btn").forEach(b => 
        b.classList.remove("active")
    );
    btn.classList.add("active");
  });
});

// Call backend oracle
async function callOracle(endpoint, prompt) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: prompt }),
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.prophecy;
}

// Generate text
document.getElementById("generate-btn").addEventListener("click", async () => {
    if (!selectedOracle) {
        alert("Please select an oracle first.");
        return;
    }

    const prompt = document.getElementById("user-input").value.trim();
    if (!prompt) {
        alert("Enter a prompt to ask the machine.");
        return;
    }

    document.getElementById("output").textContent = "Consulting the oracle…";

    try {
        const prophecy = await callOracle(selectedOracle, prompt);
        document.getElementById("output").textContent = prophecy;
    } catch (err) {
        document.getElementById("output").textContent =
            "❌ Oracle failed to respond: " + err.message;
    }
});
