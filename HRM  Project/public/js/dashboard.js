// function showContainer(containerId) {
//     var containers = document.querySelectorAll('.register-container, .login-container');
//     containers.forEach(container => {
//         container.classList.remove('active');
//     });
//     document.getElementById(containerId).classList.add('active');
// }

// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     var password = document.getElementsByName('psw')[0].value;
//     var confirmPassword = document.getElementsByName('psw-confirm')[0].value;
//     if (password !== confirmPassword) {
//         event.preventDefault();
//         document.getElementById('register-error-message').style.display = 'block';
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const roleSelect = document.getElementById('login-role');
//     const emptySelect = document.getElementById('empty-select');

//     roleSelect.addEventListener('change', function() {
//         const selectedRole = roleSelect.value;

//         emptySelect.innerHTML = '';
//         const optionElement = document.createElement('option');
//         optionElement.value = selectedRole;
//         optionElement.textContent = selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1);
//         emptySelect.appendChild(optionElement);

//         emptySelect.value = selectedRole;
//     });
// });


const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPasswordField = document.getElementById("cpasword");
const role = document.getElementById('register-role');
const passwordError = document.getElementById("register-error-message");

console.log(name, email, password, confirmPasswordField, role, '======================================================')

function signup(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.psw - confirm.value;
    const role = form.elements.role.value;

    if (password.length <= 6) {
        document.body.innerHTML += '<div style="color: red;">Password length must be greater than 6</div>';
    } else if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match';
    } else {
        const userData = {
            Name: name,
            Email: email,
            Password: password,
            Role: role
        }
        addUser(userData);
    }
}

async function addUser(userData) {
    try {
        console.log("=========================================================")
        let response = await axios.post("/add-user/signup", userData);
        if (response.status === 200) {
            alert("User Successfully Created!");
            window.location.href = "/signup";
        }



        name.value = '';
        email.value = '';
        role.value = '';
        password.value = '';

        console.log(response.data);
    } catch (err) {
        console.log(err);
        alert("Bad Parameters, or Email already Exists");
    }
}