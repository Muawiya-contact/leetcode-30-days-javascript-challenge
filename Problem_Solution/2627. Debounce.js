/**
 * @param {Function} fn - function to debounce
 * @param {number} t - debounce time in milliseconds
 * @return {Function} - debounced function
 */
var debounce = function(fn, t) {
    let timer = null;
    
    return function(...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

