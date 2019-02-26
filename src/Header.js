export default class Header {
  constructor(props) {
    this.information = props;
  }
  render() {
    let { hat } = this.information;

    return `<header>
    Welcome to the ${hat} website!
    </header>`;
  }
}
