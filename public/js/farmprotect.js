var url = 'http://node-express-env.eba-gmkgnjkq.ap-southeast-2.elasticbeanstalk.com'
//local host
//var url = "http://localhost:3000"


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

    var prostage = $( "#prostage option:selected" ).text();
    
   
    console.log(this.url + '/api/get3/' + prostage)
    //var selectfruit = document.getElementById("selectionfruit");
    //var valfruit = selectfruit.option[selectfruit.selectedIndex].value
 
    //console.log(valarea)
 
 
    //Precautionary
    $.ajax({
        url: this.url + '/api/get3/' + prostage,
        
        success:function(data) {
            var para = '';
            let div = $("#method1")
            if (data.length == 0) {
                para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
            } else {
                //console.log(data)
                //console.log(data[0]["Preventive Measure"]);
                para = ''
                for (i=0; i<data.length; i++){
                let measure = data[i]["Control Measure"]///error some may have two results
                let desc = data[i]["Control Desc"]
                let app = data[i]["Control Application"]
                para += "<p>" + measure + "</p>" + "<p>" + desc + "</p>" + "<p>" + app + "</p>"
                }
            }
 
            div.empty()  
            div.append(para)
            console.log(div)
        }
    })


}

function btn7(){
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();
    $("#mitresult").hide();
    $("#precauresult").show();


    var prostage = $( "#prostage option:selected" ).text();
    
   
    console.log(this.url + '/api/get4/' + prostage)
    //var selectfruit = document.getElementById("selectionfruit");
    //var valfruit = selectfruit.option[selectfruit.selectedIndex].value
 
    //console.log(valarea)
 
 
    //Precautionary
    $.ajax({
        url: this.url + '/api/get4/' + prostage,
        
        success:function(data) {
            var para = '';
            let div = $("#method2")
            console.log(data)
            if (data.length == 0) {
                para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
            } else {
                //console.log(data)
                //console.log(data[0]["Preventive Measure"]);
                para = ''
                for (i=0; i<data.length; i++){
                let measure = data[i]["Preventive Measure"]///error some may have two results
                let desc = data[i]["Preventive Desc"]
                let app = data[i]["Preventive Application"]
                para += "<p>" + measure + "</p>" + "<p>" + desc + "</p>" + "<p>" + app + "</p>"
                }
            }
 
            div.empty()  
            div.append(para)
            console.log(div)

        }
    })
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



    var notcurfruit = $( "#notcurfruit option:selected" ).text();
    
   
    console.log(this.url + '/api/get5/' + notcurfruit)
    //var selectfruit = document.getElementById("selectionfruit");
    //var valfruit = selectfruit.option[selectfruit.selectedIndex].value
 
    //console.log(valarea)
 
 
    //Precautionary
    $.ajax({
        url: this.url + '/api/get5/' + notcurfruit,
        
        success:function(data) {
            var para = '';
            let div = $("#method3")
            console.log(data)
            if (data.length == 0) {
                para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
            } else {
                //console.log(data)
                //console.log(data[0]["Preventive Measure"]);
                para = ''
                for (i=0; i<data.length; i++){
                let measure = data[i]["Control Measure"]///error some may have two results
                let desc = data[i]["Control Desc"]
                let app = data[i]["Control Application"]
                para += "<p>" + measure + "</p>" + "<p>" + desc + "</p>" + "<p>" + app + "</p>"
                }
            }
 
            div.empty()  
            div.append(para)
            console.log(div)

        }
    })
}