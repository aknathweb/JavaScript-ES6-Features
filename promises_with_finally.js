/* Promises with finally */
promise
    .then((result) => { "..." })
    .catch((error) => { "..." })
    .finally(() => { /* logic
independent of success/error */ })
/* The handler is called when the
promise is fulflled or rejected.*/