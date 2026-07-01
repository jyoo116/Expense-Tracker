let expenses = [];

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;

    if (!name || !amount) {
        alert("Please fill all fields");
        return;
    }

    let expense = {
        id: Date.now(),
        name,
        amount: Number(amount),
        date,
        category
    };

    expenses.push(expense);
    render();
}

function render() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach(e => {
        total += e.amount;

        list.innerHTML += `
            <li>
                ${e.name} - ₹${e.amount}
                <button onclick="deleteExpense(${e.id})">X</button>
            </li>
        `;
    });

    document.getElementById("total").innerText = total;
}

function deleteExpense(id) {
    expenses = expenses.filter(e => e.id !== id);
    render();
}