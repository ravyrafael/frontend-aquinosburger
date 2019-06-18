export const Types = {
    ADD: "clientes/ADD",
    REMOVE: "clientes/REMOVE",
    LIST: "clientes/LIST",
    DETAIL: "clientes/DETAIL"
};

const INITIAL_STATE = [{
    name: 'KlennerSom',
    email: 'meta1663@localiza.vrau'
}]

export default function (state = INITIAL_STATE, action) {
    switch (action.Type) {
        case Types.ADD:
            return state

        case Types.REMOVE:

            return state
        case Types.LIST:
            return state

        case Types.DETAIL:
            return state
        default:
            return state

    }
}