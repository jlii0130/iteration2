
//var url = 'http://ttie-env.eba-9cjewynp.ap-southeast-2.elasticbeanstalk.com'
//local host
var url = "http://localhost:3000"
// });
//prediction page
//var q1

function btn1(){
    $("#selectlocation").hide()
    $("#farmsize").show();
    $("#selectfruit").hide();
    $("#result").hide();
}
function btn2(){
    $("#selectlocation").hide();
    $("#farmsize").hide();
    $("#selectfruit").show();
    $("#result").hide();
}
function btn3(){
    console.log("111")
    $("#selectlocation").hide();  
    $("#farmsize").hide();
    $("#selectfruit").hide();
    choose();
    $("#result").show();

}




function choose() {

    //var selectarea = document.getElementById("selectionarea");
    //var valarea = selectarea.option[selectarea.selectedIndex].value

   // var valarea = $( "#selectlocation option:selected" ).text();
    var valsize = $( "#farmsize option:selected" ).text();
    var valfruit = $( "#selectfruit option:selected" ).text();
    
    console.log(this.url + '/api/get/' + valfruit + '/' + valsize)
    //var selectfruit = document.getElementById("selectionfruit");
    //var valfruit = selectfruit.option[selectfruit.selectedIndex].value

    //console.log(valarea)


    //Precautionary
    $.ajax({
        url: this.url + '/api/get/' + valfruit + '/' + valsize,
        
        success:function(data) {
            var para = '';
            let div = $("#method1")
            if (data.length == 0) {
                para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
            } else {
                //console.log(data)
                //console.log(data[0]["Preventive Measure"]);
                para = '<p>Hello，here is our suggestion:</p>'
                for (i=0; i<data.length; i++){
                let measure = data[i]["Preventive Measure"]///error some may have two results
                let desc = data[i]["Preventive Desc"]
                para += "<p>" + measure + "</p>" + "<p>" + desc + "</p>"
                }
            }

            div.empty()  
            div.append(para)
            console.log(div)
        }
    })
} 
