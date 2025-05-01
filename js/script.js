// script.js

function draw(arr, swap1, swap2) {
    const container = document.querySelector('.plot-container');
    const row = document.createElement('div');
    row.className = 'row';
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const div = document.createElement('div');
        div.classList.add('dot', 'dot-' + num);
        div.textContent = num;
        if ((swap1 === i) || (swap2 === i)) {
            div.classList.add('dot-swapped');
        }
        row.appendChild(div);
    }
    container.appendChild(row);
}

let arr = [4, 6, 8, 1, 7];
draw(arr);
bubbleSort(arr);

function bubbleSort(arr) {
    let n = arr.length - 1;

    for (let pass = 0; pass < n; pass++) {
        for (let j = 0; j < n - pass; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                draw(arr, j, j + 1);
            }
        }
    }
}