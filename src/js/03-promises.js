import Notiflix from 'notiflix';


const delayField = document.querySelector('input[name="delay"]');
const stepField = document.querySelector('input[name="step"]');
const amountField = document.querySelector('input[name="amount"]');
const submitButon = document.querySelector('button');


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

submitButon.addEventListener('click', onSubmitButtonClick);

function onSubmitButtonClick (e) {
  e.preventDefault();
  const position = Number(amountField.value);
  const delay = Number(delayField.value);
  const step = Number(stepField.value);

  for (let i = 0; i < position; i += 1) {
  createPromise(i, (delay + step*i))
  .then(({ position, delay }) => {
    setTimeout(() => {Notiflix.Notify.success(`✅ Fulfilled promise ${(position + 1)} in ${delay}ms`);}, delay)
    
  })
  .catch(({ position, delay }) => {
    setTimeout(() => {Notiflix.Notify.failure(`❌ Rejected promise ${(position + 1)} in ${delay}ms`)}, delay)
  });
  }
}





