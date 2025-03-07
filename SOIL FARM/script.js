function register(event) {
    event.preventDefault(); 
    const email = document.querySelector("[name='email']").value;
    const password = document.querySelector("[name='password']").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Successfully registered!");
            window.location.href = "login.html";
        })
        .catch(error => alert(error.message));
}


function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Successfully logged in!");
            window.location.href = "user.html";
        })
        .catch(error => alert(error.message));
}


function postSoilDetails() {
    const soilType = document.getElementById("soilType").value;
    const soilDetails = document.getElementById("soilDetails").value;

    if (!soilType || !soilDetails) {
        alert("Please fill in all fields!");
        return;
    }

    db.collection("soilDetails").add({
        soilType: soilType,
        soilDetails: soilDetails
    }).then(() => {
        alert("Soil Details Posted Successfully!");
        document.getElementById("soilType").value = "";
        document.getElementById("soilDetails").value = "";
    }).catch(error => alert(error.message));
}

document.addEventListener("DOMContentLoaded", () => {
    const distributorList = document.getElementById("distributorList");

    db.collection("distributorDetails").onSnapshot(snapshot => {
        distributorList.innerHTML = ""; 
        snapshot.forEach(doc => {
            let data = doc.data();
            distributorList.innerHTML += `<li><strong>${data.distributorName}</strong> - ${data.location}</li>`;
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const soilList = document.getElementById("soilList");
    const distributorList = document.getElementById("distributorList");

    db.collection("soilDetails").onSnapshot(snapshot => {
        soilList.innerHTML = "";
        snapshot.forEach(doc => {
            soilList.innerHTML += `<li>${doc.data().soilType}: ${doc.data().soilDetails}</li>`;
        });
    });

    db.collection("distributorDetails").onSnapshot(snapshot => {
        distributorList.innerHTML = "";
        snapshot.forEach(doc => {
            distributorList.innerHTML += `<li>${doc.data().distributorName} - ${doc.data().location}</li>`;
        });
    });
});



