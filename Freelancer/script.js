const freelancers = [
    { name: "John Doe", skills: "JavaScript, React, Node.js", experience: "3 years" },
    { name: "Jane Smith", skills: "Python, Django, Machine Learning", experience: "5 years" },
    { name: "Mark Lee", skills: "HTML, CSS, JavaScript", experience: "2 years" },
    { name: "Sarah Johnson", skills: "PHP, Laravel, SQL", experience: "4 years" },
  ];

//*****************************************************************

const login_btn = document.querySelector('#login-btn')

login_btn.addEventListener("click", () => {

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Simulating a simple login function
    alert(`Logged in with Email: ${email}`);
})


//*****************************************************************

// function login() {
//    const email = document.getElementById("login-email").value;
//    const password = document.getElementById("login-password").value;

//     Simulating a simple login function
//    alert(`Logged in with Email: ${email}`);
//  }

const signup_btn = document.querySelector("#signup-btn")

signup_btn.addEventListener("click", () => {
    const name = document.querySelector("#signup-name").value
    const email = document.querySelector('#signup-email').value
    const password = document.querySelector("#signup-password").value

    alert(`Signed up with Name: ${name}, Email: ${email}`);
})




// function signUp() {
//     const name = document.getElementById("signup-name").value;
//     const email = document.getElementById("signup-email").value;
//     const password = document.getElementById("signup-password").value;

//     // Simulating user signup
//     alert(`Signed up with Name: ${name}, Email: ${email}`);
//   }

function searchFreelancers() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredFreelancers = freelancers.filter(freelancer => freelancer.skills.toLowerCase().includes(searchTerm));

    const freelancerListDiv = document.getElementById("freelancer-list");
    freelancerListDiv.innerHTML = ""; // Clear the list before displaying new results

    filteredFreelancers.forEach(freelancer => {
      const freelancerCard = document.createElement("div");
      freelancerCard.classList.add("freelancer-card");

      freelancerCard.innerHTML = `
        <h3>${freelancer.name}</h3>
        <p><strong>Skills:</strong> ${freelancer.skills}</p>
        <p><strong>Experience:</strong> ${freelancer.experience}</p>
        <button>Hire</button>
      `;
      
      freelancerListDiv.appendChild(freelancerCard);
    });
  }