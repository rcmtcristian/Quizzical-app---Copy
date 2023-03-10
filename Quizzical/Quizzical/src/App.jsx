import { useState } from "react";
import topShape from "./assets/smileLarge.png";
import bottomShape from "./assets/skull-1.png";
import Question from "./Components/Questions/fetchQuestions";
import "./App.css";
import useSound from "use-sound";
import transitionSfx from "./assets/sounds/transition_up.wav";
import handleButton from "./Components/handleButton";
import HandleCount from "./Components/Questions/HandleCount";
import { contextValues, AppContext } from "./Components/ContextCount";

function App() {
  const [gameBegan, setGameBegan] = useState(false);
  const [questionNum, setQuestionNum] = useState(5);

  const [play] = useSound(transitionSfx);
  function handleClick() {
    play();
    setGameBegan(true);
  }

  return (
    <AppContext.Provider value={contextValues}>
      <main>
        <div className="background"> </div>
        <section>
          <img className="topShape" src={topShape} alt="" />
          {gameBegan ? (
            <section className="question-container">
              <Question />
            </section>
          ) : (
            <section className="welcome-container">
              <h1>
                Welcome to Quizzical by {""}
                <a href="https://github.com/rcmtcristian">rcmtcristian</a>
              </h1>
              <p>
                Quizzical is an adjective that describes a person or expression
                that shows curiosity or confusion. It can also mean strange or
                unusual.
              </p>
              <button className="startGame--button" onClick={handleClick}>
                Start Game
              </button>
              {/* <HandleCount /> */}
            </section>
          )}
          <img className="bottomShape" src={bottomShape} alt="" />
        </section>
      </main>
    </AppContext.Provider>
  );
}

export default App;
