document.addEventListener('DOMContentLoaded', function() {
    const roleSelect = document.getElementById('role');
    const emptySelect = document.getElementById('empty');

    roleSelect.addEventListener('change', function() {
        const selectedRole = roleSelect.value;

        emptySelect.innerHTML = ''; // Reset empty dropdown
        const optionElement = document.createElement('option');
        optionElement.value = selectedRole;
        optionElement.textContent = selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1);
        emptySelect.appendChild(optionElement)

        emptySelect.value = selectedRole
    });
});