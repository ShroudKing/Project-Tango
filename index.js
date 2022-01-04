let data = {}

function CreateUser(id) {
    let attributes = {}

    attributes.id = id;
    attributes.name = 'hmm' + id.toString();
    attributes.credits = Math.floor(Math.random() * 1000000);

    data[id] = attributes;
}

for (let a = 1; a <= 15; a++) {
    CreateUser(a);
};

console.log(data);