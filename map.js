// 마커를 담을 배열입니다
var markers = [];

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new daum.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };  

	
// hashmap 사용을 위한 선언
HashMap = function(){
 this.map = new Array();
};   
HashMap.prototype = {   
    put : function(key, value){   
        this.map[key] = value;
    },   
    get : function(key){   
        return this.map[key];
    },
    containsKey : function(key){    
     return key in this.map;
    },
    containsValue : function(value){    
     for(var prop in this.map){
      if(this.map[prop] == value) return true;
     }
     return false;
    },
    isEmpty : function(key){    
     return (this.size() == 0);
    },
    clear : function(){   
     for(var prop in this.map){
      delete this.map[prop];
     }
    },
    remove : function(key){    
     delete this.map[key];
    },
    keys : function(){   
        var keys = new Array();   
        for(var prop in this.map){   
            keys.push(prop);
        }   
        return keys;
    },
    values : function(){   
     var values = new Array();   
        for(var prop in this.map){   
         values.push(this.map[prop]);
        }   
        return values;
    },
    size : function(){
      var count = 0;
      for (var prop in this.map) {
        count++;
      }
      return count;
    }
};
	
var hashmap = new HashMap();
hashmap.put("메가박스 연수점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=129");
hashmap.put("메가박스 인천논현점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=579");
hashmap.put("메가박스 청라점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=625");
hashmap.put("메가박스 송도점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=656");
hashmap.put("메가박스 검단점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=574");

hashmap.put("메가박스 제주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=335");
hashmap.put("메가박스 제주아라점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=487");

hashmap.put("메가박스 남춘천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=650");
hashmap.put("메가박스 속초점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=357");
hashmap.put("메가박스 원주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=307");
hashmap.put("메가박스 원주센트럴점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=622");

hashmap.put("메가박스 공주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=216");
hashmap.put("메가박스 대전점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=225");
hashmap.put("메가박스 보령점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=575");
hashmap.put("메가박스 세종점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=402");
hashmap.put("메가박스 제천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=417");
hashmap.put("메가박스 진천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=594");
hashmap.put("메가박스 천안점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=219");
hashmap.put("메가박스 충주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=420");

hashmap.put("메가박스 광주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=251");
hashmap.put("메가박스 광주상무점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=195");
hashmap.put("메가박스 광주하남점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=196");
hashmap.put("메가박스 남원점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=324");
hashmap.put("메가박스 목포점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=543");
hashmap.put("메가박스 목포하당점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=596");
hashmap.put("메가박스 송천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=211");
hashmap.put("메가박스 순천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=406");
hashmap.put("메가박스 신대점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=525");
hashmap.put("메가박스 여수점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=192");
hashmap.put("메가박스 전대점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=202");
hashmap.put("메가박스 전주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=248");
hashmap.put("메가박스 첨단점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=424");

hashmap.put("메가박스 강남점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=28");
hashmap.put("메가박스 씨티점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=610");
hashmap.put("메가박스 동대문점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=342");
hashmap.put("메가박스 목동점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=250");
hashmap.put("메가박스 상봉점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=378");
hashmap.put("메가박스 센트럴점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=27");
hashmap.put("메가박스 송파파크하비오점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=636");
hashmap.put("메가박스 수유점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=432");
hashmap.put("메가박스 신촌점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=252");
hashmap.put("메가박스 은평점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=379");
hashmap.put("메가박스 이수점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=22");
hashmap.put("메가박스 창동점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=641");
hashmap.put("메가박스 코엑스점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=243");
hashmap.put("메가박스 화곡점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=558");
hashmap.put("메가박스 아트나인점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=456");

