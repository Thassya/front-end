
$(document).ready(function () {

    $('#dados').DataTable({
        "data": obterDados(),
        "columns": [
            { data: "Data", title: "Data" },
            { data: "Demanda",title: "Demanda"  },
            { data: "Capacidade",title: "Capacidade"  },
            { data: "APlanejado",title: "Atendimento Planejado"  },
            { data: "ARealizado",title: "Atendimento Realizado"  },
            { data: "Desvio",title: "Desvio"  },
        ],
        "info": false,
        "searching": false,
    });


    Highcharts.chart('grafico', {
        chart: {
            type: 'column',
            switchRowsAndColumns: true,
        },
        data: {
            table: 'dados'
        },
        title: {
            text: 'Dados'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Diferença'
            },

        },
        xAxis: {

        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });
});

function obterDados() {
    return this.bd;
}

var bd = 
     [
        { "Data": "13/03/018", "Demanda": "200", "Capacidade": "250", "APlanejado": "150", "ARealizado": "125", "Desvio": "125" },
        { "Data": "14/03/018", "Demanda": "300", "Capacidade": "350", "APlanejado": "150", "ARealizado": "115", "Desvio": "235" },
        { "Data": "15/03/2018", "Demanda": "200", "Capacidade": "500", "APlanejado": "150", "ARealizado": "455", "Desvio": "45" },
        { "Data": "04/02/018", "Demanda": "200", "Capacidade": "100", "APlanejado": "150", "ARealizado": "100", "Desvio": "0" },
        { "Data": "05/05/018", "Demanda": "200", "Capacidade": "450", "APlanejado": "150", "ARealizado": "400", "Desvio": "50" },
        { "Data": "04/12/018", "Demanda": "200", "Capacidade": "400", "APlanejado": "150", "ARealizado": "395", "Desvio": "5" },
        { "Data": "15/10/018", "Demanda": "200", "Capacidade": "313", "APlanejado": "150", "ARealizado": "300", "Desvio": "13" },
        { "Data": "21/12/018", "Demanda": "200", "Capacidade": "125", "APlanejado": "150", "ARealizado": "100", "Desvio": "25" },
        { "Data": "13/07/018", "Demanda": "200", "Capacidade": "215", "APlanejado": "150", "ARealizado": "50", "Desvio": "165" },
        { "Data": "06/03/018", "Demanda": "200", "Capacidade": "428", "APlanejado": "150", "ARealizado": "425", "Desvio": "3" },
        { "Data": "02/01/018", "Demanda": "200", "Capacidade": "325", "APlanejado": "150", "ARealizado": "200", "Desvio": "125" },
        { "Data": "30/12/018", "Demanda": "200", "Capacidade": "255", "APlanejado": "150", "ARealizado": "250", "Desvio": "105" }
    ];
