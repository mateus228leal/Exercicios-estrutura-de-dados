import { No } from '../node';
import { Linked } from '../linked';

export class Fila extends Linked{

    public push(novoNode: No){
        if(this.head == null){
            this.head = novoNode;
            this.tail = novoNode;
        } else {
            this.tail.setNext(novoNode);
            this.tail = novoNode;
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
        this.head = this.head.getNext();
    }


}