function transpose(original) {
    var copy = [];
    for (var i = 0; i < original.length; ++i) {
        for (var j = 0; j < original[i].length; ++j) {
            // skip undefined values to preserve sparse array
            if (original[i][j] === undefined) continue;
            // create row if it doesn't exist yet
            if (copy[j] === undefined) copy[j] = [];
            // swap the x and y coords for the copy
            copy[j][i] = original[i][j];
        }
    }
    return copy;
}

console.log(transpose([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));