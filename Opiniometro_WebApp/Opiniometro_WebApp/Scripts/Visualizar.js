// Muestra las observaciones de una pregunta en especifico
function visualizarObsersevacion(chData, perfil, item) {
    const aData = chData;
    const obs = aData[0];
    const nom = aData[1];
    const ap1 = aData[2];
    const ap2 = aData[3];
    let texto = "";
    for (let data in obs) {
        if (perfil == "Administrador") {
            texto = texto + (obs[data]).toString() + " - " + (nom[data]).toString() + " " + (ap1[data]).toString() + " " + (ap2[data]).toString() + "<hr>";
        } else {
            texto = texto + (obs[data]).toString() + "<hr>";
        }
    }
    const item_id = "obs_" + item;
    const observacion = document.getElementById(item_id);
    observacion.innerHTML = texto;
}

//Muestra las respuestas de una seccion en especifico 
function visualizarRespuestas(chData, item) {
    const aData = chData;
    const obs = aData[0];
    let texto = "";
    for (let data in obs) {
        texto = texto + (obs[data]).toString() + "<hr>";
    }
    const item_id = "rep_" + item;
    const respuesta = document.getElementById(item_id);
    respuesta.innerHTML = texto;
}

//Muestra el grafico de una pregunta en especifico basado en el tipo de pregunta
function visualizarGrafico(chData, item, pregunta) {
    const aData = chData;
    const aLabels = aData[0];
    const aDatasets1 = aData[1];
    const aPromedio = aData[2];
    const aMediana = aData[3];
    const aDesviacion = aData[4];
    let tamanio = 0;
    let texto = "";
    for (let data in aDatasets1) {
        let valor = parseInt(aDatasets1[data]);
        tamanio = tamanio + valor;
    }
    texto = texto + "Cantidad de Estudiantes que respondieron: " + (tamanio).toString() + "<br>";
    if (pregunta == 5 || pregunta == 6) {
        //Promedio
        texto = texto + "Promedio: " + (aPromedio).toString() + "<br>";
        //Mediana
        texto = texto + "Mediana: " + (aMediana).toString() + "<br>";
        //Desviacion Estandar
        texto = texto + "Desviacion estandar: " + (aDesviacion).toString() + "<br>";
    }
    const item_id = "graf_" + item;
    document.getElementById(item_id).innerHTML = texto;

    const dataT = {
        labels: aLabels,
        datasets: [{
            label: "Cantidad de Respuestas",
            data: aDatasets1,
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    const chart_id = "#pie_chart_" + item;
    const ctx = $(chart_id).get(0).getContext("2d");
    if (pregunta == 2 || pregunta == 3 || pregunta == 6) {
        const barChart = new Chart(ctx, {
            type: 'pie',
            data: dataT,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { xaxes: [{ ticks: { beginAtZero: true } }] },
                legend: { display: true },

            },
        })
    } else if (pregunta == 4 || pregunta == 5) {
        const barChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: dataT,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { xAxes: [{ ticks: { beginAtZero: true } }] },
                legend: { display: true },
            },
        })
    }
}