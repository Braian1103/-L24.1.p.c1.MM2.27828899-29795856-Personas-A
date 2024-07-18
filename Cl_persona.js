export default class persona{
    constructor(nombre,nun,sexo){
        this.nombre = nombre;
        this.sexo = sexo;
        this.nun= nun;
    }

    set sexo(s){
        this.nombre= +s;
    }

    get sexo (){
        return this.nombre;
    }
}