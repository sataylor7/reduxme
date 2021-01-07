/**
 * EXAMPLE: simple handler for the Unicorns
 */
export const updateUnicornsHandler = (state, action) => ({
  ...state,
  ...action.payload
});
