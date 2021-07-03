const enButton = document.getElementById('enBtn');
const jaButton = document.getElementById('jaBtn');
const i18n = domI18n({
  languages: ['en', 'ja'],
});
document.body.style.display = 'block';

enButton.onclick = function () {
  i18n.changeLanguage('en');
};

jaButton.onclick = function () {
  i18n.changeLanguage('ja');
};

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
Scrollspy maybe
*/

// const parallax = document.getElementById('bg');
// const speed = 0.5;
//
// window.onscroll = function () {
//   const windowYOffset = window.pageYOffset;
//   parallax.style.backgroundPosition = '10% ' + (windowYOffset * speed) + 'px';
//   console.log('10% ' + (windowYOffset * speed) + 'px')
// };
