const API_URL = "https://econnors-machine-divinity-proxy.hf.space";

let selectedOracle = null;

// Expose function for HTML onclick
window.selectOracle = function(type) {
    selectedOracle = type;
    console.log("Selected oracle:", type);
};

// Generic function to call your FastAPI backend
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

// Main divination function
document.getElementById("generate-btn").onclick = async () => {
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
};
