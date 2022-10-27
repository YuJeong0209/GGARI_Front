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
        $('#all_product').html(data.items.length); 
    }).fail((jqXHR, textStatus, errorThrown) => {console.log(errorThrown)});


});