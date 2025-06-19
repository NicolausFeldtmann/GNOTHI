function showStartscreen() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    contentRef.innerHTML = 
        `
            <div class="start-screen">
                <h2 class="start-headline">Wilkommen bei GNOTHI - erkenne dich selbst</h2>

                <div class="start-content">
                    <h4 class="start-subline">Der achtsammer Selbsttest</h4>

                    <div class="start-txt">
                        Bitte beantworte die nun folgenden Fragen in Bezug auf dich selbst. <br>
                        <br>
                        Sei dabei bitte ehrlich zu dir selbst und lass dir für jede Frage Zeit. <br>
                        Fühle bei jeder Frage in dich hinein und wähle die Antwort, die am besten passt.
                    </div>
                    <div class="btn-area">
                        <button class="start-btn" onclick="start()">Los geht's!</button>
                    </div>
                </div>
            </div>
        `;
}

function showRes1(sum) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    contentRef.innerHTML =
        `
            <div class="endScreen">
                <h2>WUNDERBAR!</h2>
                <h3>Dein Score liegt bei ${sum}</h3>
                <div class="result">
                    Dir scheint es im Moment wirklich gut zu gehen! <br>
                    Du machtst so alles Richtig. <br>
                    Gönn dir was schönes!
                </div>
            </div>
        `;
}

function showRes2(sum) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    contentRef.innerHTML = 
        `
            <div class="endScreen">
                <h2>Sehr gut!</h2>
                <h3>Dein Score liegt bei ${sum}</h3>
                <div class="result">
                    Es macht ganz den Eindruck, als ginge es dir im Augelblick richtig gut! <br>
                    Achte ein bischen auf dich und alles bleibt in bester Ordung. <br>
                    Mach mal n pause und versuch dich ein wenig zu endpannen.
                </div>
            </div>
        `;
}

function showRes3(sum) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    contentRef.innerHTML = 
        `
            <div class="endScreen">
                <h2>Hey, gerade is n bischen viel?</h2>
                <h3>Dein Score liegt bei ${sum}</h3>
                <div class="result">
                    Momentan schein bei dir das eine oder anderre los zu sein. <br>
                    Was immer dich gerade belastet, wenn du kannst dann nimm ein bischen Abstand. <br>
                    Versuch dir nach Mölichkeit zu geben was du brauchst. <br>
                    Höre mal wieder bewusst Musik die dir da Hilft. <br>
                    Wenn das möglich ist, such n bischen körperliche nähe. <br>
                    <br>
                    Und mach dir deswegen keine zusätlichen Sorgen! <br>
                    Sowas ist von Zeit zu Zeit normal!
                </div>
            </div>
        `;
}

function showRes4(sum) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    contentRef.innerHTML = 
        `
            <div class="endScreen">
                <h2>Oh No! Dir geht es nicht gut</h2>
                <h3>Dein Score liegt bei ${sum}</h3>
                <div class="result">
                    Es ist alles gerade viel zu viel! <br>
                    Dich scheint gerade wirklich etwas schwer zu belasten! <br>
                    Wenn das für dich geht, vertrau dich jeamnden an. Auch wenn du das eventuell gerade nicht sehen kannst, deine Freunde sind IMMER für dich da!<br>
                    Gieb dir und auch deinem Körper was ihr braucht. Ess was, trink was, tu dir was gutes! <br>
                    Wenn das möglich ist, such n bischen körperliche nähe. <br>
                    <br>
                    Das ist sicherlich alles schlimm, aber das wird so nicht bleiben! <br>
                    Du kommst da auch wieder raus!
                </div>
            </div>
        `;
}

function showRes5(sum) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    contentRef.innerHTML = 
        `
            <div class="endScreen">
                <h2>Dir geht es wirklich nicht gut!</h2>
                <h3>Dein Score liegt bei ${sum}</h3>
                <div class="result">
                    Bei dir scheint wirklich eine Notlage zu bestehen! <br>
                    Ich weis das ist schwer und unangehnem, aber BITTE such dir jetzt Hilfe! <br>
                    Wenn ein offizieller Weg zu anstregend ist, meld dich bei jemanden, bei dem du dich sicher fühlst! <br>
                    Ach wenn es schwer fällt, isolier dich nicht weiter! <br>
                    Du bist an einem Punk, an dem du ohne weiteres nicht so leicht wieder hoch kommst. <br>
                    <br>
                    BITTE rede dir selbst nicht ein das du schleht oder wertlos bist. Das ist der schwarze Hund der dich quälen will! <br>
                    Du bist ein wunderfoller Mensch, der nur zu viel fühlt! Das wird auch alles blad wieder besser! <br>
                    <br>
                    <br>
                    <a class="phone" href="tel:0800/1110111">Krisen Telefon</a>
                </div>
            </div>
        `;
}

function getQuestTemplate(quest, ans1, ans2, ans3, ans4, ans5, ans6) {

    return`
        <div class="question-body">
            <h3 class="question">${quest}</h3>
            <div class="answers">
                <div class="answer" id="ans1" onclick="select('ans1')">${ans1}</div>
                <div class="answer" id="ans2" onclick="select('ans2')">${ans2}</div>
                <div class="answer" id="ans3" onclick="select('ans3')">${ans3}</div>
                <div class="answer" id="ans4" onclick="select('ans4')">${ans4}</div>
                <div class="answer" id="ans5" onclick="select('ans5')">${ans5}</div>
                <div class="answer" id="ans6" onclick="select('ans6')">${ans6}</div>
            </div>
            <div class="btn-area">
                <button class="next-btn" onclick="nextQuestion()">Nächste Frage</button>
            </div>
        </div>
    `;
}