// * Go to Score Settings
function goToScoreSettings() {
  location.href = "score_settings.html";
}

// * Go to Home Screen
function goToHome() {
  location.href = "home.html";
}

// * Go to Home after Splash
function goToHomeFromSplash() {
  setTimeout(function () {
    location.href = "home.html";
  }, 1000);
}

// * Go to Facilities
function goToFacilities() {
  location.href = "facilities.html";
}

// * Go to Districts
function goToDistricts() {
  location.href = "districts.html";
}

// * Go to EstablishmentType
function goToEstablishmentType() {
  location.href = "establishment_types.html";
}

// * Go to Users
function goToUsers() {
  location.href = "users.html";
}


// * Go to Users
function goToLogin() {
  location.href = "login.html";
}

// THis toggles to show or hide the password
function togglePassword() {
    const passwordField = document.getElementById("password");
    //if its password change it to text and vice versa
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

