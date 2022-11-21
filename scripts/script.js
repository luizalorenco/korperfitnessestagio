var main = document.getElementsByTagName("main")[0];

function home() {
    //------------ Main Content ------------//
    main.setAttribute("class", "mainHome");
    main.innerHTML = 
        `<section id="content">
            <h1>#vempraKÖRPER</h1>
            <p>Musculação | Cross Training | Fitness | Bike Indoor | Funcional | Pilates | Capoeira | Jazz | Ballet | Estética.  </p>
        </section>`;
}

function plans() {
    //------------ Main Content ------------//
    main.setAttribute("class", "mainPlans")
    main.innerHTML = 
        `<section id="plans">
            <div class="modelBox">
                <h1>Musculação</h1>
                <p>A vista: 85,00 </p>
                <p>Três vezes: 80,00 </p>
                <p>Seis vezes: 75,00 </p>
            </div>

            <div class="modelBox">
                <h1>Fitness</h1>
                <p>A vista: 80,00 </p>
                <p>Três vezes: 75,00</p>
                <p>Seis vezes: 75,00</p>
            </div>
            
            <div class="modelBox">
                <h1>Fitness Total</h1>
                <p>A vista: 110,00</p>
                <p>Três vezes: 105,00</p>
                <p>Seis vezes: 95,00</p>
            </div>

            <div class="modelBox">
                <h1>Club Fit</h1>
                <p>A vista: 110,00</p>
                <p>Três vezes: 105,00</p>
                <p>Seis vezes: 95,00</p>
            </div>

            <div class="modelBox">
            <h1>Club Total</h1>
            <p>A vista: 140,00</p>
            <p>Três vezes: 130,00</p>
            <p>Seis vezes: 120,00</p>
        </div>

            <div class="modelBox">
            <h1>Bike Indoor</h1>
             <p>Valor mensal: 90,00</p>
            <p>2x por semana</p>
            <p>Segunda e quarta as 9:00</p>
            <p>Terça e quinta as 19:00</p>
            </div>

    <div class="modelBox">
    <h1>Dança do Ventre</h1>
    <p>Valor mensal: 70,00</p>
    <p>2x por semana.</p>

</div>

<div class="modelBox">
<h1>Pilates</h1>
<p>1x por semana: 120,00</p>
    <p>2x por semana: 195,00</p>
    <p>3x por semana: 270,00</p>
    <p>* valor mensal</p>
</div>
        </section>`;
}

function contact() {
    //------------ Main Content ------------//
    main.setAttribute("class", "mainContact");
    main.innerHTML =
        `<section id="contact">

            <div class="location">
                <h1>Onde nos encontrar</h1>
                <div id="gps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.7533505823144!2d-49.8031016850869!3d-26.106968966367404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd93c903319d93%3A0x7924d5facf4d8ca2!2sAcademia%20K%C3%B6rper%20Fitness!5e0!3m2!1spt-BR!2sbr!4v1660176340650!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="auto"></iframe>
                <div>
            </div>
        </section>`
}