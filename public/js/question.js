
var url = 'http://ttie-env.eba-9cjewynp.ap-southeast-2.elasticbeanstalk.com'
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
    $("#result").show();
}




function choose() {

    //var selectarea = document.getElementById("selectionarea");
    //var valarea = selectarea.option[selectarea.selectedIndex].value

    var valarea = $( "#selectionarea option:selected" ).text();
    var valfruit = $( "#selectionfruit option:selected" ).text();
    
    //var selectfruit = document.getElementById("selectionfruit");
    //var valfruit = selectfruit.option[selectfruit.selectedIndex].value

    console.log(valarea)
    console.log(valfruit)

    $.ajax({
        url: this.url + '/api/get/' + valarea + '/' + valfruit,
        
        success:function(data) {
            console.log(data)
            
            var para = '';
            let div = $("#qwert")
            if (data.length == 0) {
                para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
            } else {

                let split = data[0].Control_Methodds.split(',')
                para = '<p>Hello，here is our suggestion:</p>'
                var i;
                
                for (i=0; i<split.length; i++) {
                    para += '<p>' + (i+1) + '. ' + split[i] + '</p>'
                }
            }
            div.empty()  
            div.append(para)
            console.log(div)
        }
    })
} 
