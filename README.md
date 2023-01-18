# Desafio Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1) Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Welcome! 👋

Thanks for checking out my front-end coding challenge.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` fields are empty
  - The email address is not formatted correctly

### Screenshot
###Desktop
![](./screenshot-desktop.png)

#### Mobile
![](./screenshot-mobile.png)

#### Mobile With sidebar menu
![](./screenshot-mobile-sidebar.png)

### Links

- Live Site URL: (https://vtrv123.github.io/challengeIntroWithSignup/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

In this challenge, I practiced my HTML5, CSS3 and JavaScript skills. The main challenge for me was building the interactive sidebar menu on the mobile version using JavaScript. Composing the layout with CSS Grid and translating it to the mobile was also a challenging task. As a new learning experience, I was able to practice creating CSS Grid designs a lot, besides practicing class manipulation with JavaScript.

Most of the page's layout was built using CSS Grid, with some small Flexbox components. Absolute positioning was used to create the menu sidebar and a fading animation was added to showing the menu after pressing the open menu button.

The JS script was considerably short, consisting of adding a class to some HTML elements in order to show the mobile navigation menu, after the open button action was triggered by a click event on the menu icon. Then, a click on the close menu button triggers an event to remove the class that displays the menu from the HTML elements.
