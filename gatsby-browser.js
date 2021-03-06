require('./src/styles/global.scss');
require('typeface-open-sans');
require('typeface-ubuntu');
require('prismjs/themes/prism-okaidia.css');

exports.onClientEntry = () => {
  window.onload = () => {
    // Let the document know when the mouse is being used
    document.body.addEventListener('mousedown', function () {
      document.body.classList.add('using-mouse');
    });

    // Re-enable focus styling when Tab is pressed
    document.body.addEventListener('keydown', function (event) {
      if (event.keyCode === 9) {
        document.body.classList.remove('using-mouse');
      }
    });
  };
};
