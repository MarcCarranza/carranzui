// Dependencies
import React from "react";

// Styles
import "./Menu.css";

// Types
import { MenuProps } from "./Menu.types";
import Button from "../Button";

const optionsListDummy = [
  {
    label: "Option 1",
    value: 0,
    children: [
      {
        label: "Children 1",
        value: 10,
        parent: 0,
      },
      {
        label: "Children 2",
        value: 11,
        parent: 0,
      },
    ],
  },
  {
    label: "Option 2",
    value: 1,
    children: [
      {
        label: "Children 1",
        value: 20,
        parent: 1,
      },
      { label: "Children 2", value: 21, parent: 1 },
    ],
  },
];

const Menu: React.FC<MenuProps> = ({ optionsList = optionsListDummy }) => {
  // State
  const [isSelected, setSelected] = React.useState<number>();

  // Handlers
  // const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
  //   event: React.MouseEvent,
  // ) => {
  //   console.log("Button clicked:", event.currentTarget);
  // };

  return (
    <nav className="menu">
      <ul className="menu__list">
        {optionsList.map((option) => {
          return (
            <li className="menu__item" key={option.value}>
              <Button
                text={option.label}
                onClick={() => setSelected(option.value)}
                value={option.value}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
