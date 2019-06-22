$(function () {
    let ul=$('.name');

    let arr= [
            {f:'airuikelanxieer',name:'艾瑞克兰谢尔',tel:'11111111111'},
            {f:'nikefurui',name:'尼克弗瑞',tel:'111111'},
            {f:'bilihailingdun',name:'比利海灵顿',tel:'22222222222'},
            {f:'maiersimolalaisi',name:'迈尔斯莫拉莱斯',tel:'22222222222'},
            {f:'bulusibanna',name:'布鲁斯班纳',tel:'22222222222'},
            {f:'chaersizeweier',name:'查尔斯泽维尔',tel:'333333333333'},
            {f:'kaluoerdanfusi',name:'卡罗尔丹弗斯',tel:'44444444444444'},
            {f:'tuonisitake',name:'托尼斯塔克',tel:'44444444444444'},
            {f:'bidepake',name:'彼得帕克',tel:'44444444444444'},
            {f:'natashaluomannuofu',name:'娜塔莎罗曼诺夫',tel:'44444444444444'},
    ];

        let person={

        };
        console.log(person);
        arr.forEach(ele=>{
            let first=ele.f.charAt(0).toUpperCase();
            console.log(first);
            console.log(ele);
            if (!person[first]){
                person[first]=[];
            }
            person[first].push(ele);
            console.log(person);
        });
        function f() {
        let karr =Object.keys(person).sort();
        console.log(karr);
        let html='';
        for (let i=0;i<karr.length;i++){
            let fir=karr[i];
            console.log(person[fir]);
            console.log(person[fir].length);
            html+=`<li class="t">${fir}</li>`;
            for(let j=0;j<person[fir].length;j++){
                let na=person[fir][j];
                html+=`<li class="c" id="${na.f}">${na.name}</li>`
            }
        }
        ul.empty();
        ul.html(html);
    }
    f();
    $('#index').keyup(function() {
        let index = $.trim($('#index').val().toString()); // 去掉两头空格
        let lic=$('.c');
        let lit=$('.t');
        console.log(lic);
        console.log(lit);
        if(index == ''){ // 如果搜索框输入为空
            lic.removeClass('hide');
            lit.removeClass('hide');
            f();
            return;
        }
        lic.addClass('hide');
        lit.addClass('hide');
        $("li:contains('"+index+"')").prependTo(ul).removeClass('hide');
        // console.log(typeof index);
        // if(index==null){
        //     f();
        //     return;
        // }
        // for (let i=0;i<lic.length;i++){
        //     console.log($(lic[i]).html());
        //     console.log(lic);
        //     lic.addClass('hide');
        //     lit.addClass('hide');
        //     let n;
        //     if ($(lic[i]).html().indexOf(index)!=-1){
        //         console.log(1);
        //         n=i;
        //         console.log($(lic[i]));
        //     }
        //     console.log(n);
        //     console.log($(lic[n]));
        //     $(lic[n]).removeClass('hide');
        // }

        // lic.addClass('hide');
        // lit.addClass('hide');
        // $("li:contains('"+index+"')").prependTo(ul).removeClass('hide');
        // if (){
        //
        // }
    });
    $('#refresh').on('click',function (){
       f();
    });
    $('.letter').on('click','p',function () {
        let n=$(this).attr('id').toUpperCase();
        let a=person[n];
        let html='';
        html+=`<li class="t">${n}</li>`;
        if (!a.length){
            return
        }
        for(let j=0;j<a.length;j++){
            let na=person[n][j];
            html+=`<li class="c">${na.name}</li>`
        }
        ul.empty();
        ul.html(html);
    })
});