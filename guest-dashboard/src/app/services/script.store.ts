interface Scripts {
  name: string;
  src: string;
}
/**
 * add multiple scripts after the http response is loaded
 */
export const ScriptStore: Scripts[] = [
  {name: 'initializeAffix', src: '../../assets/js/custom.js'}
];
