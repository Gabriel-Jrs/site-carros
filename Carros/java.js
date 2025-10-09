function personagens() {
    const personagensInfo = {
        "Relâmpago McQueen": {
            img: `img/macquenn.jpg`,
            model: `Modelo inspirador: Mistura de Chevrolet Corvette C6 e NASCAR Gen 4`,
            desc: `Um dos carros de corrida mais famosos da história da Copa Pistão,
             Relâmpago McQueen é ambicioso, competitivo e extremamente determinado.
              No primeiro filme, sua jornada egoísta o leva à pacata Radiator Springs, 
              onde aprende sobre amizade, humildade e o verdadeiro significado da vitória. A
              o longo da trilogia, evolui de novato arrogante para mentor generoso.`
        },
        "Doc Hudson": {
            img: `img/doc.jpg`,
            model: `Modelo inspirador: Hudson Hornet de 1951`,
            desc: `Conhecido como o Fabuloso Hudson Hornet, 
            Doc foi campeão da Copa Pistão antes de um acidente encerrar sua carreira.
             Tornou-se médico e juiz de Radiator Springs, onde vive em anonimato até ser redescoberto por McQueen.
              Torna-se mentor e figura paterna para o jovem corredor.`
        },
        "Mate": {
            img: `img/mate.jpg`,
            model: `Modelo inspirador: Caminhão guincho Chevrolet Task Force de 1955`,
            desc: `Mate é o guincho simpático e meio enferrujado de Radiator Springs. 
            É o melhor amigo de McQueen, leal, inocente e dono de um coração enorme. 
            Apesar de parecer atrapalhado, ele prova sua bravura e inteligência em Carros 2,
            onde participa de uma missão de espionagem internacional.`
        },
        "Sally Carrera": {
            img: `img/sally.jpg`,
            model: `Modelo inspirador: Porsche 911 Carrera (2002)`,
            desc: `Sally é a advogada e antiga moradora da cidade grande que escolheu viver em Radiator Springs.
             Inteligente e sensível, é uma das responsáveis pela revitalização da cidade. 
             Ela também é o interesse amoroso de McQueen, apoiando sua transformação pessoal.`
        },
        "Ramone": {
            img: `img/ramon.jpg`,
            model: `Modelo inspirador: Chevrolet Impala Lowrider de 1959`,
            desc: `Ramone é o artista automotivo de Radiator Springs. 
        Ele adora trocar de pintura todos os dias e comanda o 'Ramone’s House of Body Art'. 
        Criativo e carismático, está sempre apoiando os amigos e dando cor à cidade com sua arte.`
        },
        "Flo": {
            img: `img/flo.jpg`,
            model: `Modelo inspirador: GM Motorama Show Car (1957)`,
            desc: `Flo é a dona do V8 Café, ponto de encontro da cidade. 
            Ex-dançarina de shows automotivos, ela é charmosa, sociável e acolhedora. Casada com Ramone, 
            ela traz alegria e hospitalidade a Radiator Springs.`
        },
        "Luigi e Guido": {
            img: `img/guido.jpg`,
            model: `Modelos inspiradores: Luigi – Fiat 500; Guido – empilhadeira italiana`,
            desc: `Luigi é um apaixonado por pneus italianos e fã número um das Ferraris. 
            Guido, seu assistente, é silencioso mas extremamente habilidoso nas trocas de pneus, com velocidade recorde. Juntos, 
            são essenciais nas corridas de McQueen.`
        },
        "Sargento": {
            img: `img/sargento.jpg`,
            model: `Modelo inspirador: Jeep Willys da Segunda Guerra Mundial`,
            desc: `Sargento é um militar aposentado, patriótico e disciplinado. 
            Ele dirige um armazém com produtos militares em Radiator Springs.
             Vive discutindo com Filmore devido às suas visões opostas sobre o mundo, mas no fundo se importam um com o outro.`
        },
        "Filmore": {
            img: `img/filmore.jpg`,
            model: `Modelo inspirador: Volkswagen Kombi (Type 2)`,
            desc: `Filmore é o hippie da cidade, defensor da paz e dos combustíveis orgânicos. 
            Vive ao lado do Sargento e os dois frequentemente discordam, mas mantém uma amizade divertida. 
            Seu estilo de vida alternativo o torna um personagem único.`
        },
        "Xerife": {
            img: `img/xerife.jpg`,
            model: `Modelo inspirador: Mercury Eight 1949`,
            desc: `Xerife mantém a ordem em Radiator Springs. 
            Foi o primeiro a capturar McQueen após sua chegada desastrosa à cidade.
             É sério, mas justo, e respeitado por todos como guardião da paz local.`
        },
        "Mack": {
            img: `img/mack.jpg`,
            model: `Modelo inspirador: Caminhão Mack Super-Liner`,
            desc: `Mack é o fiel caminhão-cegonha de McQueen. 
            É responsável por levá-lo às corridas e sempre disposto a ajudar, mesmo que por vezes acabe cochilando em serviço. 
            Representa lealdade e amizade incondicional.`
        },
        "Chick Hicks": {
            img: `img/chick.jpg`,
            model: `Modelo inspirador: Buick Grand National NASCAR`,
            desc: `Chick Hicks é o rival de McQueen no primeiro filme. 
            Arrogante, sarcástico e desleal, ele fará de tudo para vencer, inclusive trapacear. 
            Ele representa o tipo de competidor que valoriza a vitória acima de qualquer coisa.`
        },
        "Finn McMissile": {
            img: `img/finn mcmissele.jpg`,
            model: `Modelo inspirador: Aston Martin DB5`,
            desc: `Finn é um espião britânico experiente e refinado, 
            com diversos gadgets embutidos em seu corpo. 
            Lidera uma operação de espionagem em Carros 2 e envolve McQueen e Mate numa missão internacional cheia de ação.`
        },
        "Holley Shiftwell": {
            img: `img/brita.jpg`,
            model: `Modelo inspirador: Jaguar XJ220`,
            desc: `Holley é uma jovem espiã novata, elegante e tecnológica. Trabalha com Finn McMissile e desenvolve uma conexão especial com Mate. Ao longo de Carros 2, ela supera inseguranças e mostra sua competência em campo.`
        },
        "Professor Zündapp": {
            img: `img/professorz.jpg`,
            model: `Modelo inspirador: Zündapp Janus`,
            desc: `Professor Z é um dos vilões de Carros 2. É o cientista por trás do plano de sabotar os carros que usam combustível alternativo. Inteligente e traiçoeiro, representa a ciência usada para fins maliciosos.`
        },
        "Sir Miles Axlerod": {
            img: `img/eixoderroda.jpg`,
            model: `Modelo inspirador: Range Rover Classic`,
            desc: `Sir Miles se apresenta como filantropo e defensor dos combustíveis renováveis, mas na verdade é o cérebro por trás da conspiração em Carros 2. Ele é o verdadeiro vilão do filme, disfarçado de boa intenção.`
        },
        "Francesco": {
            img: `img/francesco.jpg`,
            model: `Modelo inspirador: Carro de Fórmula 1 Ferrari`,
            desc: `Francesco Bernoulli é um corredor italiano carismático e vaidoso. Rivaliza com McQueen durante o Grand Prix Mundial. Adorado na Europa, é um showman nato que adora os holofotes tanto quanto as pistas.`
        },
        "Carla Veloso": {
            img: `img/calinha.jpg`,
            model: `Modelo inspirador: Protótipo Le Mans (LMP)`,
            desc: `Carla Veloso é a representante brasileira no Grand Prix Mundial. É conhecida por seu estilo elegante e desempenho poderoso nas pistas. Ela representa diversidade e talento no universo de Carros 2.`
        },
        "Shu Todoroki": {
            img: `img/shu.png`,
            model: `Modelo inspirador: Toyota Le Mans Prototype`,
            desc: `Shu é o representante japonês no Grand Prix Mundial. Seu carro é decorado com grafismos tradicionais do Japão e ele é conhecido por sua velocidade e disciplina nas corridas.`
        },
        "Sterling": {
            img: `img/sterling.png`,
            model: `Modelo inspirador: Mercedes-Benz Classe S`,
            desc: `Sterling é o empresário que contrata McQueen após seu acidente. Ele representa a visão corporativa sobre o automobilismo e acredita que McQueen deve abandonar as pistas para focar em marketing.`
        },
        "Jackson Storm": {
            img: `img/jack.jpg`,
            model: `Modelo inspirador: Dodge Charger + design de carros da nascar`,
            desc: `Jackson Storm é o novo rival de McQueen em Carros 3. Treinado com tecnologia de ponta e simuladores, ele é rápido e arrogante. Representa a ameaça da nova geração para os corredores veteranos.`
        },
        "Cruz Ramirez": {
            img: "img/cruz.jpg",
            model: "Modelo inspirador: Carro esportivo compacto moderno, com influência de Chevrolet Camaro",
            desc: "Cruz Ramirez é uma treinadora de alta performance que trabalha no centro de tecnologia de corrida onde McQueen treina em Carros 3. Apesar de ser treinadora, sempre sonhou em correr. Com a ajuda de McQueen, supera suas inseguranças e se torna uma campeã, representando a nova geração de corredores."
        },
        "Smokey": {
            img: "img/smokey.jpg",
            model: "Modelo inspirador: Hudson Pickup 1947",
            desc: "Smokey foi o antigo treinador de Doc Hudson e vive em Thomasville. Ao ser procurado por McQueen, ele compartilha as experiências que moldaram Doc e o ajuda a encontrar um novo propósito: passar seu legado adiante. É sábio, experiente e cheio de histórias do passado glorioso das corridas."
        },
        "Cal Weathers": {
            img: "img/fime.jpg",
            model: "Modelo inspirador: Chevrolet Monte Carlo NASCAR",
            desc: "Cal Weathers é um dos corredores veteranos e sobrinho de Strip Weathers, o Rei. Ele compete contra McQueen nas pistas e tem uma relação de respeito e amizade. Com a chegada dos novos corredores como Storm, Cal decide se aposentar, reconhecendo a chegada de uma nova era no automobilismo."
        }
    };

    return personagensInfo;
}

function mostrarInfo(nome) {
    const info = personagens()[nome];
    if (info) {
        document.getElementById("info-img").src = info.img;
        document.getElementById("info-nome").innerText = nome;
        document.getElementById("info-desc").innerText = info.desc;
        document.getElementById("info-model").innerText = info.model;

    }
}
