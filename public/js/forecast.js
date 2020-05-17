
var url = 'http://node-express-env.eba-gmkgnjkq.ap-southeast-2.elasticbeanstalk.com'
// });

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
            let div = $("#abc")
            if (data.length == 0) {
                para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
            } else {
                let split = data[0].Preventive_Methods.split(',')
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
