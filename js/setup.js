'use strict';
var gameSetup = document.querySelector('.setup');
gameSetup.classList.remove('hidden');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var get_random = function (array) {
  return array[Math.floor((Math.random()*array.length))];
}
var wizards = [
{
  name: get_random(WIZARD_NAMES) + ' ' + get_random(WIZARD_SURNAMES),
  coatColor: get_random(COAT_COLORS),
  eyesColor: get_random(EYES_COLORS)
},
{
  name: get_random(WIZARD_NAMES) + ' ' + get_random(WIZARD_SURNAMES),
  coatColor: get_random(COAT_COLORS),
  eyesColor: get_random(EYES_COLORS)
},
{
  name: get_random(WIZARD_NAMES) + ' ' + get_random(WIZARD_SURNAMES),
  coatColor: get_random(COAT_COLORS),
  eyesColor: get_random(EYES_COLORS)
},
{
  name: get_random(WIZARD_NAMES) + ' ' + get_random(WIZARD_SURNAMES),
  coatColor: get_random(COAT_COLORS),
  eyesColor: get_random(EYES_COLORS)
}];

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  //var name = get_random(WIZARD_NAMES) + ' ' + get_random(WIZARD_SURNAMES);
  //var coatColor = get_random(COAT_COLORS);
  //var eyesColor = get_random(EYES_COLORS);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
};
