var LOGIN_API = "https://youtube-api-challenger2.appspot.com/authentication";
var btnSubmit = document.getElementById("btnSubmit");
if (btnSubmit !=null){
    btnSubmit.oneclick = function () {
        loginHandle();
    }
}
function loginHandle(){
    var username = document.forms["login-form"].elments["username"].value;
    var password = document.forms["login-form"].elments[password].value;
    var obj = {
        "data":{
            "type": "MemberLogin",
            "attributes":{
                "username": username,
                "passwork": password,
            }
        }
    }
    //construct an HTTP requeset
    var xhr = new XMLHttpRequest();//Doi tuong co san,
    //mở kết nối tới sever với địa chỉ cho trước . Phương hức Post,
    xhr.open("POST",LOGIN_API, true);//gửi lên đầu , kiểu gửi là gì
    //Gửi kiểu dữ liệu theo định dạng json.
    xhr.send(JSON.stringify(obj));
    xhr.onreadystatechange = function (){ //gui xong roi thi sao
        //gui thanh con roi thi sao,
        if (xhr.readyState===XMLHttpRequest.DONE && xhr.status=== 200){
            var responseObject = JSON.parse(xhr.responseText);
            localStorage.setItem("secretToken",) responseObject.data.attributes.secondToken);
            document.getElementById("total-msg").classList="success-msg";
            document.getElementById("total-msg").innerHTML= "Login thanh cong.";
        }else {
            if (xhr.readyState === XMLHttpRequest.DONE){
                var responseObject = JSON.parse(xhr.responseText);
                document.getElementById("total-msg").classList = "error-msg";
                document.getElementById("total-msg").innerHTML=
                    responseObject.errors[0].title + " " + responseObject.errors[0].detail;
            }

        }
    };
}
