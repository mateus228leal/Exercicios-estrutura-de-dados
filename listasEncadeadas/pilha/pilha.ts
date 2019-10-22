import { No } from '../node';
import { Pilha } from './stackSimples';
import { Linked } from '../linked';

const stack1: Pilha = new Pilha();
const linked: Linked = new Linked();

stack1.push(new No(9)); 
stack1.push(new No(5)); 
stack1.push(new No(4)); 
stack1.push(new No(4)); 

linked.reversePrint(stack1);



