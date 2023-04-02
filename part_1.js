function max(arr) {
    if (!arr || arr.length === 0) return NaN;

    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (current > max) {
            max = current;
        }
    }

    return max;
}

console.log(max([1, 2, 3, 4, 5])); // 5

function maxPair(arr) {
    if (!arr || arr.length === 0) return NaN;

    let max = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        let next;

        if (arr[i + 1] === undefined || arr[i + 1] === null) {
            next = 0;
        } else {
            next = arr[i + 1];
        }

        if (max.length === 0) {
            max = [current, next];
        } else {
            if (current + next > max[0] + max[1]) {
                max = [current, next];
            }
        }
    }

    return max;
}

console.log(maxPair([1, 2, 3, 4, 5])); // [4, 5]
console.log(maxPair([1, 2, 3, -4, 10])); // [10, 0]

function recordProgress(object, tuple) {
    if (!tuple || tuple.length === 0) return object;

    const age = object.age || 0;
    const weight = object.weight || 0;

    const ageChange = tuple[0];
    const weightChange = tuple[1];

    const result = {
        age: age + ageChange,
        weight: weight + weightChange,
    };

    return { ...object, ...result };
}

console.log(recordProgress({ name: 'Mike', age: 13, weight: 100 }, [1, 20])); // { name: 'Mike', age: 14, weight: 120 }
