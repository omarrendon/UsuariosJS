// Class with values of the person
class Person {
    constructor(nombre, edad, sexo, correo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo,
        this.correo = correo;
    }
}

class ActionPerson {
    
    addPerson(person) {
        const mostrar = document.getElementById('mostrar')
        const mostrarPersona = document.createElement('div')
        mostrarPersona.innerHTML = `
            <div id="mostrar">
                <strong>Nombre</strong>: ${person.nombre} -
                <strong>Product</strong>: ${person.edad} -
                <strong>Product</strong>: ${person.sexo} -
                <strong>Product</strong>: ${person.correo} -
                <a href="#" class="btn btn-danger" name="delete">ELIMINAR</a>
            </div>
        `;
        mostrar.appendChild(mostrarPersona)
    }

    resetPerson() {
        const reset = document.getElementById('form')
        reset.reset()
    }

    deletePerson(element) {
        if(element.name === 'delete'){
            element.parentElement.remove()
        }
    }

}

//DOM EVENTS
 const fomr = document.getElementById('form')
 form.addEventListener('submit', (e) => {
    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById('edad').value
    const sexo = document.getElementsByName('sexo')
    const correo = document.getElementById('mail').value

    for(let i = 0; i < sexo.length; i++) {
        if(sexo[i].checked) {
            var newSex = sexo[i].value
            console.log(newSex)
        }
    }
    
    //Instace of a object Person
    const person = new Person(nombre, edad, newSex, correo)
    //Instance of a object ActionPerson
    const action = new ActionPerson()
     
    if(nombre === "" || edad === "" || sexo === "" || correo === "") {
        alert('Rellene los campos correctamente')
    }else {
        action.addPerson(person)
        action.resetPerson()
    }
    //action.deletePerson(person)
    e.preventDefault()
 });

 document.getElementById('mostrar').addEventListener('click', (e) => {
    const action = new ActionPerson()
    action.deletePerson(e.target)
    
    e.preventDefault()
 });