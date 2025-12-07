const API_URL = "https://econnors-machine-divinity-proxy.hf.space";

let selectedOracle = null;

// Called by your oracle buttons in the HTML
function selectOracle(type) {
    selectedOracle = type;
    document.getElementById("status").textContent =
        `Selected: ${type.charAt(0).toUpperCase() + type.slice(1)} Oracle`;
}

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
document.getElementById("divine-btn").onclick = async () => {
    if (!selectedOracle) {
        alert("Please select an oracle first.");
        return;
    }

    const prompt = document.getElementById("user-prompt").value.trim();
    if (!prompt) {
        alert("Enter a prompt to ask the machine.");
        return;
    }

    document.getElementById("prophecy").textContent =
        "Consulting the oracle…";

    try {
        const prophecy = await callOracle(selectedOracle, prompt);
        document.getElementById("prophecy").textContent = prophecy;
    } catch (err) {
        document.getElementById("prophecy").textContent =
            "❌ Oracle failed to respond: " + err.message;
    }
};
