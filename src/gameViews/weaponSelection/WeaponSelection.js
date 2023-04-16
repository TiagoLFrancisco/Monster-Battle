import "./WeaponSelection.css";
import { ClassWeaponList } from "./ClassWeaponsList";
import { CharacterClassList } from "../characterCreation/CharacterClassList";

export const WeaponSelection = (
  setPlayerWeapon,
  playerWeapon,
  setPlayerWeaponDamage,
  setGameViewIs,
  playerClass
) => {
  const mainAtackSelectionMessage = `As you prepare to embark on your journey through the realms, it's time to choose your attack strategy. 
  Whether you prefer to wield a sword or cast spells, your success in battle relies on your skill in selecting the right attacks at the right time. So choose wisely, and let the dice roll in your favor!`;

  const selectAttackTittle = `And since you are a ${playerClass} ${CharacterClassList[playerClass].emoji} you can chose one of these three attacks:`;

  const handleSelectWeapon = (weapon) => {
    setPlayerWeapon(weapon.name);
    setPlayerWeaponDamage(weapon.damage);
  };

  function handleConfirmWeapon() {
    setGameViewIs(4);
  }

  const weapons = ClassWeaponList[playerClass];

  return (
    <div className="ws-page-view">
      <h1 className="ws-page-tittle">Main attack selection &nbsp;&nbsp;🔱</h1>
      <p className="ws-page-description-text">{mainAtackSelectionMessage}</p>
      <p className="ws-select-attack-tittle">{selectAttackTittle}</p>
      <div className="ws-button-div">
        {weapons.map((weapon) => (
          <button
            className="ws-weapon-name-buttons"
            key={weapon.id}
            onClick={() => handleSelectWeapon(weapon)}
          >
            {weapon.name}
          </button>
        ))}
      </div>
      {playerWeapon && (
        <div>
          <p className="ws-confirmation-message">
            You have selected {playerWeapon} as your main attack.
          </p>
          <button
            className="ws-confirmation-button"
            disabled={playerWeapon === ""}
            onClick={handleConfirmWeapon}
          >
            Confirm main attack
          </button>
        </div>
      )}
    </div>
  );
};
