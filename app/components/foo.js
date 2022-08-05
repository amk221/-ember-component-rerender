import Component from '@glimmer/component';

export default class extends Component {
  constructor() {
    super(...arguments);
    console.log('constructed Foo');
  }

  willDestroy() {
    super.willDestroy(...arguments);
    // console.log('destroyed Foo');
  }
}
