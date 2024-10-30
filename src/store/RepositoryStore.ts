/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import fetchRepositories from "../services/GitHubAPI";
import { Repository } from "../types";


class RepositoryStore {
    repositories: Repository[] = [];

    isLoading = false;

    hasError = false;

    constructor() {
        makeAutoObservable(this)
    }

    getGitHubRepositories = async () => {
        this.isLoading = true
        const res = await fetchRepositories()

        console.log(res)

        runInAction(() => {
            if (!res) {
                this.isLoading = false;
                this.hasError = true;
            }
            else {
                this.repositories = res;
                this.isLoading = false
                this.hasError = false;
            }

        })
    }
}


export default new RepositoryStore();