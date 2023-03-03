import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayValueInput = document.querySelector("[name='delay']");
const stepValueInput = document.querySelector("[name='step']");
const amountValueInput = document.querySelector("[name='amount']");
const submitBtn = document.querySelector('.form');

submitBtn.addEventListener('submit', handleInputValue);

function handleInputValue(e) {
  e.preventDefault();

  const amountValue = Number(amountValueInput.value);
  const stepValue = Number(stepValueInput.value);
  const delayValue = Number(delayValueInput.value);
  const positions = Array.from({ length: amountValue }, (_, i) => i + 1);

  console.log(positions);
  positions.forEach((position, i) => {
    const newDelay = stepValue * i + delayValue;

    createPromise(position, newDelay)
      .then(result => Notify.success(result))
      .catch(error => Notify.failure(error));
  });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}
