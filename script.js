let donors = JSON.parse(localStorage.getItem("donors")) || [];

// Add Donor
function addDonor() {
  let name = document.getElementById("name").value;
  let bloodGroup = document.getElementById("bloodGroup").value.toUpperCase();
  let city = document.getElementById("city").value;

  if (name === "" || bloodGroup === "" || city === "") {
    alert("Please fill all fields");
    return;
  }

  donors.push({ name, bloodGroup, city });
  localStorage.setItem("donors", JSON.stringify(donors));

  document.getElementById("registerMsg").innerText =
    "✅ Donor Registered Successfully! Thank you for saving lives ❤️";

  document.getElementById("name").value = "";
  document.getElementById("bloodGroup").value = "";
  document.getElementById("city").value = "";
}

// Search Donor
function searchDonor() {
  let searchBlood = document.getElementById("searchBlood").value.toUpperCase();
  let donorList = document.getElementById("donorList");
  donorList.innerHTML = "";

  let filteredDonors = donors.filter(
    donor => donor.bloodGroup === searchBlood
  );

  if (filteredDonors.length === 0) {
    donorList.innerHTML = "<li>No donors found</li>";
  } else {
    filteredDonors.forEach(donor => {
      let li = document.createElement("li");
      li.innerText = `${donor.name} | ${donor.city}`;
      donorList.appendChild(li);
    });
  }
}

// Emergency Request
function emergencyRequest() {
  let blood = document.getElementById("emergencyBlood").value.toUpperCase();
  document.getElementById("emergencyMsg").innerText =
    `🚨 Emergency Request Sent for ${blood} blood. Donors will be notified!`;
}
