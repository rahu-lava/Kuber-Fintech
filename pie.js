// Your Chart.js code
document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myDonutChart').getContext('2d');

    // Donut chart data with added separation, border, and curved corners
    var donutData = {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [{
            data: [35, 18, 12],
            backgroundColor: [
                'rgba(13, 0, 52, 1)',
                'rgba(102, 73, 191, 1)',
                'rgba(180, 162, 234, 1)'
            ],
            borderColor: [
            'rgba(13, 0, 52, 1)',
                'rgba(102, 73, 191, 1)',
                'rgba(180, 162, 234, 1)'
            ],
            // borderWidth: 0, // Adjust the border width
            // borderRadius: 5 // Adjust the border radius for curved corners
        }]
    };

    // Create donut chart with added separation, border, and curved corners
    var myDonutChart = new Chart(ctx, {
        type: 'doughnut',
        data: donutData,
        options: {
            responsive: false,
            cutout: '70%', // Adjust the cutout to add separation
            // spacing:10,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
        
    });
    
});