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
            for(tag of tags){
                
            }
            console.log(tags);

        })    
    }, 3000)
});