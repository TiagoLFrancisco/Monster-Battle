import "./GameIntro.css";

export const GameIntro = (setGameViewIs, playerName, setPlayerName) => {
  const gameTittle = "DnD Monster Battle";
  const description = `Welcome adventurer, to a world of magic and mystery! 

  Gather your courage, sharpen your wit, and prepare to embark on an epic journey through lands 
  filled with dragons, dungeons, and danger. Whether you are a mighty warrior, a wise wizard, 
  or a cunning rogue, you will find challenges and rewards aplenty in this fantastical realm.

  So gather your party and set forth, for adventure awaits! 
  May the roll of the dice be ever in your favor!`;

  const changeViewHandler = () => {
    setGameViewIs(1);
  };

  const colors = [
    "#E84A5F",
    "#FFA07A",
    "#FFC300",
    "#3C8DBC",
    "#9B59B6",
    "#27AE60",
    "#F44336",
    "#00BCD4",
    "#FF9800",
    "#34495E",
  ];

  return (
    <div className="game-intro-page">
      <h1 className="game-intro-page-tittle">
        🧝🏼&nbsp;&nbsp;Welcome to the {gameTittle}!&nbsp;&nbsp;🧝‍♀️
      </h1>

      <p className="gi-page-description-text">{description}</p>

      <p className="chose-name-tittle">
        <span className="big-emojis">🧙🏻‍♀️&nbsp;&nbsp;</span>
        Please, choose a name to begin your adventure!
        <span className="big-emojis">&nbsp;&nbsp;🧙🏻</span>
      </p>
      <label className="enter-name-label">
        <input
          className="enter-name-input-box"
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </label>
      <button
        className="start-adventure-button"
        disabled={playerName === "" || playerName.length < 3}
        onClick={changeViewHandler}
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
      >
        Start Adventure
      </button>
    </div>
  );
};
