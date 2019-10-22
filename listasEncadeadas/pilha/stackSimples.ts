import { No } from '../node';
import { Linked } from '../linked';

export class Pilha extends Linked{

    public push(novoNode: No){
        if(this.head == null){
            this.head = novoNode;
            this.tail = novoNode;
        } else {
            novoNode.setNext(this.head);
            this.head = novoNode;
        }
    }

    public isEmpty(){
        if(this.head == null){
            return true;
        } else {
            return false;
        }
    }

    public pop(){
        console.log(this.head);
        this.head = this.head.getNext();
    }

}
