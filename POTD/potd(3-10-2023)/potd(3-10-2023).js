/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let goodPairs = 0;
    let index = 0;
    let n = 0;
    nums.sort(function (a, b) {
        return a - b;
    });

    nums.forEach((ele) => {
        if (index === 0) {
            index += 1;
            n += 1;
        } else if (ele === nums[index - 1]) {
            n += 1;
            index += 1;
        } else {
            goodPairs += ((n - 1) * n) / 2;
            console.log(goodPairs);
            index += 1;
            n = 1;
        }
    });
    goodPairs += ((n - 1) * n) / 2;
    return goodPairs;
};
