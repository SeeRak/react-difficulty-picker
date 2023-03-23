import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import style from "./style.module.css";
export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function udpateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div>
      <h1 className={style.title}>Select your React difficulty</h1>
      <div className={style.workspace}>
        <MenuList
          onItemClick={udpateDifficulty}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
