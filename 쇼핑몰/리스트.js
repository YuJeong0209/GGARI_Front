shop.callback = function() {
	if ($('#SC_SC2_IDX').val() == '') {
		$('.js-all').addClass('selected');
	}
};

$(()=>{
    $.ajax({
        url : '/api/shop.list.php',
        type : "POST",
        data : {
            KEY : apikey,
            menu2_id : "27038",
            use_page : false,
            use_limit : false,
        },
//                    jsonp : "callback",
        async : false,
    }).done((data)=> {
        console.log(data);
        $('#all_amount').html(data.items.length); 
    }).fail((jqXHR, textStatus, errorThrown) => {console.log(errorThrown)});


    setTimeout(()=>{
        $('dqr').each((i, item)=>{
            let $item = $(item); 
            let tags = $(item).attr('data').split(',');
            if(tags.length != 1){
                for(tag of tags){
                    let tag00 = ('00' + tag).slice(-2);
                    let $img = $('<img>').attr({src : "https://ggaribox.s3.ap-northeast-2.amazonaws.com/sw_snack_ico_"+tag00+".svg"}).addClass('img-fluid snack_ico'+tag00);
                    let $span = $('<span>').addClass('snack_ico_text').html(util.getDisStr(parseInt(tag)));
                    $item.after($img, $span);
                }
            }
            $item.remove();
        })    
    }, 200);
});