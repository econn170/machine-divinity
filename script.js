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

document.getElementById("generate-btn").addEventListener("click", async () => {
    if (!selectedOracle) {
        alert("please select an oracle first.");
        return;
    }

    const prompt = document.getElementById("user-input").value.trim();
    if (!prompt) {
        alert("enter a prompt to ask the machine.");
        return;
    }

    document.getElementById("output").textContent = "consulting the oracle…";

    try {
        const prophecy = await callOracle(selectedOracle, prompt);
        document.getElementById("output").textContent = prophecy;
    } catch (err) {
        document.getElementById("output").textContent =
            "❌ oracle failed to respond: " + err.message;
    }
});

const ethicsBtn = document.getElementById("ethics-btn");
const ethicsModal = document.getElementById("ethics-modal");
const closeModal = document.getElementById("close-modal");


ethicsBtn.addEventListener("click", () => {
  ethicsModal.style.display = "block";
});


closeModal.addEventListener("click", () => {
  ethicsModal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === ethicsModal) {
    ethicsModal.style.display = "none";
  }
});
