var arr;
var butt;
var keys;
var przycisk;
var record_play;
var record_start;
var checkboxes;
var play_All;
var record_div;
var dodaj;
keys = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f'];
console.log(keys);
appStart();
var record = [];
var startRecord = [];
for (var index = 0; index < 4; index++) {
    record[index] = [];
}
// record[0] = [];
// record[1] = [];
// record[2] = [];
// record[3] = [];
function appStart() {
    //addButton();
    document.addEventListener('keypress', onKeyPress);
    getAudioElements();
    getElements();
    clickPlay();
    recordButton();
    playRecord();
    playAll();
    dodaj.addEventListener('click', addRecorder);
}
function getElements() {
    butt = document.querySelectorAll('[name]');
    butt.forEach(function (element) {
        console.log(element.name);
    });
    record_play = document.querySelectorAll('#record_btn');
    record_start = document.querySelectorAll('#record-start');
    checkboxes = document.querySelectorAll('#check');
    play_All = document.querySelector('#play-all');
    record_div = document.querySelector('.record-div');
    dodaj = document.querySelector('.dodaj');
}
function getAudioElements() {
    arr = document.querySelectorAll('[data-sound]');
}
function onKeyPress(event) {
    console.log(event);
    var key = event.key;
    var time = event.timeStamp;
    checkboxes.forEach(function (check, i) {
        if (check.checked) {
            console.log("test" + [i]);
            record[i].push({ key: key, time: time });
        }
    });
    playSound(key);
}
function recordButton() {
    record_start.forEach(function (elem, i) { return elem.addEventListener('click', function (click) {
        if (checkboxes[i].checked) {
            record[i] = [];
            startRecord[i] = click.timeStamp;
        }
    }); });
}
function playRecord() {
    record_play.forEach(function (elem, i) { return elem.addEventListener('click', function () {
        console.log(record);
        console.log(startRecord[i]);
        record[i].forEach(function (sound) {
            var t = sound.time - startRecord[i];
            setTimeout(function () {
                playSound(sound.key);
            }, t);
        });
    }); });
}
function playAll() {
    play_All.addEventListener('click', function () {
        checkboxes.forEach(function (elem, i) {
            if (elem.checked) {
                console.log("Przymcisk: " + [i + 1]);
                record[i].forEach(function (sound) {
                    var t = sound.time - startRecord[i];
                    setTimeout(function () {
                        playSound(sound.key);
                    }, t);
                });
            }
        });
    });
}
function addButton() {
    var context = document.getElementById('gora');
    var button = document.createElement('button');
    button.innerText = "t";
    button.id = "button_xD";
    button.name = "t";
    context.appendChild(button);
}
function playSound(key) {
    var index = this.keys.indexOf(key);
    if (index > -1) {
        this.arr[index].currentTime = 0;
        this.arr[index].play();
    }
    else {
        console.log("xD");
    }
}
function clickPlay() {
    this.przycisk = document.querySelectorAll('#button_xD');
    this.przycisk.forEach(function (element) {
        element.onclick = function () {
            playSound(element.name.toString());
        };
    });
}
function addRecorder() {
    var x = false;
    if (x) {
        var div = document.createElement('div');
        div.classList = 'record';
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'check';
        var button_play = document.createElement('button');
        button_play.id = 'record_btn';
        var button_record = document.createElement('button');
        button_record.id = 'record-start';
        div.appendChild(input);
        div.appendChild(button_play);
        div.appendChild(button_record);
        record_div.appendChild(div);
        var i = record.length + 1;
        button_play.innerText = "Play " + i;
        button_record.innerText = "Start " + i;
        for (var index = 0; index < i; index++) {
            record[index] = [];
        }
        console.log("Miał");
        console.log(record[4]);
        appStart();
    }
    else {
        console.log("Ktoś nie chce, żebym działał");
    }
}
//Niepotrzebny switch, uproszczone wyżej
// function playSound2(key: string) {
//     switch(key){
//         case "q": {
//             this.arr[0].currentTime = 0;
//             this.arr[0].play();
//             break;
//         }
//         case "w": {
//             this.arr[1].currentTime = 0;
//             this.arr[1].play();
//             break;
//         }
//         case "e": {
//             this.arr[2].currentTime = 0;
//             this.arr[2].play();
//             break;
//         }
//         case "r": {
//             this.arr[3].currentTime = 0;
//             this.arr[3].play();
//             break;
//         }
//         case "a": {
//             this.arr[4].currentTime = 0;
//             this.arr[4].play();
//             break;
//         }
//         case "s": {
//             this.arr[5].currentTime = 0;
//             this.arr[5].play();
//             break;
//         }
//         case "d": {
//             this.arr[6].currentTime = 0;
//             this.arr[6].play();
//             break;
//         }
//         case "f": {
//             this.arr[7].currentTime = 0;
//             this.arr[7].play();
//             break;
//         }
//     }
// }
