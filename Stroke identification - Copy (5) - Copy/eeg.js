// Function to generate stroke-like EEG data
function generateStrokeEEGData(length) {
    const data = [];
    const baseValue = 50; // Baseline value
    const amplitude = 30; // Amplitude of the wave
    const frequency = 0.1; // Frequency of the wave
    const abnormalFactor = 0.5; // Factor to introduce abnormalities

    for (let i = 0; i < length; i++) {
        const noise = Math.random() * 10; // Add random noise
        let value = baseValue + amplitude * Math.sin(frequency * i) + noise;

        // Introduce stroke-related abnormalities
        if (i > length / 4 && i < (3 * length) / 4) {
            // Simulate slower and irregular waves
            value += abnormalFactor * amplitude * Math.cos(0.2 * frequency * i);
        }

        data.push(value);
    }

    return data;
}

// Function to create EEG waveform chart using Chart.js
function createEEGChart() {
    const ctx = document.getElementById('eegChart').getContext('2d');

    // Generate stroke-like EEG data (e.g., 1000 samples)
    const dataLength = 1000;
    const strokeEEGData = generateStrokeEEGData(dataLength);

    // Create a new Chart object
    const eegChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: dataLength }, (_, i) => i.toString()),
            datasets: [{
                label: 'Stroke-Like EEG Waveform',
                data: strokeEEGData,
                borderColor: 'red',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

// Call the function to create stroke-like EEG chart on page load
document.addEventListener('DOMContentLoaded', createEEGChart);