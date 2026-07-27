const API_URL = "http://54.188.96.245:300080";

async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/employees`);
        const users = await response.json();

        const userList = document.getElementById("userList");
        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.department}`;
            userList.appendChild(li);
        });

    } catch (error) {
        console.error("Error loading users:", error);
    }
}

async function addUser() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    try {
        await fetch(`${API_URL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                department: "IT"
            })
        });

        nameInput.value = "";
        loadUsers();

    } catch (error) {
        console.error("Error adding user:", error);
    }
}

loadUsers();
