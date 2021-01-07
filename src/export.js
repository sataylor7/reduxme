// need to export each features reducer, creator and container/component
// this is what is imported into the main app that the user will interact with
export { default as bobApp } from "./App/app.reducer";
 
export * from "./App/unicorns/unicorns.creators";
export {
  default as UnicornsContainer
} from "./App/unicorns/unicorns.container";
