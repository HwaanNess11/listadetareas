let materia = "";
let tarea = "";
const ingresar = document.getElementById("ingresar");
const ingmater = document.getElementById("nuevMat");
const taretot = document.getElementById("tot");
const tarecomp = document.getElementById("compl");
const conteTar = document.getElementById("most-tar");
const noTareas = document.getElementById("noreg");
let conttot=0, contcomp=0, cont=0;

window.addEventListener("load", ()=>{
    const btnAgregar = document.getElementById("btn-agr");
    const descTarea = document.getElementById("desc_tarea");
    const matFSelect = document.getElementById("mater");
    let arrMaterias = ["otra"];
    let arrTareas = [];

    descTarea.addEventListener("keyup", ()=>{
        tarea = descTarea.value;
    });

    matFSelect.addEventListener("change", (e)=>{
        if(e.target.value == "otra" && ingmater.children.length == 0)
        {
            nuevaMateria = document.createElement("input");
            nuevaMateria.type = "text";
            nuevaMateria.className = "form-label";
            nuevaMateria.placeholder = "Materia";
            nuevaMateria.id = "desc_materia";

            ingmater.appendChild(nuevaMateria);
            
            nuevaMateria.addEventListener("keyup", ()=>{
                materia = nuevaMateria.value;
                numat++;
            });
        }
        else if(e.target.value != ""){
            materia = e.target.value;
        }
    });

    btnAgregar.addEventListener("click", ()=>{

        if(tarea!="" && materia!=""){

            if(cont==0){
                conteTar.removeChild(noTareas);
                cont++;
            }

            if(arrMaterias.includes(materia)==false)
            {
                arrMaterias.push(materia);

                optNuevMat = document.createElement("option");
                optNuevMat.value = nuevaMateria.value;
                optNuevMat.innerHTML = nuevaMateria.value;
                matFSelect.appendChild(optNuevMat);
                ingmater.removeChild(nuevaMateria);
            }else{
                alert("Esta materia ya existe");
            }

            if(arrTareas.includes(tarea)==false)
            {
                arrTareas.push(tarea);
                console.log(arrTareas);

                nuevaTarea = document.createElement("div");
                nuevaTarea.className="tarea";

                let parte1 = document.createElement("div");
                parte1.className="parte";
                parte1.id="desc";
                parte1.innerHTML= materia+": "+tarea;

                let parte2 = document.createElement("div");
                parte2.className="parte";
                parte2.id="botones";

                let btn1= document.createElement("div");
                btn1.className="boton";
                btn1.id="completada";
                btn1.innerHTML="Completada";

                let btn2= document.createElement("div");
                btn2.className="boton";
                btn2.id="borrar";
                btn2.innerHTML="Borrar";

                nuevaTarea.appendChild(parte1);
                nuevaTarea.appendChild(parte2);
                parte2.appendChild(btn1);
                parte2.appendChild(btn2);

                ingresar.appendChild(nuevaTarea);

                conttot++;
                taretot.innerHTML=conttot;

                tarea = "";
                materia = "";
                

                ingresar.addEventListener("click", (e)=>{
                    let padre = e.target.parentElement;
                    let tio = padre.previousElementSibling;
                    let abuelo = padre.parentElement;
                    let tioabuelo = abuelo.firstElementSibling;
                    if(e.target.className == "boton")
                    {
                        if(e.target.id == "completada")
                        {
                            if(e.target.id != "completadaccc"){
                                e.target.style.backgroundColor = "#90EE90";
                                abuelo.style.backgroundColor = "#006600";
                                e.target.id = "completadaccc";
                                contcomp++;
                                tarecomp.innerHTML = contcomp;
                            } 

                        } else if(e.target.id == "borrar"){
                            ingresar.removeChild(abuelo);
                            let pos = arrTareas.indexOf(tio.innerHTML);
                            arrTareas.splice(pos,1);
                            if(ingresar.childElementCount == 0){
                                conteTar.appendChild(noTareas);
                                cont--;
                            }

                        }
                    }
                });
            }else{
                alert("Esta tarea ya existe")
            }
        }else{
            alert("No se especificaron todos los campos");
        }
        

    });
    
});

