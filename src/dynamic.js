$(".searchFrom").click(function(){
    $(".globalMain").slideToggle();
});


$(function () {
    $('.inputBox').click(function (event) {
        //取消事件冒泡
        event.stopPropagation();
        //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。
        $('.globalMain').slideToggle('slow');
        return false;
    });
    //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
    $(document).click(function(event){
        // var _con = $('#divTop');   // 设置目标区域
        // if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
            //$('#divTop').slideUp('slow');   //滑动消失
            $('.globalMain').hide();          //淡出消失
        // }
    });
})
