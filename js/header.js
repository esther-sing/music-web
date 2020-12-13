$(".menu2-1").click(function () {
    $(this).toggleClass("active")
})



let lastPosition=0
$(window).scroll(function(){
    let scrollTop=$(this).scrollTop();



    if (scrollTop>lastPosition){
        $("nav").addClass("hideNav")
    }else{
        $("nav").removeClass("hideNav")

    }
    lastPosition=scrollTop;
})