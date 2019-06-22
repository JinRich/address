$(function(){
        //键盘按键弹起时执行
    let lic=$('.c');
    let lit=$('.t');
    let parent = $('.name');
    $('#index').keyup(function(){
        let index = $.trim($('#index').val().toString()); // 去掉两头空格
        console.log(index);
        if(index == ''){ // 如果搜索框输入为空
            lic.removeClass('hide');
            lit.removeClass('hide');
            return false;
        }
        lic.addClass('hide');
        lit.addClass('hide');
            //选择包含文本框值的所有加上focus类样式，并把它（们）移到ul的最前面
            // prependTo() 方法在被选元素的开头（仍位于内部）插入指定内容
            // contains 选择器，选取包含指定字符串的元素
            $("li:contains('"+index+"')").prependTo(parent).removeClass('hide');
            // $("p:contains('"+index+"')").parent().prependTo(parent).addClass('on');
        });
    $('.letter').on('click','i',function () {
        lic.removeClass('hide');
        lit.removeClass('hide');
    });
    $('.letter').on('click','p',function () {
        let n=$(this).attr('id');
        if(n == ''){ // 如果搜索框输入为空
            lic.removeClass('hide');
            lit.removeClass('hide');
            return false;
        }
        lic.addClass('hide');
        lit.addClass('hide');
        console.log($("li:contains('" + n + "')"));
        $("li:contains('"+n+"')").prependTo(parent).removeClass('hide');
    })
});