import "./Battleground.css";

export function Battleground(
  currentMonster,
  monsterHealth,
  monsterDamage,
  playerLevel,
  playerCurrentHealth,
  playerRoundDamage,
  playerClass,
  playerWeapon,
  playerWeaponDamage,
  playerMaxHealth,
  playerInitialDamage,
  playerEmoji,
  playerName
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
            <h2>{playerName}</h2>
            <p>💥 &nbsp;Damage Delt: {playerRoundDamage}</p>
            <p>📚 &nbsp;Level: {playerLevel}</p>
            <p>
              ❤️️ &nbsp;Current Health: {playerCurrentHealth} /{" "}
              {playerMaxHealth}
            </p>

            <p>
              {playerEmoji} &nbsp;Player Class: {playerClass}
            </p>
            <p>💚 &nbsp;Player Max Health: {playerMaxHealth} </p>
            <p>🎇 &nbsp;Player Base Damage: {playerInitialDamage} </p>
            <p>
              🙌 Weapon: {playerWeapon.name} {"("}+{playerWeaponDamage}
              {" damage)"}
            </p>
            <p>
              🎆 &nbsp;Total Damage: {playerInitialDamage + playerWeaponDamage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
