'use strict';

function GithubService ($http) {

  this.loadUser = (userName) => {
    return new Promise((resolve, reject) => {
      $http.get(`https://api.github.com/users/${userName}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
    })
  }
}

export { GithubService }