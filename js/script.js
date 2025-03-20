
// script.js

function checkVehicle(quantity, weight) {
    if (quantity === 2 && weight < 100) {
        return 'Парковка разрешена';
    }
    return 'Вам здесь не место! Мяу!';
}

checkVehicle(2, 90);