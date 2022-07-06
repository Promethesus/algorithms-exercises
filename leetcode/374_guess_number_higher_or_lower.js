
function guess(n) {

}


const pick = (picked) => (n) => {
    return picked === n ? 0 : picked < n ? -1 : 1;
}

const testCase = (input, _pick) => {
    const guess = pick(_pick);
    const result = guessNumber(input, guess);
    console.assert(result === _pick, `guessNumber(${input}) did not find ${_pick}. returned ${result}.`);
}

function guessNumber(n, guess) {
    let left = 0;
    let right = n;
    if (guess(n) === 0) {
        return n;
    }else while (left <= right) {
        // let mid = Math.floor((left + right) / 2);
        let mid = ((left + right) / 2) << 0;
        const match = guess(mid);
        if (match === 0) {
            return mid;
        }
        else if (match === -1) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
}

testCase(10, 6);
testCase(100, 14);
testCase(5, 5);
testCase(25, 24);
testCase(10, 1);