import axios from 'axios';
import {atom, selector} from 'recoil';
import { url } from '../chart/UseBarchartState';


export const BarchartState = atom({
    key: `BarchartState`,
    default: [{
        Country: "",
        Value: ""
    }]
});

export const BarchartSelector = selector({
    key: `BarchartSelector`,
    get: async ({get}) => {
        const response = await axios.get(url);
        console.log('csv -> json', csvToJSON(response.data))
        return csvToJSON(response.data);
    },
    set: ({set}, changedData) => {
        set(BarchartState, changedData);
    }
})

const csvToJSON = (csv_string: string) => {
    const rows = csv_string.split("\r\n");
    const jsonArray = [];
    const header = rows[0].split(",");
    for(let i = 1; i < rows.length; i++){
        let obj: any = {};
        let row = rows[i].split(",");
        for(let j=0; j < header.length; j++)
            obj[header[j]] = row[j];
        jsonArray.push(obj);
    }
    return jsonArray;
}
 