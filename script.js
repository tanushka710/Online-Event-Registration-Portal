document.getElementById("eventForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let event = document.getElementById("event").value;
    let phone = document.getElementById("phone").value;

    if(name === "" || email === "" || phone === "" || event === "") {
        document.getElementById("message").innerHTML =
        "Please fill all required fields!";
        document.getElementById("message").className = "error";
    }
    else {
        document.getElementById("message").innerHTML =
"Registration Successful! 🎉";

document.getElementById("message").className = "success";
document.getElementById("eventForm").reset();

document.getElementById("userData").innerHTML =
`
<h3>Registered Details</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Event:</strong> ${event}</p>
`;

    }
});