

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

senMsg(data);

function selectGroup(item)
{
    if(item=="imsopnio")

}

function senMsg(users)
{
    users.forEach((user,index) => {
        var msg = "";
        msg += `Hola ${user.first_name} ${user.last_name} \n ${user.age_range} \n Condicion: `;
        user.condition.forEach(element => {

            msg += "\n "+element;
            
        });

        console.log(msg)
        /* getP(`https://api2.apidaze.io/95abb133/sms/send?api_secret=81aa44335724bf88970e103ba9a4ff7c&number=${user.phone}&subject=TadHack&body=${msg}`,function(data){
        respuesta.push(data.results);
        }); */
        
    });
}