import "./WeaponSelection.css";

export const WeaponSelection = (
  setPlayerWeapon,
  playerWeapon,
  setPlayerWeaponDamage,
  setGameViewIs
) => {
  const handleSelectWeapon = (weapon) => {
    setPlayerWeapon(weapon);
    setPlayerWeaponDamage(weapon.weaponDamage);
  };

  const weapons = [
    { name: "Sword", id: 1, weaponDamage: 2 },
    { name: "Axe", id: 2, weaponDamage: 4 },
    { name: "Bow", id: 3, weaponDamage: 6 },
  ];

  function handleCloseInventory() {
    setGameViewIs(4);
  }

  return (
    <div className="weapon-selection-view">
      <h2>Select your weapon:</h2>
      {weapons.map((weapon) => (
        <button
          className="weapons-name-buttons"
          key={weapon.id}
          onClick={() => handleSelectWeapon(weapon)}
        >
          {weapon.name}
        </button>
      ))}
      {playerWeapon && (
        <p>You have selected {playerWeapon.name} as your weapon.</p>
      )}
      <div>
        <button onClick={handleCloseInventory}>Confirm Weapon</button>
      </div>
    </div>
  );
};
