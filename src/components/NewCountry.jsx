import { useState } from "react";
import trigger from "../assets/trigger.svg";
import "../App.css";

export default function NewCountry(props) {
  const [name, setText] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(name,gold,silver,bronze);
    hideDialog();
  }
  function hideDialog() {
    setText("");
    setShowDialog(false);
  }
  function handleKeyUp(e) {
    e.keyCode === 27 && hideDialog();
  }

  return (
    <>
      {showDialog ? (
        <form onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
           <div id="overlay" onClick={hideDialog}></div> 
          <div id="dialog">
            <div>
            <header>
                <h4>Enter new country name</h4>
                </header>
              <input
                id="text"
                type="text"
                placeholder="Enter name"
                maxLength="16"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                autoFocus
                value={name}
                onChange={(e) => setText(e.target.value)}
                onFocus={(e) => e.target.select()}
              />
            </div>
            <div>
              <button
                disabled={name.trim().length === 0}
                type="submit"
                id="save"
              >
                save
              </button>
            </div>
            <div>
              <button id="cancel" type="button" onClick={hideDialog}>
                cancel
              </button>
            </div>
          </div>
        </form>
      ) : (
        <img
          src={trigger}
          alt="New Word"
          id="trigger"
          onClick={() => setShowDialog(true)}
        />
      )}
    </>
  );
}