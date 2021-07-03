const ENGLISH = 'en';
const JAPANESE = 'ja';

document.querySelectorAll('.thumbnail').forEach((img) => {
  img.src = `images/${img.id}`;
});

// I18n
const enButton = document.getElementById('enBtn');
const jaButton = document.getElementById('jaBtn');
const i18n = domI18n({
  languages: [ENGLISH, JAPANESE],
});
document.body.style.display = 'block';

enButton.onclick = () => {
  i18n.changeLanguage(ENGLISH);
};

jaButton.onclick = () => {
  i18n.changeLanguage(JAPANESE);
};

// Scroll progress
window.onscroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById('progressBar').style.width = (winScroll / height) * 100 + '%';
};

// Modal
const modal = document.getElementById('creditsModal');
const modalButton = document.getElementById('creditsBtn');
const span = document.getElementsByClassName('modal-close')[0];

modalButton.onclick = () => {
  modal.style.display = 'block';
};

span.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

/* TODO:
Restyle
Style header better
Do language button better
*/
