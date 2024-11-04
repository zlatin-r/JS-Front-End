function solve(arr) {
    const targetThickness = arr[0];
    let chunks = arr.slice(1);
    let currChunkThickness = 0;

    function cut(value) {
        return value /= 4;
    }

    function lap(value) {
        return value *= 0.80;
    }

    function grind(value) {
        return value -= 20;
    }

    function etch(value) {
        return value -= 2;
    }

    function xray(value) {
        return value += 1;
    }

    function transportAndWashing(value) {
        return value = Math.floor(value)
    }
}