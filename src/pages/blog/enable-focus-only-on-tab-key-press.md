---
templateKey: blog-post
url: focus_on_tab_only
title: How to enable :focus only on tab key press with vanilla JS and GatsbyJS.
date: 2020-08-19T00:26:47.997Z
description: How to add focus to your web apps for keyboard only users and
  remove it for mouse users.
featuredImage: /images/js-gatsby.jpg
headerImage: /images/js-gatsby-header.jpg
collections:
  - gatsbyjs
  - javascript
---
**Problem:** You want to be accessible to your users by having keyboard focus on your GatsbyJS (or any other framework for that matter) page but you don't want the focus outlines to show when the user is using the mouse to navigate.

**Solution:** You add an event listener to the body that detects if the user is using the mouse or the keyboard. If they are using the mouse then you add a class to the body that removes `:focus` styles.

### **CSS:**

```css
/* When mouse is detected, 
	 ALL focused elements have outline removed. 
*/

body.using-mouse *:focus {
  outline: none;
}
```

### **JavaScript:**

```javascript
// Remove focus styling from the body by adding the class using-mouse
document.body.addEventListener('mousedown', () => {
  document.body.classList.add('using-mouse');
});

// Re-enable focus styling when Tab is pressed by removing the class using-mouse
document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    document.body.classList.remove('using-mouse');
  }
});
```

### **GatsbyJS:**

For Gatsby things get a bit more complicated. Since Gatsby is a static site generator we need to make sure that we can put this tiny script in all of our pages. Gatsby builds the pages in a node environment so there is no window object for us to addEventListener to. To get around this we must add the JS script into gatsby-browser.js file inside the onClientEntry API. onClientEntry is called when the Gatsby browser runtime first starts so it'll load as soon as your page loads for every page.

```javascript
// Requiere the global css where you have the focus styles
require('./src/styles/global.css');

exports.onClientEntry = () => {
  // Remove focus styling from the body by adding the class using-mouse
  document.body.addEventListener('mousedown', () => {
    document.body.classList.add('using-mouse');
  });

  // Re-enable focus styling when Tab is pressed by removing the class using-mouse
  document.body.addEventListener('keydown', (e) => {
    if (e.keyCode === 9) {
      document.body.classList.remove('using-mouse');
    }
  });
};
```

This is a slick way of making your site accessible. In case you want `:focus` styling to be turned on by default on certain elements, you can just set the `:focus` explicitly for those elements like `<input />` and `<textarea />`.