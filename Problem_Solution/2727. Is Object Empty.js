function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else {
    // For objects
    return Object.keys(obj).length === 0;
  }
}
