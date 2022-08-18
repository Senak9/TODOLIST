import React from "react";
import Header from "../../component/header";
import "./style.css";

export default function ListBasic() {
  return (
    <div className="containerList">
      <div className="headerList">
        <input
          name="Tarefa"
          placeholder="Sua próxima tarefa..."
          type="text"
          // value={}
          // onChange={(e) => setUsername(e.target.value)}
          // required
        />
        <button className="btn-list"></button>
      </div>
    </div>
  );
}
