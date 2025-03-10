function register(event) {
    event.preventDefault(); 
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (!username || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password 
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert("Successfully created!\nUsername: " + username);
    window.location.href = "./login.html";
}
function fetchSoilDetails() {
    const soilList = document.getElementById("soilList");
    soilList.innerHTML = "";

    db.collection("soilDetails").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const listItem = `<li>
                <strong>${data.soilType}</strong>: ${data.soilDetails}
            </li>`;
            soilList.innerHTML += listItem;
        });
    })
    .catch((error) => {
        console.error("Error fetching soil details: ", error);
        alert("Failed to fetch soil details.");
    });
}


function fetchDistributorDetails() {
    const distributorList = document.getElementById("distributorList");
    distributorList.innerHTML = ""; // Clear previous data

    db.collection("distributorDetails").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const listItem = `<li>
                <strong>${data.distributorName}</strong> - ${data.location}
            </li>`;
            distributorList.innerHTML += listItem;
        });
    })
    .catch((error) => {
        console.error("Error fetching distributor details: ", error);
        alert("Failed to fetch distributor details.");
    });
}


window.onload = function () {
    fetchSoilDetails();
    fetchDistributorDetails();
};


function sendMessage() {
    const chatBox = document.getElementById("chatBox");
    const chatInput = document.getElementById("chatInput");

    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    const userMsgElement = document.createElement("p");
    userMsgElement.textContent = `🧑‍💻 You: ${userMessage}`;
    chatBox.appendChild(userMsgElement);

    const aiResponse = document.createElement("p");
    aiResponse.textContent = `🤖 AI: ${generateAIResponse(userMessage)}`;
    chatBox.appendChild(aiResponse);

    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}


function generateAIResponse(message) {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("soil")) return "Soil types are categorized based on texture, structure, and nutrients.";
    if (lowerMsg.includes("weather")) return "You can check real-time weather details above.";
    
    return "I'm here to help! Ask me anything about soil, farming, or crops.";
}
