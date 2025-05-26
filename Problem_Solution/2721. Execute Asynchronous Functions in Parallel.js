/**
 * @param {Array<() => Promise>} functions
 * @return {Promise<Array>}
 */
function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    let hasRejected = false;
    
    functions.forEach((fn, index) => {
      fn()
        .then(value => {
          if (hasRejected) return; // Ignore if already rejected

          results[index] = value;
          resolvedCount++;

          if (resolvedCount === functions.length) {
            resolve(results);
          }
        })
        .catch(error => {
          if (hasRejected) return; // Reject only once
          hasRejected = true;
          reject(error);
        });
    });
  });
}
