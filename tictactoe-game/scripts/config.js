// 모든 로직을 담당하는 파일
function openPlayerConfig() {
  palyerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  palyerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim();  // '         ' => ''
}