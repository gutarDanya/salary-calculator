import { Tplan, Temployee, TtotalPerHours } from "./Types";

export const employeesData: Array<Temployee> = [
    {
        name: 'Катя',
        age: 18,
        salary: 100,
        hours: [{
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 1241
        }],
        worked: true
    },
    {
        name: 'Даниил',
        age: 22,
        salary: 100,
        hours: [{
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 500
        },
        {
            date: '18.03.2024',
            revenue: 500
        }],
        worked: false,
        avatar: 'https://sun9-20.userapi.com/s/v1/if2/K0tmu-xAOioYNrJXZbrjGEqjGSbZ3FWtrnzFzY7r7gqMMVcKTg1wv8SO8qXQEcMZ5W34AI5u0QdlcwnFBtViahzD.jpg?quality=95&crop=308,831,1260,1260&as=50x50,100x100,200x200,400x400&ava=1&u=DeqxvZ208FKABsJlX_SwUqra8DyoOKND9I3WuHCgri0&cs=200x200'
    },
    {
        name: 'Кирилл',
        age: 19,
        salary: 100,
        hours: [{
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 1241
        },
        {
            date: '17.03.2024',
            revenue: 1241
        }],
        worked: false
    },
    {
        name: 'Иван',
        age: 20,
        salary: 110,
        hours: [{
            date: '14.03.2024',
            revenue: 1314,
        },{
            date: '14.03.2024',
            revenue: 200
        },{
            date: '14.03.2024',
            revenue: 2000
        },{
            date: '14.03.2024',
            revenue: 1200
        }],
        worked: true,
    },
    {
        name: 'Камиля',
        age: 20,
        salary: 70,
        hours: [{
            date: '14.03.2024',
            revenue: 1314,
        },{
            date: '14.03.2024',
            revenue: 200
        },{
            date: '14.03.2024',
            revenue: 2000
        },{
            date: '14.03.2024',
            revenue: 1200
        }],
        worked: true
    },
    {
        name: 'Алина',
        age: 20,
        salary: 50,
        hours: [],
        worked: false,
        avatar: 'https://sun9-35.userapi.com/s/v1/if2/vdSLHxTSPoy_C7WjkTugAb4bBKy3k3SK5LSrP_Tx2OxnqeFuXgI5dOkCAQ0O_nScbYF1geto-lEdU-XTuwCbJbQD.jpg?quality=95&crop=148,0,2341,2341&as=50x50,100x100,200x200,400x400&ava=1&u=gTYz8mTTWjST1sMNjT4PCdzITXzAweMa8L97EwD46g8&cs=200x200'
    }
]

export const plan: Tplan = {
    needenPlan: 40000,
    total: 26000
}