import "./Battleground.css";

export function Battleground(
  currentMonster,
  monsterHealth,
  monsterDamage,
  playerLevel,
  playerHealth,
  playerDamage,
  playerClass,
  playerWeapon,
  playerWeaponDamage
) {
  return (
    <div className="view-battleground">
      <div className="battleground-page-tittle">
        <h1>💀 Battlegrounds 💀</h1>
      </div>
      <div className="pve-panel">
        <h2 className="h2-tittle">Battlefield</h2>
        <div className="pve-board">
          <div className="monster-info">
            <h2>{currentMonster.name}</h2>
            <p>Level: {currentMonster.level}</p>
            <p>
              Health: {monsterHealth} / {currentMonster.health}
            </p>
            <p>Attack Damage: {monsterDamage}</p>
          </div>
          <div className="player-info">
            <h2>Player</h2>
            <p>Level: {playerLevel}</p>
            <p>Health: {playerHealth} / 200</p>
            <p>Attack Damage: {playerDamage}</p>
            <p>Player Class: {playerClass}</p>
            <p>
              Weapon: {playerWeapon.name} {"("}+{playerWeaponDamage}
              {" damage)"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
