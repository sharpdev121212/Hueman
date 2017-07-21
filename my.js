
const list = $('.tabs li');

const tabsContent = $('.tabs-content');

list.on('click', function(){
   list.css('border-bottom','3px solid #cdcdcd');
   $(this).css('border-bottom','3px solid #efb93f');
   list.css('color','rgba(0,0,0,0.5)');
   $(this).css('color','rgba(0,0,0,0.9)');

   tabsContent.fadeOut(300).fadeIn(300);

})


$('.left a').on('click', function(e){
   e.preventDefault();
});

$(window).resize(rsz);

rsz();

function rsz(){
   const windowWidth = $(window).width();
   if(windowWidth<1000){
      $(".blog,.bottomheader>:nth-child(2)").css('width','70%');
      $('.multiselect,.bottomheader>:nth-child(3)').addClass("none");
      $('.discover,.bottomheader>:nth-child(1)').removeClass('none').css('width',"30%");

   }
   if(windowWidth<850){
      $(".blog,.bottomheader>:nth-child(2)").css('width','100%');
      $('.discover,.bottomheader>:nth-child(1)').addClass('none');
      return;
   }
   if(windowWidth>1000){
      $(".blog,.bottomheader>:nth-child(2)").css('width','60%');
      $('.discover,.bottomheader>:nth-child(1)').css('width',"23%");
      $('.none').removeClass('none');
   }
}
