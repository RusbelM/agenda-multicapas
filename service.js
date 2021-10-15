const apiUrl = 'http://www.raydelto.org/agenda.php'

export async function getAllContacts() {
    const res = await fetch(apiUrl);

    const data = await res.json();
    return data;
}

export async function insertContact({ nombre, apellido, telefono }) {
    await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ nombre, apellido, telefono }) // body data type must match "Content-Type" header
    });
}