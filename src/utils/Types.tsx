export type Temployee = {
    name: string;
    age: number | string;
    hours: Array<Thour>;
    salary: number;
    worked: boolean;
    avatar?: string | null | undefined;
    login: string;
    password: string;
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