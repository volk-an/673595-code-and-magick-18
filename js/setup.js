'use strict';
var setupElement = document.querySelector('.setup');
setupElement.classList.remove('hidden');
var setupSimilarElement = document.querySelector('.setup-similar');
setupSimilarElement.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var wizardParms = {
  'NAMES': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  'SURNAMES': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  'COAT_COLORS': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  'EYES_COLORS': ['black', 'red', 'blue', 'yellow', 'green']
};
var getRandomElement = function (elemetns) {
  return elemetns[Math.floor((Math.random() * elemetns.length))];
};
var WIZARD_AMOUNT = 4;
var generateWizards = function (wizardAmount) {
  var wizards = [];
  for (var i = 0; i < wizardAmount; i++) {
    wizards[i] =
      {
        name: getRandomElement(wizardParms.NAMES) + ' ' + getRandomElement(wizardParms.SURNAMES),
        coatColor: getRandomElement(wizardParms.COAT_COLORS),
        eyeColor: getRandomElement(wizardParms.EYES_COLORS)
      };
  }
  return wizards;
};
var createElement = function () {
  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = generateWizards(WIZARD_AMOUNT);
  wizards.forEach(function (wizard, i) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyeColor;
    fragment.appendChild(wizardElement);
  });
  similarListElement.appendChild(fragment);
};
createElement();
