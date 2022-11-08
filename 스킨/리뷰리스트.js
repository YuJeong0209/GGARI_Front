$(()=>{
    review.checkWriteAble();

});


const review = {
    checkWriteAble : () => {
        let pr = sidebar.getSubscribeMonth();
        pr.done(()=>{
            if(sidebar.month == -1){
                $('button.btn-write').remove();
            } 
        });
    }


}