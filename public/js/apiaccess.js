
//var url = "http://api.openweathermap.org/data/2.5/forecast?q=Perth,WA,AU&appid="
var url = "http://api.openweathermap.org/data/2.5/forecast?q="
var local = "http://localhost:3000/"
var server = "http://node-express-env.eba-gmkgnjkq.ap-southeast-2.elasticbeanstalk.com/"

//get the location and draw the circle on the map
function predict() {

    var riskarea = $("#selectionarea option:selected").text();
    var riskdate = $("#selforcastdate option:selected").text();
    console.log(riskarea)
    console.log('riskdate', riskdate)

    $.ajax({
        url: this.url + riskarea + ",WA,AU&appid=" + "a2d17cb6975c305afcd5bb881ce5f858",
        success: function (data) {
            console.log(data)
            coord = data.city.coord
            // var res_neg = document.getElementById("result-negative")
            // var res_pos = document.getElementById("result-positive")
            let para_pos = ''
            let para_neg = ''
            let res_pos = $("#result-positive")
            let res_neg = $("#result-negative")
            
            para_neg = "Here is Medfly forecast for 5 days:\n"
            para_pos += '<tr>'
            para_pos += '<th style="text-align:center;">Date</th>'
            para_pos += '<th style="text-align:center;">Probability</th>'
            para_pos += '</tr>'
            
            setTimeout(function () {
                console.log("processing 1")
                var date = data.list[7].dt_txt
                var temp = data.list[7].main.temp
                $("#result-negative").show()
                $("#result-positive").show()
                calculateTemp(temp, date)

            }, 0)
            setTimeout(function () {
                console.log("processing 2")
                var date = data.list[15].dt_txt
                var temp = data.list[15].main.temp
                $("#result-negative").show()
                $("#result-positive").show()
                calculateTemp(temp, date)
            }, 1000)
            setTimeout(function () {
                console.log("processing 3")
                var date = data.list[23].dt_txt
                var temp = data.list[23].main.temp
                $("#result-negative").show()
                $("#result-positive").show()
                calculateTemp(temp, date)
            }, 2000)
            setTimeout(function () {
                console.log("processing 4")
                var date = data.list[31].dt_txt
                var temp = data.list[31].main.temp
                $("#result-negative").show()
                $("#result-positive").show()
                calculateTemp(temp, date)
            }, 3000)
            setTimeout(function () {
                console.log("processing 5")
                var date = data.list[39].dt_txt
                var temp = data.list[39].main.temp
                $("#result-negative").show()
                $("#result-positive").show()
                calculateTemp(temp, date)
            }, 4000)

            // for (i=7; i<data.list.length;i=i+8) {
            //     var date = data.list[i].dt_txt
            //     var temp = data.list[i].main.temp
            //     $("#result-negative").show()
            //     $("#result-positive").show()
            //     if (i==7) {
            //         calculateTemp(temp, date)
            //     } else {
            //         setTimeout(calculateTemp(temp,date),1000)
            //     }
            // }


            res_neg.empty()
            res_neg.append(para_neg)
            console.log(res_neg)
            res_pos.empty()
            res_pos.append(para_pos)
            console.log(res_pos)

        }
    })
}

function calculateTemp(temp, date) {
    $.ajax({
        url: this.server + "api/get2/" + (temp - 273.15),
        success: function (data) {
            var count = data[0]["count(*)"]
            // var res_pos = document.getElementById("result-positive")
            let res_pos = $("#result-positive")
            console.log(temp, date)
            if (count == 0) {
                // var str = date.substring(0, 10) + " low" + "<br>"
                var str = '<tr>' + 
                            '<td style="text-align:center;">' + date.substring(0, 10) + '</td>' + 
                            '<td style="text-align:center;">' + "Low" + '</td>' + 
                          '</tr>'
                // res_pos += '<tr>' + '<td>' + str + '</td>' + '</tr>'
                res_pos.append(str) 
                // res_pos.innerHTML += str 
                console.log(str)
            } else {
                // var str = date.substring(0, 10) + " high" + "<br>"
                var str = '<tr>' + 
                            '<td style="text-align:center;">' + date.substring(0, 10) + '</td>' + 
                            '<td style="text-align:center;">' + "High" + '</td>' + 
                          '</tr>'
                // res_pos += '<tr>' + '<td>' + str + '</td>' + '</tr>'
                // res_pos.innerHTML += str 
                res_pos.append(str)
                console.log(str)
            }
        }
    })
}

function searchInDatabase(temp, coord) {
    $.ajax({
        url: "http://node-express-env.eba-gmkgnjkq.ap-southeast-2.elasticbeanstalk.com/api/get2/" + (temp - 273.15),
        success: function (data) {
            console.log("find data", data)
            var count = data[0]["count(*)"]
            var res_neg = document.getElementById("result-negative")
            var res_pos = document.getElementById("result-positive")
            if (count == 0) {
                res_neg.style.display = "none"
                res_pos.style.display = "block"
                drawCircle("rgb(0,255,0)", coord)
            } else {
                res_neg.style.display = "block"
                res_pos.style.display = "none"
                drawCircle("rgb(255,0,0)", coord)
            }
        }
    })
}



function drawCircle(color, coord) {
    var point = [coord.lon, coord.lat]
    var svg = d3.select("svg")
    var gPoint = svg.append("g")

    gPoint.append("circle").attr("cx", function () {
        return projection(point)[0]
    }).attr("cy", function () {
        return projection(point)[1]
    }).attr("r", 10)
        .style("fill", color);
}

function formatdate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}