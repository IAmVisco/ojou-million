const enButton = document.getElementById('en-btn');
const jaButton = document.getElementById('ja-btn');
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

/* TODO:
Style header better
Do language button better
Add huge 祝 at the bottom
Add arrow at the bottom maybe
Convert/resize all pics
*/

// const parallax = document.getElementById('bg');
// const speed = 0.5;
//
// window.onscroll = function () {
//   const windowYOffset = window.pageYOffset;
//   parallax.style.backgroundPosition = '10% ' + (windowYOffset * speed) + 'px';
//   console.log('10% ' + (windowYOffset * speed) + 'px')
// };
