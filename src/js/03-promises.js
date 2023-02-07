import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  // //1 Варіантю
  // let delay = event.currentTarget.delay.value;
  // let step = event.currentTarget.step.value;
  // let amount = event.currentTarget.amount.value;
  //===============
  //2 Варіант
  // let { delay, step, amount } = Event.target;
  // let delayValue = delay.value;
  // let stepValue = step.value;
  // let amountValue = amount.value;
  //=====
  //3 Варіант
  let { delay, step, amount } = Object.fromEntries(new FormData(event.target));
  delay = Number(delay);
  step = Number(step);
  //4 Варіант
  // let array = Object.values(Object.fromEntries(new FormData(event.target)));
  // console.log(array);
  for (let i = 1; i < amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
