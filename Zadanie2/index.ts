
let arr: NodeListOf<HTMLAudioElement>;
let butt: NodeListOf<HTMLButtonElement>;
let keys: string[];
let przycisk: NodeListOf<HTMLButtonElement>;
let record_play: NodeListOf<HTMLButtonElement>;
let record_start: NodeListOf<HTMLButtonElement>;
let checkboxes: NodeListOf<HTMLInputElement>;
let play_All: HTMLButtonElement;
let record_div: HTMLDivElement;
let dodaj: HTMLButtonElement;

keys = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f']
console.log(keys);

appStart();

const record: {key, time}[][] = [];
const startRecord: number[] = [];
for (let index = 0; index < 4; index++) {
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

function getElements(): void {
    butt = document.querySelectorAll('[name]');
    butt.forEach(element => {
        console.log(element.name);
        
    });
    record_play = document.querySelectorAll('#record_btn');
    record_start = document.querySelectorAll('#record-start');
    checkboxes = document.querySelectorAll('#check');
    play_All = document.querySelector('#play-all');
    record_div = document.querySelector('.record-div');
    dodaj = document.querySelector('.dodaj');

    
}

function getAudioElements(): void {

    arr = document.querySelectorAll('[data-sound]');

}

function onKeyPress(event: KeyboardEvent): void {
    console.log(event);
    const key = event.key;
    const time = event.timeStamp;
    
    checkboxes.forEach((check, i) => {
        if (check.checked) {
            console.log("test" + [i]);
            record[i].push({key, time});
        }
    });
    playSound(key);
    
}

function recordButton(): void {
    record_start.forEach((elem, i) => elem.addEventListener('click', (click) => {
        if (checkboxes[i].checked) {
            record[i] = [];
        startRecord[i] = click.timeStamp;
        }
    }));
}

function playRecord():void {
    record_play.forEach((elem, i) => elem.addEventListener('click', () => {
        console.log(record);
        console.log(startRecord[i]);
        
        record[i].forEach(sound => {
            const t = sound.time - startRecord[i];
            setTimeout(() => {
                playSound(sound.key)
            }, t);
        });
    }));
}

function playAll(): void {

    play_All.addEventListener('click', () => {
        checkboxes.forEach((elem, i) => {
            if (elem.checked) {
                console.log("Przymcisk: " + [i + 1]);
                
                record[i].forEach(sound => {
                    const t = sound.time - startRecord[i];
                    setTimeout(() => {
                        playSound(sound.key)
                    }, t);
                });
            }
        });
    });

    
}

function addButton(): void {
    var context = document.getElementById('gora');

    var button = document.createElement('button');
    button.innerText = "t";
    button.id = "button_xD";
    button.name = "t";

    context.appendChild(button);
}
function playSound(key: string): void {
    var index: number = this.keys.indexOf(key);
    if (index > -1){
        this.arr[index].currentTime = 0;
        this.arr[index].play();
    }
    else {
        console.log("xD");
        
    }
}

function clickPlay() {
    this.przycisk = document.querySelectorAll('#button_xD');

    this.przycisk.forEach(element => {

        element.onclick = function() {
            playSound(element.name.toString());
        }
        
    });
}

function addRecorder(): void {
    const x: boolean = false
    
    if (x) {
        
        let div: any = document.createElement('div');
        div.classList = 'record';
        let input: HTMLInputElement = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'check';
        let button_play: HTMLButtonElement = document.createElement('button');
        button_play.id = 'record_btn';
        let button_record: HTMLButtonElement = document.createElement('button');
        button_record.id = 'record-start';

        div.appendChild(input);
        div.appendChild(button_play);
        div.appendChild(button_record);

        record_div.appendChild(div);

        let i: number = record.length + 1;
        
        button_play.innerText = "Play " + i;
        button_record.innerText = "Start " + i;

        
        for (let index = 0; index < i; index++) {
            record[index] = [];
            
        }


        console.log("Miał");
        console.log(record[4]);
        appStart();
    } else {
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
