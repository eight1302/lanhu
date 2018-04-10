 $(function() {
    var num = 0;
    function goLeft() {
        //750是根据你给的尺寸，可变的
        if (num == -1530) {
            num = 0;
        }
        num -= 1;
        $(".notice_s").css({
            left: num
        })
    }
    //设置滚动速度
    var timer = setInterval(goLeft, 20);
    //设置鼠标经过时滚动停止
    $(".box").hover(function() {
        clearInterval(timer);
    },
    function() {
        timer = setInterval(goLeft, 20);
    });

    //动态添加数据
    var html;
    html =  '<div class="col-md-10 col-sm-10 col-xl-10" style="padding: 0;">'+
                '<img class="col-md-5 col-sm-5 col-xl-5" src="../img/flower.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-3 col-sm-3 col-xl-3" src="../img/y.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-4 col-sm-4 col-xl-4" src="../img/woter.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-5 col-sm-5 col-xl-5" src="../img/tree.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-3 col-sm-3 col-xl-3" src="../img/women.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-4 col-sm-4 col-xl-4" src="../img/ch.png" style="padding:5px;height: 190px;">'+
            '</div>'+
            '<div class="col-md-2 col-sm-2 col-xl-2" style="padding: 0;height: 200px;">'+
                '<img src="../img/tut.png" style="height: 373px;margin-top: 5px;">'+
            '</div>';
    $(".imgs").append(html);
});
$(".more").on('click',function(){
    var html;
    html =  '<div class="col-md-10 col-sm-10 col-xl-10" style="padding: 0;">'+
                '<img class="col-md-5 col-sm-5 col-xl-5" src="../img/flower.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-3 col-sm-3 col-xl-3" src="../img/y.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-4 col-sm-4 col-xl-4" src="../img/woter.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-5 col-sm-5 col-xl-5" src="../img/tree.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-3 col-sm-3 col-xl-3" src="../img/women.png" style="padding:5px;height: 190px;">'+
                '<img class="col-md-4 col-sm-4 col-xl-4" src="../img/ch.png" style="padding:5px;height: 190px;">'+
            '</div>'+
            '<div class="col-md-2 col-sm-2 col-xl-2" style="padding: 0;height: 200px;">'+
                '<img src="../img/tut.png" style="height: 373px;margin-top: 5px;">'+
            '</div>';
    $(".imgs").append(html);
})


//鼠标移入，弹出覆盖层
$(function(){
　　$(".img_tp").hover(function(){
    　　$(this).find(".flow").show();
    },function(){
    　　$(this).find(".flow").hide();
    })
});
                  
                          
                      