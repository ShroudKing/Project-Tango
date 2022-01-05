let data = {};

function AddRow(userData) {
    const rawRowHTML = `
    <div class=\'row\'>
        <div class=\'id\'><span>` + userData.id.toString() + `</span></div>
        <div class=\'name\'><span>` + userData.name.toString() + `</span></div>
        <div class=\'credits\'><span>` + userData.credits.toString() + `</span></div>
    </div>
    `;

    document.getElementById('six').innerHTML += rawRowHTML;
}

function CreateUser(id) {
    let attributes = {}

    attributes.id = id;
    attributes.name = 'User' + id.toString();
    attributes.credits = Math.floor(Math.random() * 1000000);

    data[id] = attributes;
    AddRow(attributes);
}

for (let a = 1; a <= 7; a++) {
    CreateUser(a);
};

console.log(data);