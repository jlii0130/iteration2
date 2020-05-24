
//var url = "http://api.openweathermap.org/data/2.5/forecast?q=Perth,WA,AU&appid="
var url = "http://api.openweathermap.org/data/2.5/forecast?q=" 

//get the location and draw the circle on the map
function predict() {

    var riskarea = $( "#selectionarea option:selected" ).text();
    var riskdate = $( "#selforcastdate option:selected" ).text();
    console.log(riskarea)
    console.log('riskdate', riskdate)

    $.ajax({
        url: this.url + riskarea + ",WA,AU&appid=" + "a2d17cb6975c305afcd5bb881ce5f858",
        success:function(data) {
            console.log(data)
            coord = data.city.coord
            var res_neg = document.getElementById("result-negative")
            var res_pos = document.getElementById("result-positive")
            res_pos.innerHTML = ""
            res_neg.innerHTML = "Here is Medfly forecast for 5 days:\n"
            for (i=7; i<data.list.length;i=i+8) {
                var date = data.list[i].dt_txt
                console.log(date)
                var temp = data.list[i].main.temp
                calculateTemp(temp, date)
            }
            
        }
    })

}

function calculateTemp(temp, date) {
    $.ajax({
        url: "http://localhost:3000/api/get2/" + (temp - 273.15),
        success: function(data) {
            console.log("find data", data)
            var count = data[0]["count(*)"]
            var res_pos = document.getElementById("result-positive")
            if (count == 0) {
                var str = date.substring(0,10)+ " low" + "<br>"
                $("#result-negative").show()
                $("#result-positive").show()
                res_pos.innerHTML += str
                console.log(str)
            } else {
                var str = date.substring(0,10) + " high" + "<br>"
                $("#result-negative").show()
                $("#result-positive").show()
                res_pos.innerHTML += str
                console.log(str)
            }
        }
    })
}

function searchInDatabase(temp, coord) {
    $.ajax({
        url: "http://node-express-env.eba-gmkgnjkq.ap-southeast-2.elasticbeanstalk.com/api/get2/" + (temp - 273.15),
        success: function(data) {
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
    
    gPoint.append("circle").attr("cx", function() {
        return projection(point)[0]
    }).attr("cy", function() {
        return projection(point)[1]
    }).attr("r", 10)
    .style("fill", color);
}

function formatdate(date){
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}