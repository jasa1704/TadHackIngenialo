var data;

loadJSON()

function loadJSON() {   

    var xobj = new XMLHttpRequest();
    
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            data = JSON.parse(xobj.responseText);
            //selectGroup("gastritis",data)
            selecAge("25",data)
          }
    };
    xobj.send(null);  
 }

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

function selecAge(age,users)
{
    users.forEach(user => {
       
        if(age==user.age)
        {
            senMsg(user)
        }   
    });
}

function selectGroup(item, users)
{
    users.forEach(user => {
        user.condition.forEach(element => {
            if(item==element)
            {
                senMsg(user)
            }   
        });
    });
}

function senMsg(user)
{
        var msg = "";
        msg += `Hola ${user.first_name} ${user.last_name} \n ${user.age_range} \n Condicion: `;
        user.condition.forEach(element => {

            msg += "\n "+element;
            
        });
        console.log(msg)
        console.log(user.phone)
        /* getP(`https://api2.apidaze.io/95abb133/sms/send?api_secret=81aa44335724bf88970e103ba9a4ff7c&number=${user.phone}&subject=TadHack&body=${msg}`,function(data){
        respuesta.push(data.results);
        }); */
   
}