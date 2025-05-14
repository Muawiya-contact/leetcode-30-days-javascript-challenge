/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map(); // Cache to store the results of previous function calls
    let callCount = 0; // Variable to keep track of how many times the original function is called

    return function(...args) {
        const key = JSON.stringify(args); // Create a unique key based on the function arguments
        
        // Check if the result for these arguments is already cached
        if (cache.has(key)) {
            return cache.get(key); // Return cached result if available
        }
        
        // If result is not cached, increment the call count and compute the result
        callCount++;
        const result = fn(...args); // Call the original function
        cache.set(key, result); // Store the result in the cache
        
        return result;
    };
}

/** 
 * Example usage:
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *    callCount += 1;
 *    return a + b;
 * });
 * 
 * console.log(memoizedFn(2, 3)); // 5
 * console.log(memoizedFn(2, 3)); // 5 (cached)
 * console.log(callCount); // 1 (only called once)
 */
