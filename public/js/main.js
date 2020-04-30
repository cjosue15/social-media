const user = document.getElementById('account');
const button = document.getElementById('sendUser');

async function getAcces(name) {
    try {
        const response = await fetch('/', {
            method: 'post',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    const data = await getAcces(user.value);
    console.log(data);
});
