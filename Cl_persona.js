export default class persona{
    constructor(nombre,sexo){
        this.nombre = nombre;
        this.sexo = sexo;
    }

    set sexo(s){
        this.sexo= +s;
    }

    get sexo (){
        return this.sexo;
    }
}