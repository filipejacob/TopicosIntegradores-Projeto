class Canino {

    constructor(){
        this.id = 0;
        this.nomeCanino = '';
        this.racaCanino = '';
        this.arrayCanino = [];
    }

    salvar(){
        let canino = this.lerDados();
        this.adicionar(canino);
        this.listaRacas();
    }

    lerDados(){
        let canino = {}

        canino.id = document.getElementById('idCanino').value;
        canino.nomeCanino = document.getElementById('nomeCanino').value;
        canino.racaCanino = document.getElementById('raca').value;

        return canino;
    }

    adicionar(canino){
        this.arrayCanino.push(canino);
    }
    
    listaRacas(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        this.arrayCanino.forEach((canino) => { 
                        
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nomeCanino = tr.insertCell();
            let td_racaCanino = tr.insertCell();

            td_id.innerText = canino.id;
            td_nomeCanino.innerText = canino.nomeCanino;
            td_racaCanino.innerText = canino.racaCanino;

    });
}}

var canino = new Canino();