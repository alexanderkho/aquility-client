// import React from "react";

// import {
//   Button,
//   ButtonGroup,
//   Popover,
//   Radio,
//   RadioGroup,
//   Position
// } from "@blueprintjs/core";

// import styles from "./index.module.scss";

// export function SelectorButton({ selectedValue, selectionList, icon, label }) {
//   function handleSelection(e) {}

//   return (
//     <ButtonGroup>
//       <Button
//         text={selectedValue}
//         icon={icon}
//         className={styles["selection-button"]}
//       />
//       <Popover
//         position={Position.BOTTOM}
//         content={
//           <RadioGroup
//             className={styles["selection-radio-group"]}
//             label={label}
//             onChange={handleSelection}
//             selectedValue={selectedValue}
//           >
//             {selectionList.map((item, index) => (
//               <Radio label={item} value={item} key={index} />
//             ))}
//           </RadioGroup>
//         }
//       >
//         <Button rightIcon="chevron-down" />
//       </Popover>
//     </ButtonGroup>
//   );
// }

import React from "react";

import {
  Button,
  Alignment,
  Menu,
  MenuItem,
  Icon,
  Popover,
  Position
} from "@blueprintjs/core";

import styles from "./index.module.scss";

export function SelectorButton({
  selectedObject,
  selectionList,
  handleClick,
  isDisabled=false
}) {
  return (
    <Popover
      disabled={isDisabled}
      canEscapeKeyClose
      position={Position.BOTTOM}
      content={
        <Menu>
          {selectionList.map((thisObject, index) => (
            <MenuItem
              key={index}
              text={thisObject}
              name={thisObject}
              labelElement={
                thisObject === selectedObject ? (
                  <Icon icon="symbol-circle" />
                ) : null
              }
              onClick={e => handleClick(thisObject, e)}
            />
          ))}
        </Menu>
      }
    >
      <div className={styles["selection-button"]}>
        <Button
          disabled={isDisabled}
          alignText={Alignment.LEFT}
          small
          fill
          rightIcon="chevron-down"
        >
          {selectedObject}
        </Button>
      </div>
    </Popover>
  );
}
