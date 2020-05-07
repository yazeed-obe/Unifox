$(document).ready(function(){
    
    
    
    
$('i.icon').click(function(){
    
   $('.nav-list').slideToggle() 
    
    });
    
    

        $(window).scroll(function(){
       var sc=$(this).scrollTop();
   if(sc > 10){
            
          
           $('header').addClass('sticky');  
                
           }
        
       else {
                          $('header').removeClass('sticky');  

            
        }
            
          if (sc>1980){
                   $('.time').countTo();
                $(window).off(scroll);
            }
            
    
        if ( sc > 500) { // Fade The Scroll Top Btn
            
            $('.scrollTop').fadeIn();
            
        } else {
            
            $('.scrollTop').fadeOut();
            
        }
            
             if ( sc > 800) { // Fade The Scroll Top Btn
            
            $('.whatts i ').fadeIn();
            
        } else {
            
            $('.whatts i').fadeOut();
            
        }
    });
    
    $('.buttons button').click(function(){
         
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
          
        var cssfilter = $(this).attr('id');
        
        if (cssfilter==='all'){
            $('.images  > div').fadeIn();
        } else {
            
              $('.images  > div').fadeOut();
            $('.images').contents().filter('.'+cssfilter).fadeIn();
            
        }
                               
                               
                               });

    
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
    
    
    
    
 $('.c_panel li').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        
        var p = $(this).data('role');
        $('.content > div ').hide();
        $('.content').contents().filter('#' + p).fadeIn();
        
    });
    
       $('.pop').magnificPopup({
        type: 'iframe'
    });
    
    
 

    
    
        $('.slick').slick({
        nextArrow : false,
        prevArrow : false
    });

    
     
    // Scroll to Top
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });
    
    // smooth Scroll 
    $('.list a').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 80
        });
        
    });
    
    
});