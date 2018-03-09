"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.no_control = "";
        this.name = "";
        this.apellidos = "";
        this.promedio = 0;
        this.genero = "";
        this.fecha_nac = "";
        this.activo = true;
        this.array = [];
        this.alu = {};
    }
    Alumno.prototype.insert = function (NoControl, Name, Apellidos, Promedio, Genero, Fecha, Activo, array2) {
        if (Promedio === void 0) { Promedio = 0; }
        this.no_control = NoControl;
        this.name = Name;
        this.apellidos = Apellidos;
        this.promedio = Promedio;
        this.genero = Genero;
        this.fecha_nac = Fecha;
        this.activo = Activo;
        this.array = array2;
        this.alu = {
            "No control": this.no_control,
            "Nombre": this.name,
            "Apellidos": this.apellidos,
            "Promedio ": this.promedio,
            "Genero": this.genero,
            "Fecha": this.fecha_nac,
            "Activo": this.activo
        };
        this.array.push(this.alu);
        console.log("Se inserto con Exito: " + this.no_control);
    };
    Alumno.prototype.read = function () {
        this.array.forEach(function (element) {
            console.log(element);
        });
    };
    Alumno.prototype.delete = function () {
    };
    return Alumno;
}());
exports.Alumno = Alumno;
