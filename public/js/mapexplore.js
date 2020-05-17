var url = 'http://node-express-env.eba-gmkgnjkq.ap-southeast-2.elasticbeanstalk.com'
//local host
//var url = "http://localhost:3000"

function btn1(){
    $("#curfarming").hide()
    $("#mapfruit").show();
   
}
function btn3(){
    $("#curfarming").hide()
    $("#mapfruit").hide();
    $("#mapsize").show();
}

function btn4(){
    $("#curfarming").hide()
    $("#mapfruit").hide();
    $("#mapsize").hide();
    $("#mapstage").show();
}

function getmitiresult(){
    $("#curfarming").hide()
    $("#mapstage").hide();
    $("#mapresult").show();

   
    var farmstage = $( "#mapstage option:selected" ).text();
    
   
   console.log(this.url + '/api/get3/' + farmstage)
   //var selectfruit = document.getElementById("selectionfruit");
   //var valfruit = selectfruit.option[selectfruit.selectedIndex].value

   //console.log(valarea)


   //Precautionary
   $.ajax({
       url: this.url + '/api/get3/' + farmstage,
       
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