import { Fila } from './queueSimples';
import { No } from '../node';
import { Linked } from '../linked';

const queue1: Fila = new Fila();
const ok: Fila = new Fila();
const linked: Linked = new Linked();

queue1.push(new No(6));
queue1.push(new No(7));
queue1.push(new No(8)); 

ok.push(new No(6));
ok.push(new No(7));
ok.push(new No(8));

console.log(linked.areEqual(queue1, ok));
