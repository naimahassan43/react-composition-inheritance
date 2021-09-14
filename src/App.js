import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Bracket from "./components/composition/Bracket";

function App() {
  // return <Text />;
  return (
    <Emoji>
      {({ addEmoji }) => (
        <Bracket>
          {({ addBracket }) => (
            <Text addEmoji={addEmoji} addBracket={addBracket} />
          )}
        </Bracket>
      )}
    </Emoji>
  );
}

export default App;
