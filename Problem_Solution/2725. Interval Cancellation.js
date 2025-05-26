/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Call the function immediately
    fn(...args);

    // Set up a repeated interval
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return a function that can cancel the interval
    return function cancelFn() {
        clearInterval(intervalId);
    };
};
