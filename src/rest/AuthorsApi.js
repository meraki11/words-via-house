const AUTHORS_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class AuthorsApi {
   get = async () => {
        try {
            const resp = await fetch(AUTHORS_ENDPOINT);
            const data = await resp.json();
            return data;
        }   catch (e) {
            console.log('Oops, looks like fetchAuthors had an issue.', e);
        }
    }    

    put = async (house) => {
        console.log("we got inside the put function");
        try {
            const resp = await fetch(`${AUTHORS_ENDPOINT}/${house._id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            console.log(AUTHORS_ENDPOINT);
            console.log(house._id);
            console.log(resp);
            return await resp.json();
        }   catch (e) {
            console.log('Oops, looks like updating authors had an issue', e);
        }
    }

    post = async (house) => {
        console.log("we got inside the post function");
        try {
            const resp = await fetch(`${AUTHORS_ENDPOINT}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            console.log(AUTHORS_ENDPOINT);
            console.log(house._id);
            console.log(resp);
            return await resp.json();
        }   catch (e) {
            console.log('Oops, looks like posting words had an issue', e);
        }
    }
}

export const authorsApi = new AuthorsApi();