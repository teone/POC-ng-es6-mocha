'use strict';

function MainController (CustomService, GithubService) {
  this.list = CustomService.list;

  this.addToService = (item) => {
    CustomService.add(item);
    this.item = null;
  }

  GithubService.loadUser('teone')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.warn(err);
  });
}

export { MainController }