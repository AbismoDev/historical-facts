document.addEventListener("DOMContentLoaded", () => {
    const listaEventos = [
        {
            dia: 4, 
            mes: 1, 
            tipo: "Fato Histórico", 
            evento: "Em 1958, o satélite soviético Sputnik 1, o primeiro objeto artificial a orbitar a Terra, reentrou na atmosfera e queimou após 92 dias em órbita."
        },
        {
            dia: 15, 
            mes: 2, 
            tipo: "Curiosidade", 
            evento: "Em 2013, um meteoro explodiu sobre a cidade de Chelyabinsk, na Rússia, liberando uma energia estimada em 20 a 30 vezes maior que a da bomba de Hiroshima. O evento deixou mais de 1.500 pessoas feridas, principalmente devido a estilhaços de vidro."
        },
        {
            dia: 10, 
            mes: 3, 
            tipo: "Fato Histórico", 
            evento: `Em 1876, Alexander Graham Bell realizou a primeira chamada telefônica bem-sucedida, dizendo a famosa frase para seu assistente em outra sala: "Senhor Watson, venha aqui, eu quero vê-lo."`
        },
        {
            dia: 1, 
            mes: 4, 
            tipo: "Curiosidade", 
            evento: "Em 1957, a BBC exibiu um documentário falso sobre uma colheita recorde de espaguete em árvores na Suíça, enganando milhares de telespectadores britânicos no Dia da Mentira."
        },
        {
            dia: 15, 
            mes: 4, 
            tipo: "Fato Histórico", 
            evento: "Em 1912, o RMS Titanic afundou no Oceano Atlântico Norte após colidir com um iceberg, resultando na morte de mais de 1.500 pessoas."
        },
        {
            dia: 26, 
            mes: 4, 
            tipo: "Fato Histórico", 
            evento: "Em 1986, ocorreu o desastre nuclear de Chernobyl na Ucrânia, o pior acidente nuclear da história, liberando uma imensa quantidade de material radioativo na atmosfera."
        },
        {
            dia: 20, 
            mes: 5, 
            tipo: "Curiosidade", 
            evento: "Em 1873, Levi Strauss e Jacob Davis receberam a patente para a calça jeans com rebites de cobre, criando uma das peças de vestuário mais icônicas do mundo."
        },
        {
            dia: 6, 
            mes: 6, 
            tipo: "Fato Histórico", 
            evento: "Em 1944, ocorreu o Dia D, quando as forças aliadas desembarcaram nas praias da Normandia, na França, iniciando a libertação da Europa Ocidental do domínio nazista durante a Segunda Guerra Mundial."
        },
        {
            dia: 20, 
            mes: 7, 
            tipo: "Fato Histórico", 
            evento: "Em 1969, a missão Apollo 11 da NASA pousou na Lua, e o astronauta Neil Armstrong se tornou o primeiro ser humano a pisar na superfície lunar."
        },
        {
            dia: 9, 
            mes: 8, 
            tipo: "Fato Histórico", 
            evento: "Em 1945, os Estados Unidos lançaram uma bomba atômica sobre a cidade de Nagasaki, no Japão, três dias após o bombardeio de Hiroshima, levando à rendição japonesa e ao fim da Segunda Guerra Mundial."
        },
        {
            dia: 2, 
            mes: 9, 
            tipo: "Curiosidade", 
            evento: `Em 1969, na Universidade da Califórnia, em Los Angeles (UCLA), a primeira mensagem foi enviada através da ARPANET, a rede de computadores precursora da internet. A tentativa era enviar a palavra "LOGIN", mas o sistema travou após as duas primeiras letras, "LO".`
        },
        {
            dia: 4, 
            mes: 10, 
            tipo: "Fato Histórico", 
            evento: `Em 1957, a União Soviética lançou o Sputnik 1, o primeiro satélite artificial da Terra, dando início à Corrida Espacial.`
        },
        {
            dia: 9, 
            mes: 11, 
            tipo: "Fato Histórico", 
            evento: `Em 1989, ocorreu a Queda do Muro de Berlim, um evento simbólico que marcou o início do fim da Guerra Fria e a reunificação da Alemanha.`
        },
        {
            dia: 24, 
            mes: 11, 
            tipo: "Curiosidade", 
            evento: `Em 1971, um homem não identificado, conhecido como D.B. Cooper, sequestrou um Boeing 727 nos Estados Unidos, exigiu um resgate de 200 mil dólares e depois saltou de paraquedas da aeronave com o dinheiro, desaparecendo para sempre.`
        },
        {
            dia: 17, 
            mes: 12, 
            tipo: "Fato Histórico", 
            evento: `Em 1903, os irmãos Orville e Wilbur Wright realizaram o primeiro voo controlado e sustentado em uma aeronave motorizada, o Wright Flyer, perto de Kitty Hawk, na Carolina do Norte.`
        },
    ];

    const form = document.querySelector("#form");
    const btnAleatorio = document.querySelector("#btn--aleatorio");
    const res = document.querySelector("#res");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputData = document.querySelector('#data--historica');
        const valorDataEvento = inputData.value; 

        if(valorDataEvento === "") {
            const msgErro = "Insira uma data para saber o evento ou curiosidade!";
            res.innerHTML = exibeMensagem(0, msgErro, "falha");
            return;
        }     

        const eventosFiltrados = filtraEventos(valorDataEvento);

        if(eventosFiltrados.length === 0) {
            const msgAviso = "Nenhum evento histórico econtrado para esta data em nossa base de dados.";
            res.innerHTML = exibeMensagem(0, msgAviso, "aviso");
            return;
        }

        eventosFiltrados.forEach((item) => (eventosFiltrados.length > 1) ? res.innerHTML +=  exibeMensagem(item, 0, "sucesso") : res.innerHTML = exibeMensagem(item, 0, "sucesso"));
    });

    btnAleatorio.addEventListener('click', () => {
        const randomEvento = Math.floor(Math.random() * listaEventos.length);
        res.innerHTML = exibeMensagem(listaEventos[randomEvento], 0, "sucesso");
    })

    function filtraEventos(valorData) {
        const dataEvento = new Date(valorData + "T00:00:00");
        const diaEvento = dataEvento.getDate();
        const mesEvento = dataEvento.getMonth() + 1;

        return listaEventos.filter((evento) => evento.dia === diaEvento && evento.mes === mesEvento);
    }

    function exibeMensagem(obj, msg, tipo) {
        let containerMsg;
        if(tipo === "falha" || tipo === "aviso") {
            containerMsg = `                
                <div class="container--resposta ${tipo}">
                    <p>${msg}</p>
                </div>
            `;
        }
        else if (tipo === "sucesso") {
            containerMsg = `
                    <div class="container--resposta ${tipo}">
                        <p><span class="cor--roxo">${obj.tipo}</span>: ${obj.evento}</p>
                    </div>
                `;
        }
        return containerMsg;
    }

});