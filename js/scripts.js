'use strict'

const $hbMenu = document.querySelector('.hbMenu');
const $navMenu = document.querySelector('.navMenu');
const $iconClose = document.querySelector('.iconClose');


const $iconArrowCompany = document.querySelector('.iconArrowCompany');


$hbMenu.addEventListener('click', () => {
    $navMenu.classList.add('show');
});

$iconClose.addEventListener('click', () => {
    $navMenu.classList.remove('show');

});


const $features = document.querySelector('.features');

$features.addEventListener('click', () => {
    const $iconArrowFeatures = document.querySelector('.iconArrowFeatures');
    const $subListFeatures = document.querySelector('.subListFeatures');
    $subListFeatures.classList.toggle('show');
    $iconArrowFeatures.classList.toggle('show');
});

const $company = document.querySelector('.company');

$company.addEventListener('click', () => {
    const $iconArrowCompany = document.querySelector('.iconArrowCompany');
    const $subListCompany = document.querySelector('.subListCompany');
    $subListCompany.classList.toggle('show');
    $iconArrowCompany.classList.toggle('show');
});

