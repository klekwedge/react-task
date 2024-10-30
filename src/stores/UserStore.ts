/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import fetchUser from "../services/GitHubAPI";
import { LocalGithubUser } from "../types";


class UserStore {
    user: LocalGithubUser | null = null;

    isLoading = false;

    hasError = false;

    constructor() {
        makeAutoObservable(this)
    }

    getGitHubUser = async (userName: string) => {
        this.isLoading = true
        const res = await fetchUser(userName)

        runInAction(() => {
            if (!res) {
                this.isLoading = false;
                this.hasError = true;
            }
            else {
                this.user = res;
                this.isLoading = false
                this.hasError = false;
            }

        })
    }
}


export default new UserStore();