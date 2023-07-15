function toggleAccountMenu() {
  document.querySelector('.account-cta').classList.toggle('active');
}

function toggleSearchBar() {
  document.querySelector('.search-bar-wrapper').classList.toggle('active');
}

function toggleSidebar() {
  document.querySelector('.footer-wrapper').classList.toggle('active');
}

function closeModal(event) {
  var modalOverlay = document.querySelector('.modal-overlay');

  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
}

function hideModal() {
  document.querySelector('.modal-overlay').classList.remove('active');
}

function handleImageClick(event) {
  let target = event.target;
  if (target.classList.contains('item-img')) {
    document.querySelector('.modal-overlay').classList.add('active');
    let src = target.src;
    let showcaseImg = document.querySelector('.showcase-img img');
    showcaseImg.src = src;
  }
}