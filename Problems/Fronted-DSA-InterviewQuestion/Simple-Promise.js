function simplePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved!");
    }, 1000);
  });
}

simplePromise().then(console.log); // Output after 1 second: 'Resolved!'


