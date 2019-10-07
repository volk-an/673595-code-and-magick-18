'use strict';
var getRandomElement = function (elemetns) {
  return elemetns[Math.floor((Math.random() * elemetns.length))];
};
var wizardParms = {
  'NAMES': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  'SURNAMES': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  'COAT_COLORS': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  'EYES_COLORS': ['black', 'red', 'blue', 'yellow', 'green'],
  'FIREBALL_COLORS': ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};
var setupElement = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupElement.querySelector('.setup-close');
var usernameInput = setupElement.querySelector('.setup-user-name');
var eyes = setupElement.querySelector('.setup-wizard .wizard-eyes');
var eyesInput = setupElement.querySelector('input[name=eyes-color]');
var coat = setupElement.querySelector('.setup-wizard .wizard-coat');
var coatInput = setupElement.querySelector('input[name=coat-color]');
var fireball = setupElement.querySelector('.setup-fireball-wrap');
var fireballInput = setupElement.querySelector('input[name=fireball-color]');
var openPopup = function () {
  setupElement.classList.remove('hidden');
};
var closePopup = function () {
  setupElement.classList.add('hidden');
};
var eyesChange = function () {
  eyesInput.value = getRandomElement(wizardParms.EYES_COLORS);
  eyes.style.fill = eyesInput.value;
};
var coatChange = function () {
  coatInput.value = getRandomElement(wizardParms.COAT_COLORS);
  coat.style.fill = coatInput.value;
};
var fireballChange = function () {
  fireballInput.value = getRandomElement(wizardParms.FIREBALL_COLORS);
  fireball.style.background = fireballInput.value;
};
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (usernameInput !== document.activeElement) {
      closePopup();
    }
  }
});
document.addEventListener('keydown', function (evt) {
  if (setupClose === document.activeElement) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  }
});
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});
eyes.addEventListener('click', function () {
  eyesChange();
});
coat.addEventListener('click', function () {
  coatChange();
});
fireball.addEventListener('click', function () {
  fireballChange();
});
var setupSimilarElement = document.querySelector('.setup-similar');
setupSimilarElement.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var WIZARD_AMOUNT = 4;
var generateWizards = function (wizardAmount) {
  var wizards = [];
  for (var i = 0; i < wizardAmount; i++) {
    wizards[i] =
      {
        name: getRandomElement(wizardParms.NAMES) + ' ' + getRandomElement(wizardParms.SURNAMES),
        coatColor: getRandomElement(wizardParms.COAT_COLORS),
        eyesColor: getRandomElement(wizardParms.EYES_COLORS)
      };
  }
  return wizards;
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function () {
  var fragment = document.createDocumentFragment();
  var wizards = generateWizards(WIZARD_AMOUNT);
  wizards.forEach(function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    fragment.appendChild(wizardElement);
  });
  similarListElement.appendChild(fragment);
};
renderWizard();
