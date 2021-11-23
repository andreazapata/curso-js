let global = [];
let id = 0;

const llamarAPI = () => {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then((resp) => resp.json())
        .then((data) => {

        console.log(data);
        global = data;



        for (const dato of data)
        $("#selector").append(`
        <option value="${id++}">${dato.name}</option>
        `)

    })
}

llamarAPI();

const llamarAPI2 = () => {
        let id = $("#selector").val();
        $("#informacion").html(`
            <h2>${global[id].name}</h2>
            <img src="${global[id].image}" alt="${global[id].name}">
            <h3>Información:</h3>
            <p>Casa: ${global[id].house}</p>
            <p>Fecha de nacimiento: ${global[id].dateOfBirth}</p>
            <h4>Barita:</h4>
            <p>Núcleo:${global[id].wand.core}</p>
        `)
};

$("#btn-1").click(() =>{
    llamarAPI2();
}
)


    
