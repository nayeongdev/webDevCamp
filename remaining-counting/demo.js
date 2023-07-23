const productNameInputElement = document.body.querySelector('input');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = productNameInputElement.maxLength;

function remainingStatus(n) {
  if (n === 0) {
    productNameInputElement.classList.add('error');
    remainingCharsElement.classList.add('error');
    return;
  }
  if (n <= 10) {
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.add('warning');
    productNameInputElement.classList.remove('error');
    remainingCharsElement.classList.remove('error');
    return;
  }
  productNameInputElement.classList.remove('warning');
  remainingCharsElement.classList.remove('warning');
}

function updateRemainingChars(e) {
  const enteredTxt = e.target.value;
  const enteredTxtLength = enteredTxt.length;
  const remainingChars = maxAllowedChars - enteredTxtLength;

  if (remainingChars > -1) {
    remainingCharsElement.innerText = remainingChars;
    remainingStatus(remainingChars);
  }
}


productNameInputElement.addEventListener('input', updateRemainingChars);