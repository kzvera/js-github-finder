class GitHub {
    constructor() {
        this.client_id = '174047973c572f475cc2';
        this.client_secret = '9c8f72cb420ce9820b831ffd32a96e80438d1ba8';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile, // ES6 version of profile: profile
            repos // repos: repos
        }
    }
}