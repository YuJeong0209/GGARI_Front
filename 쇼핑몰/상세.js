function onclTab($num) {
    if (typeof $num == "undefined") return false;

    let tab = document.querySelectorAll(".tab-item");
    let nav = document.querySelectorAll(".nav-tnb2 ul li a");

    for ($i = 0; $i < tab.length; $i++) {
        //console.log(tab[$i]);
        tab[$i].style.display = "none";
    }

    for ($i = 0; $i < nav.length; $i++) {
        //console.log(nav[$i]);
        nav[$i].setAttribute('class', '');
    }

    document.querySelector(".tab-item[data-tab='" + $num + "']").style.display = "block";
    document.querySelector(".nav-tnb2 ul li a[data-tnb-id='" + $num + "']").classList.add('active');
}

$(()=>{
    $('.total-price').before($('.delivery'));
    $('dqr').each((i, item)=>{
        let $item = $(item); 
        let tag = $(item).attr('data');
        if(tag != ""){
            let tag00 = ('00' + tag).slice(-2);
            let $img = $('<img>').attr({src : "https://ggaribox.s3.ap-northeast-2.amazonaws.com/sw_snack_ico_"+tag00+".svg"}).addClass('img-fluid snack_ico'+tag00);
            let $span = $('<span>').addClass('snack_ico_text').html(util.getDisStr(parseInt(tag)));
            $item.after($img, $span);
        }
        $item.remove();
    })    

});