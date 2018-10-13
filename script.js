function getP(url, callback){
    var httpX = new XMLHttpRequest();
        httpX.onload = function(){
        if(callback){
            callback(JSON.parse(this.responseText));  
        }
    }
    httpX.onerror = function(){
        console.log(Error('Error 🤮'));
    }
    httpX.open('POST',url,true);
    httpX.send();
}

//Buscar toda la informacion con promesas
getP('https://api2.apidaze.io/95abb133/sms/send?api_secret=81aa44335724bf88970e103ba9a4ff7c&number=573146323094&subject=TadHack&body=INGENIALO',function(data){
        respuesta.push(data.results);
});