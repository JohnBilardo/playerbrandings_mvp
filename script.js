document.getElementById('connectWallet').addEventListener('click', () => {
    alert('Wallet connected successfully (mock).');
});

// Mock talent data
const talents = [
    { name: "John Doe", position: "Forward", rating: 4.5 },
    { name: "Jane Smith", position: "Midfielder", rating: 4.2 },
    { name: "Sam Brown", position: "Defender", rating: 4.0 },
];

// Inject mock data into the table
const tableBody = document.getElementById('talentTable');
talents.forEach(talent => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${talent.name}</td>
        <td>${talent.position}</td>
        <td>${talent.rating}</td>
    `;
    tableBody.appendChild(row);
});
