export type Temployee = {
    name: string;
    age: number | string;
    hours: Array<Thour>;
    salary: number;
    worked: boolean;
    avatar?: string | undefined;
    login: string;
    password: string;
    id: any;
    status: string,
    tel: string
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
    id: string,
    ingredients: Array<string>,
    info: {
        "kkal": number,
        "p": number,
        "f": number,
        "c": number
    }
}

export type TdessertsFilter = {
    withoutGluten?: boolean,
    vegan?: boolean,
    withoutFlour?: boolean,
    withoutEggs?: boolean,
    withoutMilk?: boolean,
    fewCalories?: boolean,
    withoutTopinambura?: boolean,
    withoutStevia?: boolean,
    searchQuery: string
}
export type TnewEmployee = {
    name: string;
    age: number | string;
    hours?: Array<Thour>;
    salary: number;
    worked?: boolean;
    avatar?: string | undefined;
    login: string;
    password: string;
    id: string
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

export type TCoffeShop = {
    name: string,
    adess: string,
    plan: number,
    complitedPlan: number,
    id: string
}