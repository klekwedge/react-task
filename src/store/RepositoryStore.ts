/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import fetchRepositories from "../services/GitHubAPI";
import { Repository } from "../types";

class RepositoryStore {
    repositories: Repository[] = [];

    isLoading = false;

    hasError = false;

    constructor() {
        makeAutoObservable(this);
    }

    getGitHubRepositories = async (currentPage: number) => {
        this.isLoading = true;

        try {
            const res = await fetchRepositories(currentPage);

            runInAction(() => {
                this.repositories.push(...res);
                this.isLoading = false;
                this.hasError = false;
            });
        } catch (error) {
            runInAction(() => {
                this.isLoading = false;
                this.hasError = true;
            });
        }
    };

    editRepository = (id: number, newName: string) => {
        runInAction(() => {
            const repoIndex = this.repositories.findIndex(repo => repo.id === id);
            if (repoIndex !== -1) {
                this.repositories[repoIndex] = {
                    ...this.repositories[repoIndex],
                    name: newName,
                };
            }
        });
    };

    deleteRepository = (id: number) => {
        runInAction(() => {
            this.repositories = this.repositories.filter(repo => repo.id !== id);
        });
    };
}

export default new RepositoryStore();
