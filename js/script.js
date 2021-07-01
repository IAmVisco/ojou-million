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


*/