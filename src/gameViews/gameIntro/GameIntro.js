import "./GameIntro.css";

export const GameIntro = (setGameViewIs) => {
  const gameTittle = "DnD Monster Battle";
  const description =
    "In this game you will embody a Hero.\n You will be able to defeat monsters, gain experience and become stronger, use diferent weapons and magics,\n and much more!\n\nWhen you are ready, press the Start button to beggin your adventure!";

  const changeViewHandler = () => {
    setGameViewIs(1);
  };

  return (
    <div className="view-game-intro">
      <h1 className="tittle-game-intro">Welcome to the {gameTittle} v.0.01!</h1>
      <h4 className="tittle-description">Description:</h4>
      <p className="description-text">{description}</p>
      <button className="start-adventure-button" onClick={changeViewHandler}>
        Start Adventure
      </button>
    </div>
  );
};
