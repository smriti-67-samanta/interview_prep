function fetchData(callback) {
    console.log("hello world")
  setTimeout(() => {
    console.log('hello John');
    callback();
  }, 1000);
}

fetchData(() => console.log('all done'));