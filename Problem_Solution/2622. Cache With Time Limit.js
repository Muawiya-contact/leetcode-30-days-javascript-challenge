class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // key -> { value, expireTime }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration in milliseconds
     * @return {boolean} true if unexpired key already existed
     */
    set(key, value, duration) {
        const currentTime = Date.now();
        const alreadyExists = this.cache.has(key) && this.cache.get(key).expire > currentTime;

        this.cache.set(key, {
            value: value,
            expire: currentTime + duration
        });

        return alreadyExists;
    }

    /**
     * @param {number} key
     * @return {number} value associated with key or -1 if expired
     */
    get(key) {
        const currentTime = Date.now();
        const item = this.cache.get(key);

        if (!item || item.expire <= currentTime) {
            return -1;
        }

        return item.value;
    }

    /**
     * @return {number} count of non-expired keys
     */
    count() {
        const currentTime = Date.now();
        let cnt = 0;

        for (const [key, item] of this.cache.entries()) {
            if (item.expire > currentTime) {
                cnt++;
            }
        }

        return cnt;
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 100); // false if new or expired, true if still valid
 * obj.get(1); // returns value or -1
 * obj.count(); // count of valid (not expired) keys
 */
