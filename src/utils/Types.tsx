export type Temployee = {
    name: string;
    age: number | string;
    hours: Array<Thour>;
    salary: number;
    worked: boolean;
    avatar?: string | null | undefined;
    login: string;
    password: string;
    id: any;
}

export type Tdesserts = {
    name: string,
    url?: string,
    hasStevia: boolean,
    hasTopinambura: boolean,
    fewCalories: boolean,
    vegan: boolean,
    withoutFlour: boolean,
    withoutGluten: boolean,
    withoutEggs: boolean,
    withoutMilk: boolean,
    id: number,
    ingredients: [string],
    info: {
        "kkal": number,
        "p": number,
        "f": number,
        "c": number
    }
}

export type TnewEmployee = {
    name: string;
    age: number | string;
    hours?: Array<Thour>;
    salary: number;
    worked?: boolean;
    avatar?: string | null | undefined;
    login: string;
    password: string;
}

type Thour = {
    date: string;
    revenue: number
}

export type Tplan = {
    needenPlan: number;
    total: number;
}

export type TtotalPerHours = {
    total: number;
}