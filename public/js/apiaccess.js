
//var url = "http://api.openweathermap.org/data/2.5/forecast?q=Perth,WA,AU&appid="
var url = "http://api.openweathermap.org/data/2.5/forecast?q=" 

//show the currunt date
var countDownDate = new Date();

for(i=0;i<5;i++){
    var mydate = countDownDate.setDate(countDownDate.getDate() + 1);
    var formatedDate = formatdate(mydate)
    var selection = '<option>' + formatedDate +'</option>'
    para+=selection
}
para+='</div>'
document.write(para)

//draw the map
var projection = d3
		.geoMercator() //
		.scale(2000)	//
		.rotate([-0.25, 0.25, 0]) //
        //.center([115.858889, -18.952222]); //
        .center([121, -18.952222]);
	                                                                                                                                                                                                                                                                                                                                      
var path = d3.geoPath().projection(projection);　
	
	
var div = d3.select("body").append("div").attr("style", "display: none;").attr("id", "map")
var map = div.append("svg")
		.attr("width", 1200)
		.attr("height", 1400); 

d3.json("./img/countries.geo.json", drawMaps);

var footer = '<div></div>'
document.write(footer)

function showmap() {
    $("#dateshow").show()
    $("#map").show()
    $("#loadmap").hide()
}

function drawMaps(geojson) {
		map.selectAll("path")
			.data(geojson.features)
			.enter()
			.append("path")
			.attr("d", path)  //
			.attr("fill", "white")
			.attr("fill-opacity", 0.5)
			.attr("stroke", "#222");    
}

//get the location and draw the circle on the map
function predict() {

    var riskarea = $( "#selforcastloc option:selected" ).text();
    var riskdate = $( "#dateshow option:selected" ).text();
    console.log('riskdate', riskdate)

    $.ajax({
        url: this.url + riskarea + ",WA,AU&appid=" + "a2d17cb6975c305afcd5bb881ce5f858",
    
        success:function(data) {
            console.log(data)
            coord = data.city.coord
        
            data.list.forEach(element => {
                var date = element.dt_txt
                console.log(riskdate)
                if(date.substring(0,10) == riskdate){
                    if (temp < 285.15) {
                        var point = [coord.lon, coord.lat]
                        var svg = d3.select("svg")
                        var gPoint = svg.append("g")
                        gPoint.append("circle").attr("cx", function() {
                            return projection(point)[0]
                        }).attr("cy", function() {
                            return projection(point)[1]
                        }).attr("r", 10)
                        .style("fill", "rgb(0,128,0)");
                    }else{
                        var point = [coord.lon, coord.lat]
                        var svg = d3.select("svg")
                        var gPoint = svg.append("g")
                        gPoint.append("circle").attr("cx", function() {
                            return projection(point)[0]
                        }).attr("cy", function() {
                            return projection(point)[1]
                        }).attr("r", 10)
                        .style("fill", "rgb(255,0,0)");
                     }
                }
                
            });

                

            var temp = data.list[39].main.temp
            console.log(temp)
        }
    })

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