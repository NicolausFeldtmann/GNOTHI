let isActive = false;
let currentQuestion = 0;
let score = [];
let selectAns = null;

function init() {
    renderQuestion(currentQuestion);
}

function renderQuestion(i) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    if ( i >= questions.length) {
        showResult();
    } else {
    let quest = questions[i].question;
    let ans1 = questions[i].answer1;
    let ans2 = questions[i].answer2;
    let ans3 = questions[i].answer3;
    let ans4 = questions[i].answer4;
    let ans5 = questions[i].answer5;
    let ans6 = questions[i].answer6;
    contentRef.innerHTML += getQuestTemplate(quest, ans1, ans2, ans3, ans4, ans5, ans6);
    }
}

function select(ansId) {
    if (!isActive) {
        selectAns = ansId;
        isActive = true;
        console.log(ansId);
        document.getElementById(ansId).classList.add('choosenAns');
    }
}

function nextQuestion() {
if ( isActive && selectAns) {
    pushAns(selectAns);
    currentQuestion++;
    renderQuestion(currentQuestion);
    isActive = false;
    selectAns = null;
}
}

function pushAns(ansId) {
    switch(ansId) {
        case 'ans1':
            score.push(6);
            break;

        case 'ans2': 
            score.push(5);
            break;

        case 'ans3':
            score.push(4);
            break;

        case 'ans4':
            score.push(3);
            break;

        case 'ans5':
            score.push(2);
            break;

        case 'ans6':
            score.push(1);
            break;
    }
    console.log(score);
}

function showResult() {
    let sum = score.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);
    if (sum > 58) {
        showRes1();
    } else if ( sum > 48) {
        showRes2();
    } else if (sum > 28) {
        showRes3();
    } else if (sum > 20) {
        showRes4();
    } else {
        showRes5();
    }
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
                <button onclick="nextQuestion()">Nächste Frage</button>
            </div>
        </div>
    `;
}