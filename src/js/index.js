require.config({
    paths:{
        'jquery':'../libs/jquery',
        'swiper':'../js/swiper.min'
    }
});

require(['jquery','swiper'],function($,swiper){
    //轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:2000,
        pagination: '.swiper-pagination'
      })  
    //  滚轮    
    $(function(){
        $('.left').mouseenter(function(){
            $(this).css('backgroundColor','#fff')
            $('.gunlun').css('display','block')
            $('.gunlun').mouseenter(function(){
                $('.gunlun').stop()
            })
            $('.gunlun').mouseleave(function(){
                $('.gunlun').hide(100)
            })

        })
        $('.left').mouseleave(function(){
            $(this).css('backgroundColor','')
            $('.gunlun').hide(100)
        })

        $('.gunlun .li span').click(function(){
            $('.left').text($(this).text())
        })
        $('.content').hide();
        $('.gunlun .li span').click(function(){
            $('.gunlun .li').children('div').toggleClass('slideDown slideUp').end().next('div').slideToggle(100);
        })
    })
    $.ajax({
        url: 'common/index.json',
        type: 'GET',
        data:{

        },
        success:function(data){
            console.log(data);
             for(var i = 0; i < data.giftData.length; i++){
                $('#gift li').eq(i).prepend('<div><a href=""><img src="'+data.giftData[i]
                    .imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+
                    data.giftData[i].name+'</p><p>'+data.giftData[i].price+'</p></div>');
            }
            for (var i = 0; i < data.family.length; i++) {
                $('.familybuy li').eq(i).prepend('<div><a href=""><img src="'+data.family[i]
                    .imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+
                    data.family[i].name+'</p><p>'+data.family[i].price+'</p></div>');
            }
            for (var i = 0; i < data.world.length; i++) {
                $('.world li').eq(i).prepend('<div><a href=""><img src="'+data.world[i]
                    .imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+
                    data.world[i].name+'</p><p>'+data.world[i].price+'</p></div>');
            }
            for (var i = 0; i < data.fresh.length; i++) {
                $('.fresh li').eq(i).prepend('<div><a href=""><img src="'+data.fresh[i]
                    .imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+
                    data.fresh[i].name+'</p><p>'+data.fresh[i].price+'</p></div>');
            }
        }
     });
});
 