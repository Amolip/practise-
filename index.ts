
const input = document.getElementById('input');

let text;
input.addEventListener('input', (e) => {
  text = e.currentTarget.value;
  betterFunction();
});

let counter = 0;
const getData = () => {
  console.log('data' + counter++);
  console.log(text);
};

const debounce = (cb, delay = 1000) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 500);
