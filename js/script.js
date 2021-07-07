const ENGLISH = 'en';
const JAPANESE = 'ja';

// Load images sequentially
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

// Modal
const creditsModal = document.getElementById('creditsModal');
const modalOpenButton = document.getElementById('creditsBtn');
const modalCloseButton = document.querySelector('.modal-close');

modalOpenButton.onclick = () => {
  creditsModal.style.display = 'block';
};

modalCloseButton.onclick = () => {
  creditsModal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === creditsModal) {
    creditsModal.style.display = 'none';
  }
};
