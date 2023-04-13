import "./GameIntro copy.css";

export const GameIntro = (setGameViewIs, playerName, setPlayerName) => {
  const gameTittle = "DnD Monster Battle";
  const description = `Welcome Adventurer! Against all odds, you are here!
  
  In this game, you will embody a brave Hero that is going on an adventure!

  You will be able to defeat monsters, gain experience, become stronger!
   
  Use diferent weapons, magics, equipments and much more!


  `;

  const changeViewHandler = () => {
    setGameViewIs(1);
  };

  return (
    <div className="game-intro-page">
      <h1 className="game-intro-page-tittle">
        🧝🏼 Welcome to the {gameTittle} v.0.01! 🧙🏻
      </h1>
      <h4 className="description-tittle">
        Description: <span className="description-text">{description}</span>
      </h4>
      <h4 className="chose-name-tittle">
        Please, choose a name to begin your adventure!
      </h4>
      <label className="enter-name-label">
        Enter your name:&nbsp;&nbsp;&nbsp;
        <input
          className="enter-name-input-box"
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </label>
      <p className="ready-message">
        Are you ready to start {playerName} ?{" "}
        <span className="big-emojis">&nbsp;🧙🏻‍♀️</span>
      </p>
      <button
        className="start-adventure-button"
        disabled={playerName === "" || playerName.length < 3}
        onClick={changeViewHandler}
      >
        Start Adventure
      </button>
    </div>
  );
};
