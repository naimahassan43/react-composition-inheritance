function Text({ addEmoji }) {
  const text = "I am JavaScript Language";

  return <div>{addEmoji ? addEmoji(text, "💙") : text}</div>;
}

export default Text;
