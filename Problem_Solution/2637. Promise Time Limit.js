/**
 * @param {Function} fn - the original async function
 * @param {number} t - time limit in milliseconds
 * @return {Function} - a time-limited version of fn
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // Timer to reject if time exceeds
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Try to run fn and clear timer if successful
            fn(...args)
                .then((res) => {
                    clearTimeout(timer);
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timer);
                    reject(err);
                });
        });
    };
};
