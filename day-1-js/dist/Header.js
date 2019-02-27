"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Header {
  constructor(props) {
    this.information = props;
  }

  render() {
    let hat = this.information.hat;
    return `<header>
    Welcome to the ${hat} website!
    </header>`;
  }

}

exports.default = Header;
//# sourceMappingURL=Header.js.map