import Route from '@ember/routing/route';

export default class extends Route {
  model() {
    console.log('index route model hook is running!')
  }
}