# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![desktop screenshot](images/desktop%20screenshot.png)

### Links

- Solution URL: [Solution url](https://github.com/Rexer-Glitch/FrontendMentor/tree/Intro-section/Intro%20Section%20With%20Dropdown%20Menu)
- Live Site URL: [Live site url](https://intro-section-dropdown.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

One of the areas I struggled with was how to place the pseudo element of the element behind the element itself, a solution I found that fascinated me was

```css
.nav-items-wrapper{
    transform-style: preserve-3d;
}

.nav-items-wrapper::before {
    transform: translateZ(-1px);
}
```
using **transform: translateZ(-1px)** to offset the ::before pseudo element behind the element  


### Continued development

Now my main focus is in animation using gsap.  

## Author

- Website - [Raymac Antony Gumbo](https://www.raymacantony.tech)
- Frontend Mentor - [@Rexer-Glitch](https://www.frontendmentor.io/profile/Rexer-Glitch)
- Twitter - [@Raymacantonyg](https://www.twitter.com/Raymacantonyg)


## Acknowledgments

I would like to acknowledge **Stack Overflow** lol, for the helpful trick on pseudo element positioning using **transform: translate**, I had never thought of that.
