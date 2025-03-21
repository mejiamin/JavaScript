
// script.js

function calculatePressure(density, depth) {
    return Math.round(density * 9.8 * depth);
}

calculatePressure(1000, 5);