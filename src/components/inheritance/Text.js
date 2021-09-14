import Emoji from "./Emoji.js";

class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const decoratedText = this.addEmoji("I am JavaScript Language", "💙");
    return super.render(decoratedText);
  }
}

export default Text;
