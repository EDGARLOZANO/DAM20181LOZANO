"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno_1 = require("./Alumno");
var array = new Array();
var alumno = new Alumno_1.Alumno();
alumno.insert("12400283", "Edgar", "Lozano", 8, "Masculino", "03-03-2017", true, array);
alumno.insert("13401360", "Lesly", "Madrigal", 8, "Masculino", "03-03-2017", true, array);
alumno.read();
