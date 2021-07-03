const ENGLISH = 'en';
const JAPANESE = 'ja';

document.querySelectorAll('.thumbnail').forEach((img) => {
  console.log(img.id)
  img.src = `images/${img.id}`;
})

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
