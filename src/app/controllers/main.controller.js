'use strict';

function MainController (CustomService, GithubService) {
  this.list = CustomService.list;

  this.addToService = (item) => {
    CustomService.add(item);
    this.item = null;
  }

  this.res = 'pre';

  GithubService.loadUser('teone')
  .then(res => {
    console.log('resolved');
    this.res = res;
  })
  .catch(err => {
    console.warn(err);
  });
}

export { MainController }