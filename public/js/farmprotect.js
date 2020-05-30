var url = 'http://node-express-env.eba-gmkgnjkq.ap-southeast-2.elasticbeanstalk.com'
//local host
//var url = "http://localhost:3000"


function btn1() {
    $("#curfarming").hide()
    $("#selectfruit").show();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();

}

function btn2() {
    $("#curfarming").hide()
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();
    $("#season").show();
}

function btn3() {
    if (document.getElementById("profruit").value == "none") {
        alert("Please select an option.");
    }
    else {
        $("#selectlocation").hide();
        $("#selectfruit").hide();
        $("#farmsize").show();
        $("#stage").hide();
        $("#faceissue").hide();
    }
}

function btn4() {
    if (document.getElementById("profarmsize").value == "none") {
        alert("Please select an option.");
    }
    else {
        $("#selectlocation").hide();
        $("#selectfruit").hide();
        $("#farmsize").hide();
        $("#stage").show();
        $("#faceissue").hide();
    }
}

function btn5() {
    if (document.getElementById("prostage").value == "none") {
        alert("Please select an option.");
    }
    else {
        $("#selectlocation").hide();
        $("#selectfruit").hide();
        $("#farmsize").hide();
        $("#stage").hide();
        $("#faceissue").show();
    }
}

function btn6() {

    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();
    $("#Qs").hide();
    $("#mitresult").show();

    var prostage = $("#prostage option:selected").text();


    console.log(this.url + '/api/get3/' + prostage)
    //var selectfruit = document.getElementById("selectionfruit");
    //var valfruit = selectfruit.option[selectfruit.selectedIndex].value

    //console.log(valarea)


    //Mitigation
    $.ajax({
        url: this.url + '/api/get3/' + prostage,

        success: function (data) {
            var para = '';
            let div = $("#method1")
            if (data.length == 0) {
                para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
            } else {
                //console.log(data)
                //console.log(data[0]["Preventive Measure"]);
                // para = '<p>Please find below the recommended Mitigation Methods:</p>'
                para += '<tr>'
                para += '<th>Name</th>'
                para += '<th>Description</th>'
                para += '<th>Application</th>'
                para += '<th>Explanation</th>'
                para += '</tr>'
                for (i = 0; i < data.length; i++) {
                    let measure = data[i]["Control Measure"]///error some may have two results
                    let desc = data[i]["Control Desc"]
                    let app = data[i]["Control Application"]
                    let explain = data[i]["Control Explanation"]
                    // para += "<p>Name:</p>"+"<p>" + measure + "</p>" + "<p>Description:</p>" + "<p>" + desc + "</p>" + "<p>Application:</p>" + 
                    // "<p>" + app + "</p>" + "<p>Explanation:</p>" + "<p>" + explain + "</p>"
                    para += '<tr>' +
                    '<td style="border-spacing: 50px; text-align:justify">' + measure + '</td>'+
                    '<td style="border-spacing: 10px;text-align:justify">' + desc + '</td>' +
                    '<td style="border-spacing: 10px;text-align:justify">' + app + '</td>' +
                    '<td style="border-spacing: 10px;text-align:justify">' + explain + '</td>' +
                    '</tr>'
                }
            }

            div.empty()
            div.append(para)
            console.log(div)
        }
    })


}

