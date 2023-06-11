// normalize styles
import 'normalize.css';
import 'reset-css/reset.css';

// import styles
import '@/styles/festival_asso.styl';
import '@/components/menu.js';

import $ from 'jquery';
import Galleria from 'galleria';

(function() {

  var w = $('.gallery').width();

  Galleria.configure({
    imageCrop: true,
    thumbnails: false,
    with: w,
    height: w/1.5,
  });

  Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');
  Galleria.run('.galleria');

  Galleria.ready(function() {

    $(window).resize(() => {
      w = $('.gallery').width();
      this.resize({
        width: w,
        height: w/1.5,
      });
    });

  });

})();

