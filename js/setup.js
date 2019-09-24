'use strict';
var gameSetup = document.querySelector('.setup');
gameSetup.classList.remove('hidden');
var setupSimilarElement = document.querySelector('.setup-similar');
setupSimilarElement.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var WIZARD_PARMS = {
  'name': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  'surname': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  'coatColor': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  'eyesColor': ['black', 'red', 'blue', 'yellow', 'green']
};
var getRandomElement = function (elemetns) {
  return elemetns[Math.floor((Math.random() * elemetns.length))];
};
var wizards = [
  {
    name: getRandomElement(WIZARD_PARMS.name) + ' ' + getRandomElement(WIZARD_PARMS.surname),
    coatColor: getRandomElement(WIZARD_PARMS.coatColor),
    eyesColor: getRandomElement(WIZARD_PARMS.eyesColor)
  },
  {
    name: getRandomElement(WIZARD_PARMS.name) + ' ' + getRandomElement(WIZARD_PARMS.surname),
    coatColor: getRandomElement(WIZARD_PARMS.coatColor),
    eyesColor: getRandomElement(WIZARD_PARMS.eyesColor)
  },
  {
    name: getRandomElement(WIZARD_PARMS.name) + ' ' + getRandomElement(WIZARD_PARMS.surname),
    coatColor: getRandomElement(WIZARD_PARMS.coatColor),
    eyesColor: getRandomElement(WIZARD_PARMS.eyesColor)
  },
  {
    name: getRandomElement(WIZARD_PARMS.name) + ' ' + getRandomElement(WIZARD_PARMS.surname),
    coatColor: getRandomElement(WIZARD_PARMS.coatColor),
    eyesColor: getRandomElement(WIZARD_PARMS.eyesColor)
  }];

/* var wizards = function(i) {
    WIZARD_PARMS.forEach(function(WIZARD_PARM, i) {
      return(
      name = getRandomElement(WIZARD_PARMS.name) + ' ' + getRandomElement(WIZARD_PARMS.surname),
      coatColor = getRandomElement(WIZARD_PARMS.coatColor),
      eyesColor = getRandomElement(WIZARD_PARMS.eyesColor)
    )})};
  wizards(4);*/
var createElement = function () {
  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  wizards.forEach(function (wizard, i) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    fragment.appendChild(wizardElement);
    similarListElement.appendChild(fragment);
  });
};
createElement();
