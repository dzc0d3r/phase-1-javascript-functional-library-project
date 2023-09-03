// Implementation of myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            callback(collection[key]);
        }
    }
    return collection;
}

// Implementation of myMap function
function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
        result.push(callback(item));
    });
    return result;
}

function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < collection.length; i++) {
        if (Array.isArray(collection)) {
            accumulator = callback(accumulator, collection[i], collection);
        }

    }





    return accumulator;
}



// Implementation of myFind function
function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return collection[i];
        }
    }
    return undefined;
}

// Implementation of myFilter function
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

// Implementation of mySize function
function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
    return 0;
}

// Implementation of myFirst function
function myFirst(collection, n = 1) {
    if (n === 1) {
        return collection[0];
    }
    return collection.slice(0, n);
}

// Implementation of myLast function
function myLast(collection, n = 1) {
    if (n === 1) {
        return collection[collection.length - 1];
    }
    return collection.slice(-n);
}

// Implementation of myKeys function
function myKeys(obj) {
    return Object.keys(obj);
}

// Implementation of myValues function
function myValues(obj) {
    return Object.values(obj);
}

