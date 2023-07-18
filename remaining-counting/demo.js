let productNameInputElement = document.body.querySelector('input');
let remainingCharsElement = document.getElementById('remaining-chars');
let maxAllowedChars = productNameInputElement.maxLength;

function warningStatus(n) {
  if (n <= 10) {
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.add('warning');
    return;
  }

  productNameInputElement.classList.remove('warning');
  remainingCharsElement.classList.remove('warning');
}

function updateRemainingChars(e) {
  let enteredTxt = e.target.value;
  let enteredTxtLen = enteredTxt.length;
  let remainingChars = maxAllowedChars - enteredTxtLen;

  remainingCharsElement.innerText = remainingChars;
  warningStatus(remainingChars);
}


productNameInputElement.addEventListener('input', updateRemainingChars);