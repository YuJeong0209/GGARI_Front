
        $(function () {
            var input_bg = $(".form-control").css("border");  // #input1 은 input 의 id 값 - 기존 배경색 저장
            $("input").blur(function () {
                if ($(this).val()) $(this).css("border", "1px solid #BEBCBB"); /* 값이 입력되면 #EEF6E2 로 변경한다 */
                else $(this).css("border", input_bg);  /* 입력값이 지워지면 기본배경색으로 */
            });
        });



        $("form").on("propertychange change paste input", function () {
            if ($("#ID").val() != 0) {
                $(".gray_btn1").addClass("gray_btn_point")
            }
            else {
                $(".gray_btn1").removeClass("gray_btn_point")
            }
        });


        $("form").on("propertychange change paste input", function () {
            if ($("#ID").val() != 0 && $("#NAME").val() != 0 && $("#PW").val() != 0 && $("#PWD").val() != 0 && $("#EMAIL").val() != 0 && $("#M_MOBILE1").val() != 0&& $("#M_MOBILE2").val() != 0&& $("#M_MOBILE3").val() != 0) {
                $('.submit_btn').attr('src', 'https://ggaribox.s3.ap-northeast-2.amazonaws.com/join_s_button_chk.png');
                $('.submit_btn').addClass("shadow1")
            }
            else {
                $('.submit_btn').attr('src', 'https://ggaribox.s3.ap-northeast-2.amazonaws.com/join_s_button.png');
                $('.submit_btn').removeClass("shadow1")
            }
        });