export default class porcentaje{
    constructor(){
        this.mujeresprocesadas=0;
        this.hombresproce=0;
        this.porcenpersona=0;
        this.acupersonas=0;
        this.cantidadp=0;

    }

    procesarpersonas(s){
        this.acupersonas += s.nun;

        if(s.sexo == "F"){
            this.mujeresprocesadas++

        }if(s.sexo == "M"){
            this.hombresproce++

        }
      

    }

    porcentajemujer(){
        return (this.mujeresprocesadas / this.acupersonas) * 100
    }

    cantidad(){
        if(this.mujeresprocesadas > this.hombresproce){
            this.cantidadp = "Hay mas mujeres"

        }if(this.mujeresprocesadas < this.hombresproce){
            this.cantidadp = "Hay mas hombres"

        }if(this.mujeresprocesadas <= this.hombresproce){
            this.cantidadp = "Ambos por igual"

        }
  }
}