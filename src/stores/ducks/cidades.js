import api from '../../services/api'

export const Types = {
    ADD: "cidades/ADD",
    REMOVE: "cidades/REMOVE",
    LIST: "cidades/LIST",
    DETAIL: "cidades/DETAIL"
};

const INITIAL_STATE = [{
    id: 1,
    nome: 'KlennerSom',
    email: 'meta1663@localiza.vrau'
}]

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return { ...state, cidades: action.payload };
        case Types.REMOVE:
            return { ...state, cidades: action.payload };

        case Types.LIST:
            return { ...state, cidades: action.payload.data };
        case Types.DETAIL:
            return { ...state, cidades: action.payload.data };
        default:
            return {cidades:state};

    }
}

export const Creators = {
    ListCidades: () => {
        const request = api.get();
        return {
            type: Types.LIST,
            payload: request
        }
    }
}