hashmap.put("메가박스 김포점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=494");
hashmap.put("메가박스 남양주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=403");
hashmap.put("메가박스 동탄점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=564");
hashmap.put("메가박스 백석점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=450");
hashmap.put("메가박스 별내점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=541");
hashmap.put("메가박스 분당점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=82");
hashmap.put("메가박스 수원점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=245");
hashmap.put("메가박스 수원남문점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=486");
hashmap.put("메가박스 안산중앙점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=560");
hashmap.put("메가박스 양주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=421");
hashmap.put("메가박스 영통점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=321");
hashmap.put("메가박스 오산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=545");
hashmap.put("메가박스 의정부민락점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=609");
hashmap.put("메가박스 일산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=61");
hashmap.put("메가박스 일산벨라시타점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=616");
hashmap.put("메가박스 킨텍스점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=391");
hashmap.put("메가박스 파주금촌점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=540");
hashmap.put("메가박스 파주운정점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=640");
hashmap.put("메가박스 파주출판도시점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=114");
hashmap.put("메가박스 평택점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=116");
hashmap.put("메가박스 하남스타필드점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=619");
hashmap.put("메가박스 용인점(드라이브M)", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=519");

hashmap.put("메가박스 거창점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=565");
hashmap.put("메가박스 경남대점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=372");
hashmap.put("메가박스 경산하양점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=626");
hashmap.put("메가박스 경주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=165");
hashmap.put("메가박스 구미점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=478");
hashmap.put("메가박스 구미강동점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=451");
hashmap.put("메가박스 김천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=578");
hashmap.put("메가박스 대구점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=246");
hashmap.put("메가박스 덕천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=467");
hashmap.put("메가박스 동대구점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=634");
hashmap.put("메가박스 문경점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=576");
hashmap.put("메가박스 부산극장점(본관)", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=264");
hashmap.put("메가박스 부산극장점(신관)", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=264");
hashmap.put("메가박스 부산대점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=607");
hashmap.put("메가박스 북대구점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=296");
hashmap.put("메가박스 사천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=573");
hashmap.put("메가박스 서면점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=157");
hashmap.put("메가박스 안동점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=515");
hashmap.put("메가박스 양산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=657");
hashmap.put("메가박스 울산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=249");
hashmap.put("메가박스 진주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=569");
hashmap.put("메가박스 창원점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=322");
hashmap.put("메가박스 장산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=293");

hashmap.put("롯데시네마 서귀포점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=236");
hashmap.put("롯데시네마 제주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=353");

hashmap.put("롯데시네마 남원주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=234");
hashmap.put("롯데시네마 동해점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=374");

hashmap.put("롯데시네마 대전점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=224");
hashmap.put("롯데시네마 대전둔산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=226");
hashmap.put("롯데시네마 서산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=218");
hashmap.put("롯데시네마 서청주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=448");
hashmap.put("롯데시네마 아산터미널점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=493");
hashmap.put("롯데시네마 청주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=349");
hashmap.put("롯데시네마 청주용암점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=629");
hashmap.put("롯데시네마 청주충대점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=485");

hashmap.put("롯데시네마 광주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=200");
hashmap.put("롯데시네마 군산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=205");
hashmap.put("롯데시네마 목포점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=185");
hashmap.put("롯데시네마 수완점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=431");
hashmap.put("롯데시네마 전주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=208");
hashmap.put("롯데시네마 전주평화점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=445");
hashmap.put("롯데시네마 충장로점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=496");

hashmap.put("롯데시네마 경산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=449");
hashmap.put("롯데시네마 경주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=429");
hashmap.put("롯데시네마 구미점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=168");
hashmap.put("롯데시네마 구미공단점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=167");
hashmap.put("롯데시네마 대구광장점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=444");
hashmap.put("롯데시네마 동성로점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=312");
hashmap.put("롯데시네마 상인점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=590");
hashmap.put("롯데시네마 성서점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=180");
hashmap.put("롯데시네마 율하점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=385");
hashmap.put("롯데시네마 포항점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=365");
hashmap.put("롯데시네마 프리미엄칠곡점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=182");

hashmap.put("롯데시네마 광복점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=526");
hashmap.put("롯데시네마 김해부원점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=517");
hashmap.put("롯데시네마 김해아울렛점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=473");
hashmap.put("롯데시네마 대영점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=649");
hashmap.put("롯데시네마 동래점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=313");
hashmap.put("롯데시네마 동부산아울렛점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=542");
hashmap.put("롯데시네마 마산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=137");
hashmap.put("롯데시네마 마산터미널점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=138");
hashmap.put("롯데시네마 부산본점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=156");
hashmap.put("롯데시네마 사상점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=161");
hashmap.put("롯데시네마 서면점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=393");
hashmap.put("롯데시네마 센텀시티점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=304");
hashmap.put("롯데시네마 오투점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=544");
hashmap.put("롯데시네마 울산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=241");
hashmap.put("롯데시네마 울산성남점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=499");
hashmap.put("롯데시네마 진주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=142");
hashmap.put("롯데시네마 진주혁신점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=620");
hashmap.put("롯데시네마 진해점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=457");
hashmap.put("롯데시네마 창원점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=145");
hashmap.put("롯데시네마 통영점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=381");
hashmap.put("롯데시네마 해운대점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=490");

hashmap.put("롯데시네마 가산디지털점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=462");
hashmap.put("롯데시네마 가양점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=580");
hashmap.put("롯데시네마 강동점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=8");
hashmap.put("롯데시네마 건대입구점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=15");
hashmap.put("롯데시네마 김포공항점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=428");
hashmap.put("롯데시네마 노원점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=19");
hashmap.put("롯데시네마 독산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=534");
hashmap.put("롯데시네마 브로드웨이점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=465");
hashmap.put("롯데시네마 서울대입구점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=454");
hashmap.put("롯데시네마 수락산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=586");
hashmap.put("롯데시네마 수유점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=655");
hashmap.put("롯데시네마 신도림점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=481");
hashmap.put("롯데시네마 신림점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=354");
hashmap.put("롯데시네마 에비뉴엘점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=49");
hashmap.put("롯데시네마 영등포점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=33");
hashmap.put("롯데시네마 용산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=477");
hashmap.put("롯데시네마 월드타워점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=531");
hashmap.put("롯데시네마 은평점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=630");
hashmap.put("롯데시네마 장안점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=455");
hashmap.put("롯데시네마 청량리점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=386");
hashmap.put("롯데시네마 합정점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=439");
hashmap.put("롯데시네마 홍대입구점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=334");
hashmap.put("롯데시네마 황학점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=440");

hashmap.put("롯데시네마 라페스타점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=59");
hashmap.put("롯데시네마 검단점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=128");
hashmap.put("롯데시네마 광교아울렛점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=572");
hashmap.put("롯데시네마 광명아울렛점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=537");
hashmap.put("롯데시네마 광명점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=548");
hashmap.put("롯데시네마 광주점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=200");
hashmap.put("롯데시네마 구리아울렛점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=539");
hashmap.put("롯데시네마 마석점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=472");
hashmap.put("롯데시네마 병점점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=119");
hashmap.put("롯데시네마 부천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=405");
hashmap.put("롯데시네마 부천역점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=458");
hashmap.put("롯데시네마 부평점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=125");
hashmap.put("롯데시네마 부평역사점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=348");
hashmap.put("롯데시네마 산본피트인점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=604");
hashmap.put("롯데시네마 성남점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=79");
hashmap.put("롯데시네마 성남신흥점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=81");
hashmap.put("롯데시네마 센트럴락점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=93");
hashmap.put("롯데시네마 송탄점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=115");
hashmap.put("롯데시네마 수원점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=536");
hashmap.put("롯데시네마 시화점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=92");
hashmap.put("롯데시네마 안산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=94");
hashmap.put("롯데시네마 안산고잔점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=563");
hashmap.put("롯데시네마 안성점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=476");
hashmap.put("롯데시네마 안양점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=100");
hashmap.put("롯데시네마 안양일번가점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=605");
hashmap.put("롯데시네마 양주고읍점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=437");
hashmap.put("롯데시네마 오산점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=302");
hashmap.put("롯데시네마 용인점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=375");
hashmap.put("롯데시네마 의정부민락점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=615");
hashmap.put("롯데시네마 인덕원점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=484");
hashmap.put("롯데시네마 인천점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=368");
hashmap.put("롯데시네마 인천아시아드점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=638");
hashmap.put("롯데시네마 주엽점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=418");
hashmap.put("롯데시네마 진접점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=394");
hashmap.put("롯데시네마 파주아울렛점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=419");
hashmap.put("롯데시네마 파주운정점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=637");
hashmap.put("롯데시네마 평촌점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=435");
hashmap.put("롯데시네마 향남점", "http://m.movie.naver.com/m/endpage/theater/RunningSchedule.nhn?groupCode=621");

hashmap.put("CGV 강남점", "http://m.cgv.co.kr/Schedule/?tc=0056&t=T");
hashmap.put("CGV 강동점", "http://m.cgv.co.kr/Schedule/?tc=0060&t=T");
hashmap.put("CGV 강변점", "http://m.cgv.co.kr/Schedule/?tc=0001&t=T");
hashmap.put("CGV 구로점", "http://m.cgv.co.kr/Schedule/?tc=0010&t=T");
hashmap.put("CGV 군자점", "http://m.cgv.co.kr/Schedule/?tc=0095&t=T");
hashmap.put("CGV 대학로점", "http://m.cgv.co.kr/Schedule/?tc=0063&t=T");
hashmap.put("CGV 명동점", "http://m.cgv.co.kr/Schedule/?tc=0009&t=T");
hashmap.put("CGV 명동역씨네라이브러리점", "http://m.cgv.co.kr/Schedule/?tc=0105&t=T");
hashmap.put("CGV 목동점", "http://m.cgv.co.kr/Schedule/?tc=0011&t=T");
hashmap.put("CGV 미아점", "http://m.cgv.co.kr/Schedule/?tc=0057&t=T");
hashmap.put("CGV 불광점", "http://m.cgv.co.kr/Schedule/?tc=0030&t=T");
hashmap.put("CGV 상봉점", "http://m.cgv.co.kr/Schedule/?tc=0046&t=T");
hashmap.put("CGV 상암점", "http://m.cgv.co.kr/Schedule/?tc=0014&t=T");
hashmap.put("CGV 성신여대입구점", "http://m.cgv.co.kr/Schedule/?tc=0083&t=T");
hashmap.put("CGV 송파점", "http://m.cgv.co.kr/Schedule/?tc=0088&t=T");
hashmap.put("CGV 신도림점", "http://m.cgv.co.kr/Schedule/?tc=0072&t=T");
hashmap.put("CGV 신촌아트레온점", "http://m.cgv.co.kr/Schedule/?tc=0150&t=T");
hashmap.put("씨네드쉐프 압구정점", "http://m.cgv.co.kr/Schedule/?tc=P001&t=T");
hashmap.put("CGV 압구정점", "http://m.cgv.co.kr/Schedule/?tc=0040&t=T");
hashmap.put("CGV 여의도점", "http://m.cgv.co.kr/Schedule/?tc=0112&t=T");
hashmap.put("CGV 영등포점", "http://m.cgv.co.kr/Schedule/?tc=0059&t=T");
hashmap.put("CGV 왕십리점", "http://m.cgv.co.kr/Schedule/?tc=0074&t=T");
hashmap.put("CGV 용산점", "http://m.cgv.co.kr/Schedule/?tc=0013&t=T");
hashmap.put("CGV 중계점", "http://m.cgv.co.kr/Schedule/?tc=0131&t=T");
hashmap.put("CGV 천호점", "http://m.cgv.co.kr/Schedule/?tc=0199&t=T");
hashmap.put("CGV 청담씨네시티점", "http://m.cgv.co.kr/Schedule/?tc=0107&t=T");
hashmap.put("CGV 피카디리1958점", "http://m.cgv.co.kr/Schedule/?tc=0223&t=T");
hashmap.put("CGV 하계점", "http://m.cgv.co.kr/Schedule/?tc=0164&t=T");
hashmap.put("CGV 홍대점", "http://m.cgv.co.kr/Schedule/?tc=0191&t=T");

hashmap.put("CGV 광명철산점", "http://m.cgv.co.kr/Schedule/?tc=0182&t=T");
hashmap.put("CGV 구리점", "http://m.cgv.co.kr/Schedule/?tc=0232&t=T");
hashmap.put("CGV 김포점", "http://m.cgv.co.kr/Schedule/?tc=0177&t=T");
hashmap.put("CGV 김포운양점", "http://m.cgv.co.kr/Schedule/?tc=0188&t=T");
hashmap.put("CGV 김포풍무점", "http://m.cgv.co.kr/Schedule/?tc=0126&t=T");
hashmap.put("CGV 동백점", "http://m.cgv.co.kr/Schedule/?tc=0124&t=T");
hashmap.put("CGV 동수원점", "http://m.cgv.co.kr/Schedule/?tc=0041&t=T");
hashmap.put("CGV 동탄점", "http://m.cgv.co.kr/Schedule/?tc=0106&t=T");
hashmap.put("CGV 범계점", "http://m.cgv.co.kr/Schedule/?tc=0155&t=T");
hashmap.put("CGV 부천점", "http://m.cgv.co.kr/Schedule/?tc=0015&t=T");
hashmap.put("CGV 부천역점", "http://m.cgv.co.kr/Schedule/?tc=0194&t=T");
hashmap.put("CGV 북수원점", "http://m.cgv.co.kr/Schedule/?tc=0049&t=T");
hashmap.put("CINE KIDS 북수원점", "http://m.cgv.co.kr/Schedule/?tc=K049&t=T");
hashmap.put("CGV 산본점", "http://m.cgv.co.kr/Schedule/?tc=0242&t=T");
hashmap.put("CGV 서현점", "http://m.cgv.co.kr/Schedule/?tc=0196&t=T");
hashmap.put("CGV 소풍점", "http://m.cgv.co.kr/Schedule/?tc=0143&t=T");
hashmap.put("CGV 수원점", "http://m.cgv.co.kr/Schedule/?tc=0012&t=T");
hashmap.put("CGV 시흥점", "http://m.cgv.co.kr/Schedule/?tc=0073&t=T");
hashmap.put("CGV 안산점", "http://m.cgv.co.kr/Schedule/?tc=0211&t=T");
hashmap.put("CGV 야탑점", "http://m.cgv.co.kr/Schedule/?tc=0003&t=T");
hashmap.put("CGV 역곡점", "http://m.cgv.co.kr/Schedule/?tc=0029&t=T");
hashmap.put("CGV 오리점", "http://m.cgv.co.kr/Schedule/?tc=0004&t=T");
hashmap.put("CGV 의정부점", "http://m.cgv.co.kr/Schedule/?tc=0113&t=T");
hashmap.put("CGV 의정부태흥점", "http://m.cgv.co.kr/Schedule/?tc=0187&t=T");
hashmap.put("CGV 이천점", "http://m.cgv.co.kr/Schedule/?tc=0205&t=T");
hashmap.put("CGV 일산점", "http://m.cgv.co.kr/Schedule/?tc=0054&t=T");
hashmap.put("CGV 죽전점", "http://m.cgv.co.kr/Schedule/?tc=0055&t=T");
hashmap.put("CGV 파주문산점", "http://m.cgv.co.kr/Schedule/?tc=0148&t=T");
hashmap.put("CGV 판교점", "http://m.cgv.co.kr/Schedule/?tc=0181&t=T");
hashmap.put("CGV 평촌점", "http://m.cgv.co.kr/Schedule/?tc=0195&t=T");
hashmap.put("CGV 평택점", "http://m.cgv.co.kr/Schedule/?tc=0052&t=T");
hashmap.put("CGV 평택비전점", "http://m.cgv.co.kr/Schedule/?tc=0190&t=T");
hashmap.put("CGV 평택소사점", "http://m.cgv.co.kr/Schedule/?tc=0214&t=T");
hashmap.put("CGV 화정점", "http://m.cgv.co.kr/Schedule/?tc=0145&t=T");

hashmap.put("CGV 계양점", "https://m.cgv.co.kr/Schedule/?tc=0043&t=T");
hashmap.put("CGV 남주안점", "https://m.cgv.co.kr/Schedule/?tc=0198&t=T");
hashmap.put("CGV 부평점", "https://m.cgv.co.kr/Schedule/?tc=0021&t=T");
hashmap.put("CGV 부평역점", "https://m.cgv.co.kr/Schedule/?tc=0184&t=T");
hashmap.put("CGV 인천점", "https://m.cgv.co.kr/Schedule/?tc=0002&t=T");
hashmap.put("CGV 인천공항점", "https://m.cgv.co.kr/Schedule/?tc=0118&t=T");
hashmap.put("CGV 인천논현점", "https://m.cgv.co.kr/Schedule/?tc=0197&t=T");
hashmap.put("CGV 인천연수점", "https://m.cgv.co.kr/Schedule/?tc=0141&t=T");
hashmap.put("CGV 인천터미널점", "https://m.cgv.co.kr/Schedule/?tc=0036&t=T");
hashmap.put("CGV 주안역점", "https://m.cgv.co.kr/Schedule/?tc=0027&t=T");

hashmap.put("CGV 강릉점", "http://m.cgv.co.kr/Schedule/?tc=0139&t=T");
hashmap.put("CGV 원주점", "http://m.cgv.co.kr/Schedule/?tc=0144&t=T");
hashmap.put("CGV 춘천점", "http://m.cgv.co.kr/Schedule/?tc=0070&t=T");
hashmap.put("CGV 춘천명동점", "http://m.cgv.co.kr/Schedule/?tc=0189&t=T");

hashmap.put("CGV 당진점", "http://m.cgv.co.kr/Schedule/?tc=0207&t=T");
hashmap.put("CGV 대전점", "http://m.cgv.co.kr/Schedule/?tc=0007&t=T");
hashmap.put("CGV 대전가오점", "http://m.cgv.co.kr/Schedule/?tc=0154&t=T");
hashmap.put("CGV 대전탄방점", "http://m.cgv.co.kr/Schedule/?tc=0202&t=T");
hashmap.put("CGV 대전터미널점", "http://m.cgv.co.kr/Schedule/?tc=0127&t=T");
hashmap.put("CGV 서산점", "http://m.cgv.co.kr/Schedule/?tc=0091&t=T");
hashmap.put("CGV 세종점", "http://m.cgv.co.kr/Schedule/?tc=0219&t=T");
hashmap.put("CGV 유성노은점", "http://m.cgv.co.kr/Schedule/?tc=0206&t=T");
hashmap.put("CGV 유성온천점", "http://m.cgv.co.kr/Schedule/?tc=0209&t=T");
hashmap.put("CGV 천안점", "http://m.cgv.co.kr/Schedule/?tc=0044&t=T");
hashmap.put("CGV 천안펜타포트점", "http://m.cgv.co.kr/Schedule/?tc=0110&t=T");
hashmap.put("CGV 청주북문점", "http://m.cgv.co.kr/Schedule/?tc=0084&t=T");
hashmap.put("CGV 청주서문점", "http://m.cgv.co.kr/Schedule/?tc=0228&t=T");
hashmap.put("CGV 청주지웰시티점", "http://m.cgv.co.kr/Schedule/?tc=0142&t=T");
hashmap.put("CGV 청주터미널점", "http://m.cgv.co.kr/Schedule/?tc=0183&t=T");
hashmap.put("CGV 홍성점", "http://m.cgv.co.kr/Schedule/?tc=0217&t=T");

hashmap.put("CGV 대구점", "http://m.cgv.co.kr/Schedule/?tc=0058&t=T");
hashmap.put("CGV 대구수성점", "http://m.cgv.co.kr/Schedule/?tc=0157&t=T");
hashmap.put("CGV 대구스타디움점", "http://m.cgv.co.kr/Schedule/?tc=0108&t=T");
hashmap.put("CGV 대구아카데미점", "http://m.cgv.co.kr/Schedule/?tc=0185&t=T");
hashmap.put("CGV 대구월성점", "http://m.cgv.co.kr/Schedule/?tc=0216&t=T");
hashmap.put("CGV 대구이시아점", "http://m.cgv.co.kr/Schedule/?tc=0117&t=T");
hashmap.put("CGV 대구칠곡점", "http://m.cgv.co.kr/Schedule/?tc=0071&t=T");
hashmap.put("CGV 대구한일점", "http://m.cgv.co.kr/Schedule/?tc=0147&t=T");
hashmap.put("CGV 대구현대점", "http://m.cgv.co.kr/Schedule/?tc=0109&t=T");

hashmap.put("CGV 남포점", "http://m.cgv.co.kr/Schedule/?tc=0065&t=T");
hashmap.put("CGV 대연점", "http://m.cgv.co.kr/Schedule/?tc=0061&t=T");
hashmap.put("CGV 대한점", "http://m.cgv.co.kr/Schedule/?tc=0151&t=T");
hashmap.put("CGV 동래점", "http://m.cgv.co.kr/Schedule/?tc=0042&t=T");
hashmap.put("CGV 서면점", "http://m.cgv.co.kr/Schedule/?tc=0005&t=T");
hashmap.put("CGV 센텀시티점", "http://m.cgv.co.kr/Schedule/?tc=0089&t=T");
hashmap.put("씨네드쉐프 센텀시티점", "http://m.cgv.co.kr/Schedule/?tc=P004&t=T");
hashmap.put("CGV 아시아드점", "http://m.cgv.co.kr/Schedule/?tc=0160&t=T");
hashmap.put("CGV 울산산삼점", "http://m.cgv.co.kr/Schedule/?tc=0128&t=T");
hashmap.put("CGV 하단점", "http://m.cgv.co.kr/Schedule/?tc=0245&t=T");
hashmap.put("CGV 해운대점", "http://m.cgv.co.kr/Schedule/?tc=0212&t=T");
hashmap.put("CGV 화명점", "http://m.cgv.co.kr/Schedule/?tc=0159&t=T");

hashmap.put("CGV 거제점", "http://m.cgv.co.kr/Schedule/?tc=0102&t=T");
hashmap.put("CGV 구미점", "http://m.cgv.co.kr/Schedule/?tc=0053&t=T");
hashmap.put("CGV 김천율곡점", "http://m.cgv.co.kr/Schedule/?tc=0240&t=T");
hashmap.put("CGV 김해점", "http://m.cgv.co.kr/Schedule/?tc=0028&t=T");
hashmap.put("CGV 김해장유점", "http://m.cgv.co.kr/Schedule/?tc=0239&t=T");
hashmap.put("CGV 마산점", "http://m.cgv.co.kr/Schedule/?tc=0033&t=T");
hashmap.put("CGV 북포항점", "http://m.cgv.co.kr/Schedule/?tc=0097&t=T");
hashmap.put("CGV 안동점", "http://m.cgv.co.kr/Schedule/?tc=0204&t=T");
hashmap.put("CGV 양산물금점", "http://m.cgv.co.kr/Schedule/?tc=0222&t=T");
hashmap.put("CGV 진주점", "http://m.cgv.co.kr/Schedule/?tc=0081&t=T");
hashmap.put("CGV 창원점", "http://m.cgv.co.kr/Schedule/?tc=0023&t=T");
hashmap.put("CGV 창원더시티점", "http://m.cgv.co.kr/Schedule/?tc=0079&t=T");
hashmap.put("CGV 통영점", "http://m.cgv.co.kr/Schedule/?tc=0156&t=T");
hashmap.put("CGV 포항점", "http://m.cgv.co.kr/Schedule/?tc=0045&t=T");

hashmap.put("CGV 광양점", "http://m.cgv.co.kr/Schedule/?tc=0220&t=T");
hashmap.put("CGV 광양아울렛점", "http://m.cgv.co.kr/Schedule/?tc=0221&t=T");
hashmap.put("CGV 광주상무점", "http://m.cgv.co.kr/Schedule/?tc=0193&t=T");
hashmap.put("CGV 광주용봉점", "http://m.cgv.co.kr/Schedule/?tc=0210&t=T");
hashmap.put("CGV 광주첨단점", "http://m.cgv.co.kr/Schedule/?tc=0218&t=T");
hashmap.put("CGV 광주충장로점", "http://m.cgv.co.kr/Schedule/?tc=0244&t=T");
hashmap.put("CGV 광주터미널점", "http://m.cgv.co.kr/Schedule/?tc=0090&t=T");
hashmap.put("CGV 군산점", "http://m.cgv.co.kr/Schedule/?tc=0087&t=T");
hashmap.put("CGV 목포점", "http://m.cgv.co.kr/Schedule/?tc=0026&t=T");
hashmap.put("CGV 순천점", "http://m.cgv.co.kr/Schedule/?tc=0114&t=T");
hashmap.put("CGV 여수웅천점", "http://m.cgv.co.kr/Schedule/?tc=0208&t=T");
hashmap.put("CGV 익산점", "http://m.cgv.co.kr/Schedule/?tc=0020&t=T");
hashmap.put("CGV 전주고사점", "http://m.cgv.co.kr/Schedule/?tc=0213&t=T");
hashmap.put("CGV 전주효자점", "http://m.cgv.co.kr/Schedule/?tc=0179&t=T");
hashmap.put("CGV 정읍점", "http://m.cgv.co.kr/Schedule/?tc=0186&t=T");
hashmap.put("CGV 제주점", "http://m.cgv.co.kr/Schedule/?tc=0121&t=T");

// 지도를 생성합니다    
var map = new daum.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new daum.maps.services.Places();  

// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new daum.maps.InfoWindow({zIndex:1});

// 키워드로 장소를 검색합니다
searchPlaces();

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {

	if (document.getElementById('keyword').value != "")
	{
    var keyword = document.getElementById('keyword').value + " 영화관";

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( keyword, placesSearchCB);
	}	
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(status, data, pagination) {
    if (status === daum.maps.services.Status.OK) {

        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        displayPlaces(data.places);

        // 페이지 번호를 표출합니다
        displayPagination(pagination);

    } else if (status === daum.maps.services.Status.ZERO_RESULT) {

        alert('검색 결과가 존재하지 않습니다.');
        return;

    } else if (status === daum.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return;

    }
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {

    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    bounds = new daum.maps.LatLngBounds(), 
    listStr = '';
    
    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();
    
    for ( var i=0; i<places.length; i++ ) {

        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new daum.maps.LatLng(places[i].latitude, places[i].longitude),
            marker = addMarker(placePosition, i, places[i].title), 
            itemEl = getListItem(i, places[i], marker); // 검색 결과 항목 Element를 생성합니다

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function(marker, title) {
            daum.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });

            daum.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });

            itemEl.onmouseover =  function () {
                displayInfowindow(marker, title);
            };

            itemEl.onmouseout =  function () {
                infowindow.close();
            };
			// 목록 클릭시 상영시간표를 보여줍니다
			itemEl.onclick =  function () {
				if (hashmap.containsKey(title) == false)
					alert("상영시간표가 존재하지 않습니다!\n");
				else
				{
				$("#schedule").attr("src", hashmap.get(title));
				$("#scheBtn").removeClass("button3").addClass("button2");
				}
			};
        })(marker, places[i].title);

        fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
}

// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {

    var el = document.createElement('li'),
    itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                '<div class="info">' +
                '   <h5>' + places.title + '</h5>';

    if (places.newAddress) {
        itemStr += '    <span>' + places.newAddress + '</span>' +
                    '   <span class="jibun gray">' +  places.address  + '</span>';
    } else {
        itemStr += '    <span>' +  places.address  + '</span>'; 
    }
                 
      itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                '</div>';           

    el.innerHTML = itemStr;
    el.className = 'item';

    return el;
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
function addMarker(position, idx, title) {
    var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new daum.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new daum.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new daum.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new daum.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new daum.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage 
        });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다

	daum.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 상영시간표를 띄워줍니다
		if (hashmap.containsKey(title) == false)
					alert("상영시간표가 존재하지 않습니다!\n");
		else
		{
			$("#schedule").attr("src", hashmap.get(title));
			$("#scheBtn").removeClass("button3").addClass("button2");
		}
    });
    return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
    for ( var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }   
    markers = [];
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
    var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i; 

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild (paginationEl.lastChild);
    }

    for (i=1; i<=pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i===pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function(i) {
                return function() {
                    pagination.gotoPage(i);
                }
            })(i);
        }

        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
}

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
}

 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {   
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}