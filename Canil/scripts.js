class Raca {

    constructor(){
        this.id = 0;
        this.nomeRaca = '';
        this.arrayRacas = [];
    }

    salvar(){
        let raca = this.lerDados();
        this.adicionar(raca);
        this.listaRacas();
    }

    lerDados(){
        let raca = {}

        raca.id = document.getElementById('idRaca').value;
        raca.nomeRaca = document.getElementById('nomeRaca').value;

        return raca;
    }

    adicionar(raca){
        this.arrayRacas.push(raca);
    }
    
    listaRacas(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        this.arrayRacas.forEach((raca) => {                         
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nomeRaca = tr.insertCell();

            td_id.innerText = raca.id;
            td_nomeRaca.innerText = raca.nomeRaca;

    });
}}

var raca = new Raca();