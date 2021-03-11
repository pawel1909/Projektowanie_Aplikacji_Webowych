class Stat{
    data1I: HTMLInputElement;
    data2I: HTMLInputElement;
    data3I: HTMLInputElement;
    data4I: HTMLInputElement;

    sum: HTMLInputElement;
    avg: HTMLInputElement;
    min: HTMLInputElement;
    max: HTMLInputElement;

    constructor(){
        this.startApp();
    }
    startApp() {
        this.getInputs();
        this.watchInput();
    }
    getInputs() {
        this.data1I = document.querySelector('#data1');
        this.data2I = document.querySelector('#data2');
        this.data3I = document.querySelector('#data3');
        this.data4I = document.querySelector('#data4');
        this.sum = document.querySelector('#sum');
        this.avg = document.querySelector('#avg');
        this.min = document.querySelector('#min');
        this.max = document.querySelector('#max');
    }
    watchInput() {
        this.data1I.addEventListener('input', () => this.computeData());
        this.data2I.addEventListener('input', () => this.computeData());
        this.data3I.addEventListener('input', () => this.computeData());
        this.data4I.addEventListener('input', () => this.computeData());
    }
    computeData() {
        const d1 = +this.data1I.value;
        const d2 = +this.data2I.value;
        const d3 = +this.data3I.value;
        const d4 = +this.data4I.value;

        const s = d1 + d2 + d3 + d4;
        const av = s/4;
        const mi = Math.min(d1,d2,d3,d4);
        const ma = Math.max(d1, d2, d3, d4);

        this.showStat(s, av, mi, ma);
    }
    showStat(s: number, av: number, mi: number, ma: number) {
        this.sum.value = s.toString();
        this.avg.value = av.toString();
        this.min.value = mi.toString();
        this.max.value = ma.toString();
    }
}

const start = new Stat();