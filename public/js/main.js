const user = document.getElementById('account');
const button = document.getElementById('sendUser');

async function getAcces() {
    try {
        const response = await fetch('http://localhost:3000/', { method: 'post' });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function getUserInformation(name) {
    try {
        const access = await getAcces();
        const response = await fetch(`https://api.twitter.com/1.1/users/show.json?screen_name=cjosue159`, {
            headers: {
                Authorization: `Bearer ${access}`,
            },
        });
        console.log(response.json());
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    // const twitter = await getUserInformation(user.value);
    // console.log(twitter);
    const data = await getUserInformation();
    console.log(data);
});
