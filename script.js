//Задание 1. Необходимо получить список всех пользователей
//с помощью бесплатного API (https://jsonplaceholder.typicode.com/users)
//и отобразить их на странице.

const URL = 'https://jsonplaceholder.typicode.com/users';
const body = document.querySelector('.container');
// console.log(body);

const getData2 = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
};

try {
    const data = await getData2(URL);
    console.log(data);
    data.forEach(el => {
        body.insertAdjacentHTML('beforeend', `
            <figure>
                <p class="name">Name: ${el.name}</p>
                <p class="username">Username: ${el.username}</p>
                <p class="phone">Phone: ${el.phone}</p>
            </figure>
        `);
    });
} catch (error) {
    console.log(error);
}