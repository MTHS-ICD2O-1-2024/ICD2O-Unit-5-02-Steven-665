// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Apr 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random()) 

/**
* This function checks if the user has selected the random number from above
*/
// eslint-disable-next-line no-unused-vars
function generate () {
  const selectedOption = document.querySelector('input[name="kind-of-number"]:checked')
  const userChoice = parseInt(selectedOption.value)

  let outputNumber

  if (userChoice === 1) {
    outputNumber = Math.floor(Math.random() * 100) + 1
  } else if (userChoice === 2) {
    outputNumber = -1 * (Math.floor(Math.random() * 100) + 1)
  }

  document.getElementById('number').innerHTML =
    `<p>You selected ${userChoice === 1 ? 'Positive' : 'Negative'}.<br/>Generated number: ${outputNumber}</p>`
}
