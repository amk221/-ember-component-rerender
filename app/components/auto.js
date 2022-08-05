import Component from '@glimmer/component';
import Foo from './foo';
import Bar from './bar';

export default class extends Component {
  get Component() {
    switch (this.args.item) {
      case 'foo':
        return Foo;
      case 'bar':
        return Bar;
    }
  }
}
