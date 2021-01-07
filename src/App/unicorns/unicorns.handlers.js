/**
 * EXAMPLE: simple handler for the Unicorns
 */
export const updateUnicornsHandler = (state, action) => ({
  ...state,
  ...action.payload
});

export const updateUnicornsNameHandler = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    name: payload.name
  };
};
