import { IWeather } from "./IWeather";
import { IApi } from "./IApi";

export class getWeather implements IWeather {
    public apiKey: string = "a8543b8a81ea0bba50748b2a9f6269c0";
    public city: string;
    public weather: string;
    public description: string;
    public country: string;
    public temperature: string;
    sky: string;
    pressure: string;
    humidity: string;
    background: any;
    

    constructor(city: string){
        this.city = city;
        this.getWeatherData();
    }

    public async getWeatherData(): Promise<any> {
        //console.log("Tu powinno byc napisane jakie miasto: " + " " + this.city+ " " + this.apiKey);
        const opURL: any = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;
        const weatherResponse: any = await fetch(opURL);
        const weatherData: any = await weatherResponse.json();
        console.log(weatherData);
        this.getData(weatherData);
    }
    
    public getDataFirst(): void {

    }

    private getData(data: any): void {
        //do dopracowania, dodaj wiecej informacji lub uprość wyciąganie danych z jsona
        this.weather = data.weather[0].main;
        
        this.description = "Opis: " + data.weather[0].description;
        this.country = "Miasto z: " + data.sys.country;
        this.pressure = "Ciśnienie: " + data.main.pressure;
        this.temperature = "Temperatura: " + Math.round(data.main.temp - 273.15);
        this.humidity = "Wilgotność: " + data.main.humidity;
        console.log(data.weather[0].icon);
        
        this.background = `http://openweathermap.org/img/wn/${data.weather[0].icon.toString()}@2x.png`
    }


}