
// Import all plugins
import * as bootstrap from 'bootstrap';

$('previous-button').click(function(){
    $('.nav-tabs >.active'). next('li').find('a').trigger('click');
    //triigger the click on the tab
  })