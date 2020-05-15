function btn1(){
    $("#curfarming").hide()
    $("#selectfruit").show();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();

}
function btn2(){
    $("#curfarming").hide()
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();
    $("#season").show();
}
function btn3(){
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").show();
    $("#stage").hide();
    $("#faceissue").hide();
}
function btn4(){
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").show();
    $("#faceissue").hide();
}

function btn5(){
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").show();
}

function btn6(){
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();
    $("#mitresult").show();
}

function btn7(){
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();
    $("#mitresult").hide();
    $("#precauresult").show();

}

//jump to What fruit are you growing in your farm? (1/2)
function btn8(){
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();
    $("#mitresult").hide();
    $("#precauresult").hide();
    $("#season").hide();
    $("#fruitgrow").show();
}

//show the mitigation method 
function btn9(){
    $("#precauresult").hide();
    $("#season").hide();
    $("#fruitgrow").hide();
    $("#protectmitigate").show();   
}