export interface IApi {
    base: string;
    clouds: object;
    coord: object;
    dt: number;
    id: number;
    main: object;
    name: string;
    sys: object;
    timezone: number;
    visibility: number;
    weather: object[];
    wind: object;
}