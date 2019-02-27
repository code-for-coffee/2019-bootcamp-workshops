export default class FakeReactComponent {
  constructor(props) {
    this.props = props;
    // props : { name: 'Adam', location: 'Changsha', havingFun: true}
  }
  render() {
    // props.name, props.location, props.havingFun
    const { name, location, havingFun } = this.props;
    return this.makeString(name, location, havingFun);
  }
  toString() {
    const { name, location, havingFun } = this.props;
    return this.makeString(name, location, havingFun);
  }
  makeString(name, location, havingFun) {
    return `<section>${name} is current in ${location} 
    and is having fun: ${havingFun}</section>`;
  }
}
