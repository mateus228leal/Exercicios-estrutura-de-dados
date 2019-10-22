export class No{
    private valor: number;
    private next: No;

    constructor(value: number){
        this.valor = value;
        this.next = null;
    }

    public setNext(amarro: No){
        this.next = amarro;
    }
    
    public getNext(){
        return this.next;
    }

    public getValue(){
        return this.valor;
    }
}