/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import fetchRepositories from "../services/GitHubAPI";

class RepositoriesStore {
    repositories = []

    isLoading = false;

    hasError = false;

    constructor() {
        makeAutoObservable(this)
    }

    getGitHubUser = async (userName: string) => {
        this.isLoading = true
        const res = await fetchRepositories(userName)

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


export default new RepositoriesStore();