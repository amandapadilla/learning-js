"use strict";

debugger;

const age = document.querySelector(".age");
const ageCalculator = document.querySelector(".age-calculator");

const hourDay = 24;
const hourYear = hourDay * 365;

const calculator = parseInt(age.innerHTML) * hourYear;

ageCalculator.innerHTML = `Horas de vida: ${calculator}`;
