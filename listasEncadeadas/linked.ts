import { No } from './node';

export class Linked{

    protected head: No;
    protected tail: No;

    constructor(){
        this.head = null;
        this.tail = null;
    }

    public getSize(){
        let begin: No = this.head;
        let contador: number = 1;
        if(this.head == null){
            contador--;
            return contador
        } else {
            while(begin.getNext() != null){
                contador++;
                begin = begin.getNext();
            }
            return contador;
        }
    }

    public getSum(){
        let node: No = this.head;
        let contador: number = 0;
        if(node != null){
            while(node){
                contador += node.getValue();
                node = node.getNext();
            }
            return contador;
        } else { return 'Lista vazia'; }
    }
    
    public areEqual(list1: Linked, list2: Linked){
        let list1Begin: No = list1.head;
        let list2Begin: No = list2.head;
        let trip: boolean = true;

        while(list1Begin && list2Begin){
            if(list1Begin.getValue() == list2Begin.getValue()){
                list1Begin = list1Begin.getNext();
                list2Begin = list2Begin.getNext();
            } else{
                trip = false;
                break;
            }
        }
        return trip;
    }

    public reversePrint(list: Linked){
        let lista: Array<number> = [];
        let node: No = list.head;
        while(node != null){
            lista.push(node.getValue());
            node = node.getNext();
        }
        console.log(lista.reverse());
    }

}