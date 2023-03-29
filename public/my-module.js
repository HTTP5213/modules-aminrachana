import { theShire, buckland } from './public/another-module.js';

const statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;

export { theShire, statement };
