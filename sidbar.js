
$(()=>{
    sidebar.showSidebar();
});


var sidebar = {
    idSub : 1,
    //페이지 번호 등록하기!!
    pageIds : [
        [],
        ["26951", "26950", "26059", "26060", "26061"],
        ["26044"],
        ["26045"],
        ["26058"],
        ["26802", "26801", "26803", "26800"],
        ["26922", "26926", "26065", "26067"],
    ],

    showSidebar : () => {
        outer : for(var i=1; i<7; i++){
            inner : for(let ids in sidebar.pageIds[i]){
                if(location.href.includes(sidebar.pageIds[i][ids])){
                    $('#sidebar'+i).removeClass('d-none');                    
                    break outer;
                }                
            }
        }
    }

}

