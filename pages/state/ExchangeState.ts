import axios from "axios";
import { atom, selector } from "recoil";

export const wonState = atom({
    key: "wonState",
    default: 0
});

export const dollorState = selector({
    key: "dollorState",
    get: ({get}) => {
        return get(wonState) / 1400;
    },
    set: ({set}, dollor: any) => {
        return set(wonState, dollor * 1400);
    }
});

export const realTimeDollorState = selector({
    key: "realTimeDollorState",
    get: async ({get}) => {
        const won = get(wonState);
        const response = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        const result = await response.json();
        console.log(result);
        return won / result[0].basePrice;
    },
    set: ({set}, exChangedWon) => {
        set(wonState, exChangedWon);
    }
})