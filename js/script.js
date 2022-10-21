// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const height = parseInt(document.getElementById("height_of_rhombus").value)
  const length = parseInt(document.getElementById("length_of_rhombus").value)
  // process
  const area = (length * height) / 2
  // output
  document.getElementById("area_of_rhombus").innerHTML = "Area is: " + area + " cm²"
}
