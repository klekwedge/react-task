import { RepositoriesResponse } from "../../types";


const fetchUser = async () => {
    const url = 'https://api.github.com/search/repositories?q=javascript&sort=starts&order&page=2';

    const res = await fetch(url);
    const data = (await res.json()) as RepositoriesResponse

    return data.items
};


export default fetchUser;