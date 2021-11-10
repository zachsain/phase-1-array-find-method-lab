function superbowlWin(arrayOfObjects) {
    for (let index of arrayOfObjects) {
        if (index.result === "W") {
            return index.year;
        }
    }
}


// const result = record.find(superbowlWin)

// function superbowlWin(index) {
//     if (index.result === "W") {
//         return index.year
//     }
// }