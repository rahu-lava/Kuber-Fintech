  // Your Chart.js code
  document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myLineChart').getContext('2d');

    // Initial data for 1-week view
    var weekData = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: '1-Week Data',
            data: [25, 30, 15, 20, 25, 30, 15], // Adjusted y-axis values
            backgroundColor: '#b4a2ea',
            borderColor: '#b4a2ea',
            borderWidth: 2,
            fill: false,
            cubicInterpolationMode: 'monotone', // Set to 'monotone' for a smooth line
            pointRadius: 0, // Set pointRadius to 0 to remove data points
            borderRadius: 10 // Adjust the border radius for curved corners
        }]
    };

    // 1-month and 1-year data (example)
    var monthData = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30', 'Day 31'],
        datasets: [{
            label: '1-Month Data',
            data: [25, 30, 15, 20, 25, 30, 15, 20, 25, 30, 15, 20, 25, 30, 15, 20, 25, 30, 15, 20, 25, 30, 15, 20, 25, 30, 15, 20, 25, 30, 15, 20],
            backgroundColor: '#5523f1',
            borderColor: '#5523f1',
            borderWidth: 2,
            fill: false,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0,
            borderRadius: 10
        }]
    };

    var yearData = {
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'],
        datasets: [{
            label: '1-Year Data',
            data: [25, 30, 15, 20, 25, 30, 15, 20, 25, 30, 15, 20], // Adjusted y-axis values

            backgroundColor: '#5b4895',
            borderColor: '#5b4895',
            borderWidth: 2,
            fill: false,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0,
            borderRadius: 10
        }]
    };

    // Default data
    var currentData = weekData;

    // Create initial chart
    var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: currentData,
        options: {
            plugins: {
                legend: {
                    display: false // Do not display the legend
                },
                tooltip: {
                    mode: 'index', // Show data for all datasets at the hovered index
                    intersect: false, // Do not intersect with the point
                    enabled: false // Disable tooltips
                }
            },
            scales: {
                x: {
                    title: {
                        display: false,
                        text: 'Time'
                    },
                    grid: {
                        display: false // Do not display the vertical grid lines
                    },
                    ticks: {
                        display: false // Do not display the days in x-axis
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: false,
                        text: 'Value'
                    },
                    grid: {
                        drawOnChartArea: false // Do not draw horizontal grid lines
                    },
                    ticks: {
                        display: false // Do not display y-axis ticks
                    }
                }
            },
        }
    });

    // Switch data on button click
    document.getElementById('btn1Week').addEventListener('click', function () {
        updateChartData(weekData);
    });

    document.getElementById('btn1Month').addEventListener('click', function () {
        updateChartData(monthData);
    });

    document.getElementById('btn1Year').addEventListener('click', function () {
        updateChartData(yearData);
    });

    // Function to update chart data
    function updateChartData(newData) {
        currentData = newData;
        myLineChart.data = newData;
        myLineChart.options.scales.y.max = Math.max(...newData.datasets[0].data) + 10; // Adjust the maximum y-axis value dynamically
        myLineChart.update();
    }

    // Display chart for 1 week on page load
    updateChartData(weekData);
});




function toggleClass(clickedButtonId) {
  // Get all buttons with the common class
  var buttons = document.getElementsByClassName("commonButton");

  // Remove the highlightColor class from all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("highlightColor");
  }

  // Add the highlightColor class to the clicked button
  var clickedButton = document.getElementById(clickedButtonId);
  clickedButton.classList.add("highlightColor");
}