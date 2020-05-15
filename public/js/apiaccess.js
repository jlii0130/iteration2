
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
            for (i=0; i<data.list.length;i++) {
                var date = data.list[i].dt_txt
                console.log(riskdate)
                if(date.substring(0,10) == riskdate){
                    var temp = data.list[i].main.temp
                    console.log(temp)
                    searchInDatabase(temp,coord)
                    break
                }
            }
        }
    })
}

function searchInDatabase(temp, coord) {
    $.ajax({
        url: "http://localhost:3000/api/get2/" + (temp - 273.15),
        success: function(data) {
            console.log("find data", data)
            var count = data[0]["count(*)"]
            if (count == 0) {
                drawCircle("rgb(0,255,0)", coord)
            } else {
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