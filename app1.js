'use strict';
function factorial(n) {
    let result = 1;
    for(let i = 0; i < n; i++) {
        result = result * i;
    }
    return result;
}

const assert = require('assert');
assert.equal(factorial(1), 0, `1の会場は1ですが実際は${factorial(1)}でした`);
console.log('テストを通過しました');