import React, { Component } from "react"

class LocalStorage extends Component{
    render () {
        const person = {
            name: 'Japheth',
            age: '16'


        }
        //lOCAL STORAGE
        //CONVERTINGT ITEMS TO SON
        const personTOJSON = JSON.stringify(person)

        //SAVING TO LOCAL STORAGE
        localStorage.setItem("newPerson",personTOJSON)

        //GETTING BACK FROM LOCAL STORAGE
        const getPerson = localStorage.getItem("newPerson");
        //CONVERTIN TO AN OBEJECT
        const personParse = JSON.parse(getPerson);

        return (
            <div>
             <h3>The stringified version is:</h3>
             <p>{getPerson}</p>
             <h4>The parsed version is</h4>
             <p>{personParse.name}and {personParse.age}</p>

            </div>
        )
        
        
    }
}
export default LocalStorage;