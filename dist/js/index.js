require.config({paths:{jquery:"../libs/jquery",swiper:"../js/swiper.min"}}),require(["jquery","swiper"],function(i,e){new Swiper(".swiper-container",{direction:"horizontal",loop:!0,autoplay:2e3,pagination:".swiper-pagination"});i(function(){i(".left").mouseenter(function(){i(this).css("backgroundColor","#fff"),i(".gunlun").css("display","block"),i(".gunlun").mouseenter(function(){i(".gunlun").stop()}),i(".gunlun").mouseleave(function(){i(".gunlun").hide(100)})}),i(".left").mouseleave(function(){i(this).css("backgroundColor",""),i(".gunlun").hide(100)}),i(".gunlun .li span").click(function(){i(".left").text(i(this).text())}),i(".content").hide(),i(".gunlun .li span").click(function(){i(".gunlun .li").children("div").toggleClass("slideDown slideUp").end().next("div").slideToggle(100)})}),i.ajax({url:"common/index.json",type:"GET",data:{},success:function(e){console.log(e);for(n=0;n<e.giftData.length;n++)i("#gift li").eq(n).prepend('<div><a href=""><img src="'+e.giftData[n].imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+e.giftData[n].name+"</p><p>"+e.giftData[n].price+"</p></div>");for(n=0;n<e.family.length;n++)i(".familybuy li").eq(n).prepend('<div><a href=""><img src="'+e.family[n].imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+e.family[n].name+"</p><p>"+e.family[n].price+"</p></div>");for(n=0;n<e.world.length;n++)i(".world li").eq(n).prepend('<div><a href=""><img src="'+e.world[n].imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+e.world[n].name+"</p><p>"+e.world[n].price+"</p></div>");for(var n=0;n<e.fresh.length;n++)i(".fresh li").eq(n).prepend('<div><a href=""><img src="'+e.fresh[n].imgSrc+'" class="tu"></a></div><div class="jieshao"><p>'+e.fresh[n].name+"</p><p>"+e.fresh[n].price+"</p></div>")}})});