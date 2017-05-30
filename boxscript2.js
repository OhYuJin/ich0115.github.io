function layerControl_over() {
      var f1 = document.getElementById("layer1").style;
        var f2 = document.getElementById("layer2").style;

         f2.display = '';
         f1.display = none;
    }


    function layerControl_out() {
      var f1 = document.getElementById("layer1").style;
        var f2 = document.getElementById("layer2").style;

         f2.display = 'none';
         f1.display = '';
    }

function Yesterday(){
		var DAY = new Date();
		var dd = DAY.getDate()-1; //오늘날짜 -1
		var	mm = DAY.getMonth()+1; //January is 0!
		var yyyy = DAY.getFullYear();
		if(dd<10)
			dd='0'+dd;
		if(mm<10)
			mm='0'+mm;
		DAY = yyyy+""+mm+""+dd;
		return DAY;
	}
	
$(document).ready(function(){
	var day = Yesterday();
	//$(document).getElementById("boxbutton").value = day + " BOXOFFICE"
	$.ajax({
		url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml",
		type: "GET",
		dataType: "xml",
		data: "key=9c658a84378052c0c5ba55fb238b6c1b&targetDt="+day+"",
		success: function(xml){
			var data = $(xml).find("boxOfficeResult");
			var list = $(data).find("dailyBoxOfficeList");
			var box = $(list).find("dailyBoxOffice");
			var listLength = list.length;
		
			if(listLength){
				var str = "";
				$(box).each(function(){
					str += "<tr><td class=movRank>"+$(this).find("rank").text()+
					"</td><td class=movName>" + $(this).find("movieNm").text() + "</td></tr>";
				});
				//$("#topTitle").append(day+" BOXOFFICE");
				$("#ranking").append(str);
				$("#ranking2").append(str);
			}
		}
	})
});

function hidee()
{
	if ($("#boxoffice").css("display") == "block")
	{
		$("#schedule").css("height","570px");
		$("#boxoffice").css("display","none");
		$("#boxBtn").removeClass("button2").addClass("button3");
	}
	else if ($("#boxoffice").css("display") == "none")
	{
		$("#schedule").css("height","290px");
		$("#boxoffice").css("display","block");
		$("#boxBtn").removeClass("button3").addClass("button2");
	}
}

function hideSche()
{
	if ($("#scheBtn").attr('class') == "button button2")
	{
		$("#scheBtn").removeClass("button2").addClass("button3");
		$("#schedule").attr("src", "");
	}
}