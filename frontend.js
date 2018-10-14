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