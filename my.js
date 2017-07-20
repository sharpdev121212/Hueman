
const list = $('.tabs li');

const tabsContent = $('.tabs-content');

list.on('click', function(){
   list.css('border-bottom','3px solid #cdcdcd');
   $(this).css('border-bottom','3px solid #efb93f');
   list.css('color','rgba(0,0,0,0.5)');
   $(this).css('color','rgba(0,0,0,0.9)');

   tabsContent.fadeOut(300).fadeIn(300);

})
