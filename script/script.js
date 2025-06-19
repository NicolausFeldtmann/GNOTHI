let isActive = false;
let currentQuestion = 0;

let score = [];
let results = [];

let currentDate = [];
let resultsDate = [];
let selectAns = null;

let starMelodie = new Audio('./assets/audio/starHarp.mp3');
let clickSound = new Audio('./assets/audio/click.mp3');
let endMelodie = new Audio('./assets/audio/endHarp.mp3'); 

function init() {
    showStartscreen();
}

function start() {
    showHeadline();
    renderQuestion(currentQuestion);
    starMelodie.play();
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
        document.getElementById(ansId).classList.toggle('choosenAns');
        clickSound.play();
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
    endMelodie.play();
    getCurrentDate();
}

function showHeadline() {
    let x = document.getElementById('main-headline');
    x.classList.toggle('show');
}

function showData() {
    load();
}

function saveResult() {
    saveLocal();
}

function saveLocal() {
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("currentDate", JSON.stringify(currentDate));
}

function load() {
    let savedScore = localStorage.getItem('score');
    let savedDate = localStorage.getItem('currentDate');
    if(savedScore && savedDate) {
        results = JSON.parse(savedScore);
        resultsDate = JSON.parse(savedDate);
    }
    console.log(results);
    console.log(resultsDate);
    
}

function getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yy = today.getFullYear();

    today = dd + '/' + mm + '/' + yy;
    currentDate.push(today);
    console.log(today);
}



