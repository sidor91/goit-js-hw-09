import Notiflix from 'notiflix';


const delayField = document.querySelector('input[name="delay"]');
const stepField = document.querySelector('input[name="step"]');
const amountField = document.querySelector('input[name="amount"]');
const submitButon = document.querySelector('button');
const form = document.querySelector('.form');


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const value = {position, delay};
  return new Promise ((resolve, reject) =>
  setTimeout(() => {
    if (shouldResolve) {
    resolve(value);
  } else {
    reject(value);
  }
  }, delay)
  )
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  const positionNumber = Number(amount.value);
  const delayNumber = Number(delay.value);
  const stepNumber = Number(step.value);

  for (let i = 1; i <= positionNumber; i += 1) {
  createPromise(i, (delayNumber + stepNumber*(i-1)))
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${(position)} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${(position)} in ${delay}ms`)
  });
  }

  form.reset();
}





