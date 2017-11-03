require.config({
    paths:{
        'jquery':'../libs/jquery'
    }
});
require(['jquery'],function($){
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
        $.ajax({
            url: 'common/gift.json',
            type: 'GET',
            data:{

            },
            success:function(data){
                console.log(data);
                 for(var i = 0; i < data.giftData.length; i++){
                    $('#fruittu li').eq(i).prepend('<div><a href=""><img src="'+data.giftData[i]
                        .imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+
                        data.giftData[i].name+'</p><p>'+data.giftData[i].price+'</p></div>');
                }
            }
         });    
    });
});