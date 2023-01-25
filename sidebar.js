
$(()=>{
    sidebar.showSidebar();
});


var sidebar = {
    idSub : 1,
    idCat : 0,
    month : 0,
    coupon : 0,
    point : 0,
    //페이지 번호 등록하기!!
    pageIds : [
        [],
        ["27070", "26950", "26059", "26060", "26061"], //까리소개
        ["26434"],
        ["27038"],
        ["cart"],
        ["26802", "26801", "26803", "26800"],
        ["26922", "/my/pay.list.nx", 'sett', 'regular', "26922", "28102", "26065", "my/memb", "coupon.list", "point.list", 'order'],
    ],

    showSidebar : () => {
        outer : for(var i=1; i<7; i++){
            inner : for(let ids in sidebar.pageIds[i]){
                $('#menu:nth-child('+i+')').addClass('active');
                //무조건 안나와야하는 곳들 제외
                if(location.href.includes('log'))
                    break outer;
                //그 외 id가 일치하면
                if(location.href.includes(sidebar.pageIds[i][ids])){
                    //모바일이면서 마이페이지 외엔 사이드바 제외
                    if(i==6 && $(window).width() < 576 && !location.href.includes('26922'))
                        break outer;
                    if(i==6) sidebar.getPointCoupon();
                    $('#sidebar'+i).removeClass('d-none');
                    break outer; 
                }
            }
        }
    },

    getPointCoupon : ()=>{

        let pr1 = $.ajax({
            url : "/api/coupon.list.php",
            data : { "KEY" : apikey},
            type : "POST",
            async : false,
        }).done((data)=>{
            sidebar.coupon = data.success ? data.items?.length : 0 ;
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log('COUPON ERROR!!' + jqXHR + textStatus + " : " + errorThrown);
        });

        let pr2 = $.ajax({
            url : '/api/point.get.php',
            type : "POST",
            data : { "KEY" : apikey},
            async : false,
        }).done((data)=>{
            sidebar.point = data.point;
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log('POINT ERROR!!' + jqXHR+ textStatus + " : " + errorThrown);
        });

        $.when(pr1, pr2, user.info(), cat.getCatsData(), sidebar.getSubscribeMonth() ).done(()=>{
            sidebar.drawSidebar6();
        });
    },

    getSubscribeMonth : ()=>{        
        let pr = $.ajax(util.getAjaxSetting(serverUrl+"/api/subscribe/month/"+user.id))
            .done((data)=>{
                sidebar.month = data;
            }).fail((jqXHR, textStatus, errorThrown) => {
                console.log('MONTH ERROR!!' + jqXHR+ textStatus + " : " + errorThrown);
            });    
        return pr;
    },

    drawSidebar6 : () => {
        let $s6 = $("#sidebar6");
        $s6.find(".user_name").html(user.name);        
        let subText = sidebar.month == -1 ? '미구독회원' : `구독 ${sidebar.month}개월차`;
        $s6.find(".subscribe_month_text").html(subText);
        $s6.find(".user_point").html(sidebar.point);
        $s6.find(".user_coupon").html(sidebar.coupon);
        $.each(cat.cats, (i, item) => {
            let $cat = $('<button>').addClass('mycat_namebox fw_700 text-left border-0').attr('data-id', item.id).click(()=>{location.href = "/page/?M2_IDX=26922&id="+item.id });
            let $name = $('<span>').html(item.name);
            let sexual = item.is_male ? 'xy' : 'xx';
            $sexIcon = $('<img>').attr('src', 'https://ggaribox.s3.ap-northeast-2.amazonaws.com/sex_'+sexual+'_up.png').addClass('img-fluid');
            $cat.append($name, $sexIcon);
            $s6.find('.mycat_list').append($cat);
        });        

        if(location.href.includes("/page/?M2_IDX=26922")){
            catPage.init();
        }


    }

}