function btn7() {
    $("#selectlocation").hide();
    $("#selectfruit").hide();
    $("#farmsize").hide();
    $("#stage").hide();
    $("#faceissue").hide();
    $("#mitresult").hide();
    $("#Qs").hide();
    $("#precauresult").show();


    var prostage = $("#prostage option:selected").text();


    console.log(this.url + '/api/get4/' + prostage)
    //var selectfruit = document.getElementById("selectionfruit");
    //var valfruit = selectfruit.option[selectfruit.selectedIndex].value

    //console.log(valarea)


    //Precautionary
    $.ajax({
        url: this.url + '/api/get4/' + prostage,

        success: function (data) {
            var para = '';
            let div = $("#method2")
            // console.log(data)
            if (data.length == 0) {
                para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
            } else {
                //console.log(data)
                //console.log(data[0]["Preventive Measure"]);
                // para = '<p>Please find below the recommended Precautionary Methods:</p>'
                // para += '<table class="table-striped table-light">'
                para += '<tr>'
                para += '<th>Name</th>'
                para += '<th>Description</th>'
                para += '<th>Application</th>'
                para += '<th>Explanation</th>'
                para += '</tr>'
                for (i = 0; i < data.length; i++) {
                    let measure = data[i]["Preventive Measure"]///error some may have two results
                    let desc = data[i]["Preventive Desc"]
                    let app = data[i]["Preventive Application"]
                    let explain = data[i]["Preventive Explanation"]
                    // para += "<p>Name:</p>"+"<p>" + measure + "</p>" + "<p>Description:</p>" + "<p>" + desc + "</p>" + "<p>Application:</p>" + 
                    // "<p>" + app + "</p>" + "<p>Explanation:</p>" + "<p>" + explain + "</p>"
                    para += '<tr>' +
                            '<td style="border-spacing: 50px; text-align:justify">' + measure + '</td>'+
                            '<td style="border-spacing: 10px;text-align:justify">' + desc + '</td>' +
                            '<td style="border-spacing: 10px;text-align:justify">' + app + '</td>' +
                            '<td style="border-spacing: 10px;text-align:justify">' + explain + '</td>' +
                            '</tr>'
                }
                   // para += '</table>'
            }

            div.empty()
            div.append(para)
            console.log(div)

        }
    })
}

//jump to What fruit are you growing in your farm? (1/2)
function btn8() {
    if (document.getElementById("proseason").value == "none") {
        alert("Please select an option.");
    }
    else {
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
}

//show the precautionary method 
function btn9() {
    if (document.getElementById("notcurfruit").value == "none") {
        alert("Please select an option.");
    }
    else {
        $("#precauresult").hide();
        $("#season").hide();
        $("#fruitgrow").hide();
        $("#Qs").hide();
        $("#protectmitigate").show();



        var notcurfruit = $("#notcurfruit option:selected").text();


        console.log(this.url + '/api/get5/' + notcurfruit)
        //var selectfruit = document.getElementById("selectionfruit");
        //var valfruit = selectfruit.option[selectfruit.selectedIndex].value

        //console.log(valarea)


        //Precautionary
        $.ajax({
            url: this.url + '/api/get5/' + notcurfruit,

            success: function (data) {
                var para = '';
                let div = $("#method3")
                // console.log(data)
                if (data.length == 0) {
                    para = '<p>(Sorry, due to our data limitation, we could not provide any suggestion for your selection)</p>'
                } else {
                    //console.log(data)
                    //console.log(data[0]["Preventive Measure"]);
                    // para = '<p>Please find below the recommended Mitigation Methods:</p>'
                    para += '<tr>'
                    para += '<th>Name</th>'
                    para += '<th>Description</th>'
                    para += '<th>Application</th>'
                    para += '<th>Explanation</th>'
                    para += '</tr>'
                    for (i = 0; i < data.length; i++) {
                        let measure = data[i]["Control Measure"]///error some may have two results
                        let desc = data[i]["Control Desc"]
                        let app = data[i]["Control Application"]
                        let explain = data[i]["Control Explanation"]
                        para += "<p>Name:</p>"+"<p>" + measure + "</p>" + "<p>Description:</p>" + "<p>" + desc + "</p>" + "<p>Application:</p>" + 
                        "<p>" + app + "</p>" + "<p>Explanation:</p>" + "<p>" + explain + "</p>"
                        para += '<tr>' +
                        '<td style="border-spacing: 50px; text-align:justify">' + measure + '</td>'+
                        '<td style="border-spacing: 10px;text-align:justify">' + desc + '</td>' +
                        '<td style="border-spacing: 10px;text-align:justify">' + app + '</td>' +
                        '<td style="border-spacing: 10px;text-align:justify">' + explain + '</td>' +
                        '</tr>'
                    }
                }

                div.empty()
                div.append(para)
                console.log(div)

            }
        })
    }
}