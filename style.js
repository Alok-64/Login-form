form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Empty field validation
    if (email === "" || password === "") {
        alert("Error: All fields are required!");
        return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Error: Please enter a valid email address!");
        return;
    }

    // Password length validation
    if (password.length < 4) {
        alert("Error: Password must be at least 4 characters long!");
        return;
    }

    // Success message
    alert(
        "Login Successful!\n\n" +
        "Email: " + email + "\n" +
        "Password Length: " + password.length
    );
});