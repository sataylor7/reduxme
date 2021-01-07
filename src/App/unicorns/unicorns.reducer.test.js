import initialState from "./unicorns.model";
import * as C from "./unicorns.creators";
import UnicornsReducer from "./unicorns.reducer";

describe("unicorns reducer should", () => {
    let state;

    test("initialize to initial state", () => {
        state = UnicornsReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    test("handle clearUnicornsErrors()", () => {
        const action = C.clearUnicornsErrors();
        const expectedResult = {
            ...state,
            errors: {}
        }
        state = UnicornsReducer(state, action);

        expect(state).toEqual(expectedResult);
    });

    test("handle setUnicornsErrors()", () => {
        const error =  { message: "oopsy daisy" };
        const expectedResult = {
            ...state,
            errors: { ...error}
        }
        const action = C.setUnicornsErrors(error);
        state = UnicornsReducer(state, action);
        expect(state).toEqual(expectedResult);
    });

    // add the rest of the reducer tests
});