function debounce(callback, wait) {
  let timerId;
  return function() {
    clearTimeout(timerId);
    timerId = setTimeout(callback, wait);
  };
}

let iterator = 0;

function callback() {
  iterator++;
  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(callback, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'
