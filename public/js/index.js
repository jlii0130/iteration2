// $(document).ready(function () {
//     $.ajax({
//         //url: 'http://localhost:3000/api/get/aaa',
//         url: 'ttie.eba-9cjewynp.ap-southeast-2.elasticbeanstalk.com',
//         success:function(data) {
//             let all = data;
//             console.log(data);
//             let fruit = $("#111");
            
//             let a = data[0].L_Name
//             let para = '<p>' + a + '</p>'
//             fruit.append(para)

//         }
//     });


var url = 'http://ttie-env.eba-9cjewynp.ap-southeast-2.elasticbeanstalk.com'
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
            let div = $("#qwert")
            let para = '<p>' + data[0].Preventive_Methods + data[0].Control_Methodds+'</p>'
            div.append(para)
        }
    })
} 
