import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Technique1Controller extends Controller {
  @tracked items = ['foo', 'bar'];

  @action
  changeItems() {
    this.items = ['bar', 'foo'];
  }
}
