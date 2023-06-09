import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { MenuItem } from "primereact/menuitem";
import logo from "../../public/logo.png";
export default function NavBar() {
  const items: MenuItem[] = [
    {
      label: "Gerenciamento de Termos&Contratos",
    },
  ];

  const start = <img alt="logo" src={logo} height="40" className="mr-2"></img>;

  return (
    <div>
      <Menubar
        model={items}
        start={start}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 2,
        }}
      />
    </div>
  );
}
