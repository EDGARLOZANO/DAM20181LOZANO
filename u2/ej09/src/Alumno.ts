export class Alumno{
    private  no_control:string;
    private name:string;
    private apellidos:string;
    private promedio:number;
    private genero:string;
    private fecha_nac:string;
    private activo:boolean;
    private array:any[];
    private alu:object;
    constructor(){
        this.no_control="";
        this.name="";
        this.apellidos="";
        this.promedio=0;
        this.genero="";
        this.fecha_nac="";
        this.activo=true;
        this.array=[]; 
        this.alu={};
    }
    insert(NoControl:string,Name:string,Apellidos:string,Promedio:number=0,
        Genero:string,Fecha:string,Activo:boolean,array2:any[]){
            this.no_control=NoControl;
            this.name=Name;
            this.apellidos=Apellidos;
            this.promedio=Promedio;
            this.genero=Genero;
            this.fecha_nac=Fecha;
            this.activo=Activo
            this.array=array2; 
            this.alu={
                "No_control":this.no_control,
                "Nombre":this.name,
                "Apellidos":this.apellidos,
                "Promedio":this.promedio,
                "Genero":this.genero,
                "Fecha":this.fecha_nac,
                "Activo":this.activo};
        
                this.array.push(this.alu);
        
                console.log("Se inserto con Exito: "+this.no_control);
            
    }

    read(){
        console.log("Alumnos");
        this.array.forEach(element => {
            console.log(element);
        });
    }

    delete(control:string){
          
          this.array.forEach(element => {
                    var t:string=element.No_control;
                  if((control.localeCompare(t))==0){

                    this.array=this.array.filter( num => num.No_control.localeCompare(control));
                    return console.log("Se elimino con exito: "+control);
                
                  }
        });
        }

    update(NoControl:string,Name:string,Apellidos:string,Promedio:number=0,
    Genero:string,Fecha:string,Activo:boolean){
        this.delete(NoControl)
        this.insert(NoControl,Name,Apellidos,Promedio,
            Genero,Fecha,Activo,this.array)
            

    }    
}