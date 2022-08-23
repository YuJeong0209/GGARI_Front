$(function () {
    var input_bg = $(".form-control").css("border");  // #input1 은 input 의 id 값 - 기존 배경색 저장
    $("input").blur(function () {
        if ($(this).val()) $(this).css("border", "1px solid #BEBCBB"); /* 값이 입력되면 #EEF6E2 로 변경한다 */
        else $(this).css("border", input_bg);  /* 입력값이 지워지면 기본배경색으로 */
    });
});


/*pc 이메일 휴대폰 토글*/
function setDisplay() {
    if ($('input:radio[id=AK_KIND1]').is(':checked')) {
        document.querySelector(".phone_toggle").classList.remove("d-none");
        document.querySelector(".email_toggle").classList.add("d-none");
    }
    else {
        document.querySelector(".email_toggle").classList.remove("d-none");
        document.querySelector(".phone_toggle").classList.add("d-none");
    }
}

$(".pass_btn").on("click", function (e) {
    $(".pass_wrap").removeClass('d-none');
    $(".default_wrap").addClass('d-none');
    $(".id_wrap").addClass('d-none');
});

$(".id_btn").on("click", function (e) {
    $(".id_wrap").removeClass('d-none');
    $(".default_wrap").addClass('d-none');
    $(".pass_wrap").addClass('d-none');
});





//아이디찾기 버튼 변경
$(".form_1").on("propertychange change paste input", function () {
    if ($(".login_id").val() != 0 && $(".login_email").val() != 0) {

        $(".submit_btn").addClass("gray_btn_point")
    }
    else {
        $(".submit_btn").removeClass("gray_btn_point")
    }
});




//비밀번호로찾기 (휴대폰) 버튼 변경
$(".form_2").on("propertychange change paste input", function () {
    if ($(".pw_login_id").val() != 0 && $(".pw_login_name").val() != 0 && $(".phone_01").val() != 0 && $(".phone_02").val() != 0 && $(".phone_03").val() != 0) {

        $(".submit_btn2").addClass("gray_btn_point")
    }
    else {
        $(".submit_btn2").removeClass("gray_btn_point")
    }
});
//비밀번호로찾기(이메일)  버튼 변경
$(".form_2_email").on("propertychange change paste input", function () {
    if ($(".form2email").val() != 0) {

        $(".submit_btn2").addClass("gray_btn_point")
    }
    else {
        $(".submit_btn2").removeClass("gray_btn_point")
    }
});