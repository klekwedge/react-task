import { RepositoriesResponse } from "../types";


const fetchRepositories = async (currentPage: number) => {
    const url = `https://api.github.com/search/repositories?q=javascript&sort=starts&order&page=${currentPage}`;

    const res = await fetch(url);
    const data = (await res.json()) as RepositoriesResponse

    return data.items
};


export default fetchRepositories;