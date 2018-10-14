estilosV(estilosv)

function estilosV(estilosv)
{
    var cont = document.getElementById("contenedor");
    var series = "";

    estilosv.forEach(item => {
            series += "<div class='card ml-5 mb-5 mt-3'>" + "<div class='card-header text-center'>" + item.estilo_saludable + "</div>" 
            + "<a href='" + item.enlace + "'>" + "<div class='card-body margen'>" + "<img src='" + item.imagen + "' alt='imagen' width='100' height='100'>" + "</div>" + "</a>" + "</div>"
            cont.innerHTML = series;
    });
    
}

// function getP(url, callback){
//     var httpX = new XMLHttpRequest();
//         httpX.onload = function(){
//         if(callback){
//             callback(JSON.parse(this.responseText));  
//         }
//     }
//     httpX.onerror = function(){
//         console.log(Error('Error 🤮'));
//     }
//     httpX.open('POST',url,true);
//     httpX.send();
// }

// //Buscar toda la informacion con promesas
// getP('https://api2.apidaze.io/95abb133/sms/send?api_secret=81aa44335724bf88970e103ba9a4ff7c&number=573146323094&subject=TadHack&body=INGequipo',function(data){
//         respuesta.push(data.results);
// });