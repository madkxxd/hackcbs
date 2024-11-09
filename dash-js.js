// Sample financial data for demonstration
const financialData = {
    labels: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [{
        label: 'Stock Prices',
        data: [
            65, 70, 75, 81, 78, 90, 85, 
            92, 95, 100, 98, 105
        ],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true
    }]
};

// Sample investment trends data
const trendData = {
    labels: ['Tech Stocks', 'Real Estate', 'Cryptocurrency', 'Bonds', 'Commodities', 'Healthcare', 'Energy'],
    datasets: [{
        label: 'Investment Distribution',
        data: [25, 20, 15, 10, 10, 10, 10],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

// Initialize Stock Prices Chart
const ctxStock = document.getElementById('stockChart').getContext('2d');
const stockChart = new Chart(ctxStock, {
    type: 'line',
    data: financialData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Price ($)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            }
        }
    }
});

// Initialize Investment Distribution Chart
const ctxTrend = document.getElementById('trendChart').getContext('2d');
const trendChart = new Chart(ctxTrend, {
    type: 'doughnut',
    data: trendData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Investment Distribution'
            }
        }
    }
});

// Sample financial metrics
document.getElementById('portfolio-value').textContent = '$10,000';
document.getElementById('monthly-return').textContent = '+5.2%';
document.getElementById('yearly-return').textContent = '+15.8%';

// Auth0 Login (Placeholder)
document.getElementById('login-btn').addEventListener('click', () => {
    alert('This would trigger Auth0 login');
});