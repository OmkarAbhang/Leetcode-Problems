function majorityElement(nums: number[]): number[] {
    let countMap = new Map();
    let ans = [];
    let upperBound = Math.floor(nums.length / 3);
    for (let num of nums) {
        if (countMap.has(String(num))) {
            let a = countMap.get(String(num));
            countMap.set(String(num), String(countMap.get(Number(String(num))) + 1));
        } else {
            countMap[String(num)] = 1;
        }
    }
    for (let [key, value] of countMap) {
        if (countMap[key] > upperBound) {
            ans.push(Number(key));
        }
    }
    return ans;
}
