import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const valueAtomTypes = [
  "number",
  "direction",
  "variable",
  "indirect",
  "property",
  "expression",
  "true",
  "false",
];

export const valueOperatorTypes = [
  "add",
  "sub",
  "mul",
  "div",
  "mod",
  "min",
  "max",
  "eq",
  "ne",
  "gt",
  "gte",
  "lt",
  "lte",
  "and",
  "or",
  "atan2",
  // Bitwise
  "shl",
  "shr",
  "bAND",
  "bOR",
  "bXOR",
];

export const valueUnaryOperatorTypes = [
  "rnd",
  "not",
  "isqrt",
  "abs",
  // Bitwise
  "bNOT",
];

export const isUnaryOperation = (value) => {
  return !!value && valueUnaryOperatorTypes.includes(value.type);
};

export const isValueOperation = (value) => {
  return !!value && valueOperatorTypes.includes(value.type);
};

export const isValueAtom = (value) => {
  return !!value && valueAtomTypes.includes(value.type);
};

function UnionSelect() {
  return (
    <div className={styles.unionSelect}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <ellipse
          ry="10"
          id="svg_1"
          cy="12"
          cx="12"
          strokeWidth="3"
          stroke="#ccc"
          fill="transparent"
        ></ellipse>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    </div>
  );
}

function FakeInput({ children }) {
  return <div className={styles.input} children={children} />;
}

export function FakeValue({ children }) {
  if (isValueAtom(children)) {
    return <FakeValueAtom type={children.type} value={children.defaultValue} />;
  }
  if (isValueOperation(children)) {
    let op = children.type;
    if (op === "eq") {
      op = "==";
    } else if (op === "lt") {
      op = "<";
    } else {
      op = "==";
    }
    return (
      <div className={styles.valueInputBrackets}>
        <FakeValue>{children.valueA}</FakeValue>
        <div className={styles.valueInputOperationButton}>{op}</div>
        <FakeValue>{children.valueB}</FakeValue>
      </div>
    );
  }
  return <FakeValueAtom type="variable" />;
}

function FakeValueAtom({ type, value }) {
  let displayValue = value ?? 0;
  if (type === "true") {
    displayValue = "True";
  } else if (type === "false") {
    displayValue = "False";
  } else if (type === "expression") {
    displayValue = "6 * $health";
  } else if (type === "variable") {
    displayValue = "$Variable0";
  }
  return (
    <div className={styles.valueAtomInput}>
      <div className={styles.valueAtomInputButton}>
        {type === "number" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z"></path>
          </svg>
        )}
        {type === "direction" && (
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M14.145 8.633l-2.145-8.633-2.148 8.636c-.572.366-1.034.877-1.358 1.477l-8.494 1.887 8.494 1.887c.324.6.786 1.111 1.358 1.477l2.148 8.636 2.157-8.64c.571-.367 1.03-.879 1.353-1.479l8.49-1.881-8.492-1.884c-.324-.603-.788-1.116-1.363-1.483zm-2.145 5.367c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm7 5l-3.43-2.186c.474-.352.893-.771 1.245-1.245l2.185 3.431zm-3.521-11.882l3.521-2.117-2.119 3.519c-.386-.542-.86-1.015-1.402-1.402zm-6.955 9.767l-3.524 2.115 2.118-3.521c.387.543.862 1.018 1.406 1.406zm-1.34-8.453l-2.184-3.431 3.431 2.184c-.474.352-.894.772-1.247 1.247z" />
          </svg>
        )}
        {type === "true" && (
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M21.5 2H2.5V7H9V22H15V7H21.5V2Z" />
          </svg>
        )}
        {type === "false" && (
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M18.5 2H6V22H12V14.5H17V10.5H12V6.5H18.5V2Z" />
          </svg>
        )}
        {type === "variable" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.7148438,22.1757812 L12.714,20.229 L12.7800926,20.2258391 C13.6949267,20.1603492 14.530599,19.9802517 15.2871094,19.6855469 C16.2597656,19.3066406 17.0253906,18.7519531 17.5839844,18.0214844 C18.1425781,17.2910156 18.421875,16.40625 18.421875,15.3671875 L18.421875,15.34375 C18.421875,14.0625 18.0097656,13.0683594 17.1855469,12.3613281 C16.3613281,11.6542969 15.1484375,11.1210938 13.546875,10.7617188 L12.714,10.579 L12.714,6.513 L12.8085938,6.52539062 C13.0585938,6.56835938 13.2929688,6.6328125 13.5117188,6.71875 C13.9492188,6.890625 14.3046875,7.14257812 14.578125,7.47460938 C14.8515625,7.80664062 15.015625,8.21875 15.0703125,8.7109375 L15.0820312,8.734375 L18.1875,8.72265625 L18.1992188,8.7109375 C18.1601562,7.71875 17.8769531,6.85742188 17.3496094,6.12695312 C16.8222656,5.39648438 16.0996094,4.83203125 15.1816406,4.43359375 C14.5390625,4.1546875 13.8208789,3.97339844 13.0270898,3.88972656 L12.714,3.863 L12.7148438,1.890625 L11.3671875,1.890625 L11.367,3.856 L11.2021123,3.86429398 C10.3338638,3.9304591 9.54123264,4.11241319 8.82421875,4.41015625 C7.90234375,4.79296875 7.17578125,5.33984375 6.64453125,6.05078125 C6.11328125,6.76171875 5.84765625,7.609375 5.84765625,8.59375 L5.84765625,8.6171875 C5.84765625,9.875 6.25390625,10.8671875 7.06640625,11.59375 C7.87890625,12.3203125 9.05078125,12.859375 10.5820312,13.2109375 L11.367,13.384 L11.367,17.597 L11.2177136,17.5815529 C10.8854432,17.5394611 10.5876116,17.469308 10.3242188,17.3710938 C9.86328125,17.1992188 9.50195312,16.9511719 9.24023438,16.6269531 C8.97851562,16.3027344 8.80859375,15.921875 8.73046875,15.484375 L8.73046875,15.4609375 L5.6015625,15.4609375 L5.58984375,15.484375 C5.62890625,16.5078125 5.92773438,17.375 6.48632812,18.0859375 C7.04492188,18.796875 7.79882812,19.3359375 8.74804688,19.703125 C9.48632812,19.9887153 10.3014082,20.1632427 11.193287,20.2267072 L11.367,20.236 L11.3671875,22.1757812 L12.7148438,22.1757812 Z M11.367,10.268 L11.2575,10.2376563 C10.59,10.0464062 10.0875,9.82265625 9.75,9.56640625 C9.328125,9.24609375 9.1171875,8.84375 9.1171875,8.359375 L9.1171875,8.3359375 C9.1171875,7.9765625 9.2265625,7.65625 9.4453125,7.375 C9.6640625,7.09375 9.98828125,6.87109375 10.4179688,6.70703125 C10.6635045,6.61328125 10.9422034,6.54631696 11.2540657,6.50613839 L11.367,6.495 L11.367,10.268 Z M12.714,17.6 L12.714,13.69 L12.8831676,13.7330514 C13.6502131,13.9410834 14.201527,14.1713423 14.5371094,14.4238281 C14.9472656,14.7324219 15.1523438,15.15625 15.1523438,15.6953125 L15.1523438,15.71875 C15.1523438,16.109375 15.0371094,16.4492188 14.8066406,16.7382812 C14.5761719,17.0273438 14.2304688,17.2480469 13.7695312,17.4003906 C13.5061384,17.4874442 13.2032047,17.5496253 12.8607302,17.586934 L12.714,17.6 Z"
              fillRule="nonzero"
            ></path>
          </svg>
        )}
        {type === "expression" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0.445923 0H23.5541V5.65642H19.4566V4.09756H9.22323L15.8426 12L9.22323 19.9024H19.4567V18.3436H23.5543V24H0.445923L10.4974 12L0.445923 0Z" />
          </svg>
        )}
      </div>
      <div className={styles.input}>{displayValue}</div>
    </div>
  );
}

function FakeTextarea({ children }) {
  return <div className={styles.textarea} children={children} />;
}

function FakeCodeTextarea({ children }) {
  return (
    <div className={clsx(styles.textarea, styles.code)} children={children} />
  );
}

function FakeSelect({ children }) {
  return (
    <div className={styles.select}>
      {children}
      <div className={styles.flexGrow} />
      <svg
        height="20"
        width="20"
        viewBox="0 0 20 20"
        ariaHidden="true"
        focusable="false"
      >
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    </div>
  );
}

function FakePaletteSwatch() {
  return (
    <div className={styles.paletteSwatch}>
      <div style={{ backgroundColor: "rgb(232, 248, 224)" }}></div>
      <div style={{ backgroundColor: "rgb(176, 240, 136)" }}></div>
      <div style={{ backgroundColor: "rgb(80, 152, 120)" }}></div>
      <div style={{ backgroundColor: "rgb(32, 40, 80)" }}></div>
    </div>
  );
}

function FakeToggleButtons({ options, moreOptions, value }) {
  return (
    <div className={styles.toggleButtons}>
      <div className={styles.toggleButtonsRow}>
        {options.map((o) => (
          <div
            className={clsx(styles.toggleButtonsOption, {
              [styles.toggleButtonsOptionSelected]: Array.isArray(value)
                ? value.includes(o.value)
                : value === o.value,
            })}
          >
            {o.label}
          </div>
        ))}
      </div>
      {moreOptions && (
        <div className={styles.toggleButtonsRow}>
          {moreOptions.map((o) => (
            <div
              className={clsx(styles.toggleButtonsOption, {
                [styles.toggleButtonsOptionSelected]: Array.isArray(value)
                  ? value.includes(o.value)
                  : value === o.value,
              })}
            >
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const TriangleIcon = ({ angle }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ transform: `rotate(${angle}deg)` }}
  >
    <path d="M24 22h-24l12-20z" />
  </svg>
);

function ScriptEventFieldInput({ field }) {
  if (field.type === "actor") {
    return (
      <FakeSelect>
        <img
          className={styles.selectIcon}
          src="/img/script-glossary/actor.png"
        />
        {field.defaultValue === "player" ? "Player" : "Actor 1"}
      </FakeSelect>
    );
  }
  if (field.type === "emote") {
    return (
      <FakeSelect>
        <img
          className={styles.selectIcon}
          src="/img/script-glossary/emote.png"
        />
        Love
      </FakeSelect>
    );
  }
  if (field.type === "avatar") {
    return (
      <FakeSelect>
        <img
          className={styles.selectIcon}
          src="/img/script-glossary/actor.png"
        />
        Avatar 1
      </FakeSelect>
    );
  }
  if (field.type === "scene") {
    return <FakeSelect>Scene 1</FakeSelect>;
  }
  if (field.type === "animationstate") {
    return <FakeSelect>Default</FakeSelect>;
  }
  if (field.type === "overlayColor") {
    return <FakeSelect>Black</FakeSelect>;
  }
  if (field.type === "cameraSpeed") {
    return <FakeSelect>Speed 1</FakeSelect>;
  }
  if (field.type === "moveSpeed") {
    return <FakeSelect>Speed 2</FakeSelect>;
  }
  if (field.type === "animSpeed") {
    return <FakeSelect>Speed 4</FakeSelect>;
  }
  if (field.type === "fadeSpeed") {
    return <FakeSelect>Speed 1</FakeSelect>;
  }
  if (field.type === "customEvent") {
    return <FakeSelect>My Custom Script</FakeSelect>;
  }
  if (field.type === "engineField") {
    return <FakeSelect>Jump Velocity</FakeSelect>;
  }
  if (field.type === "music") {
    return <FakeSelect>My Track 1</FakeSelect>;
  }
  if (field.type === "music") {
    return <FakeSelect>My Track 1</FakeSelect>;
  }
  if (field.type === "soundEffect") {
    return <FakeSelect>Beep</FakeSelect>;
  }
  if (field.type === "engineFieldValue") {
    return <FakeValue>0</FakeValue>;
  }
  if (field.type === "number") {
    return <FakeInput>{field.placeholder || field.defaultValue}</FakeInput>;
  }
  if (field.type === "text") {
    return <FakeInput>{field.placeholder || field.defaultValue}</FakeInput>;
  }
  if (field.type === "matharea") {
    return <FakeInput>{field.placeholder || field.defaultValue}</FakeInput>;
  }
  if (field.type === "textarea" && field.singleLine) {
    return <FakeInput>{field.placeholder || field.defaultValue}</FakeInput>;
  }
  if (field.type === "textarea" && !field.singleLine) {
    return (
      <FakeTextarea>{field.placeholder || field.defaultValue}</FakeTextarea>
    );
  }
  if (field.type === "code") {
    return (
      <FakeCodeTextarea>
        {field.placeholder || field.defaultValue}
      </FakeCodeTextarea>
    );
  }
  if (field.type === "references") {
    return (
      <div className={clsx(styles.button, styles.buttonSmall)}>
        Add Reference
      </div>
    );
  }
  if (field.type === "moveType") {
    return (
      <div className={styles.button}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M6 11v-4l-6 5 6 5v-4h12v4l6-5-6-5v4z"></path>
        </svg>
      </div>
    );
  }
  if (field.type === "priority") {
    return (
      <div className={styles.button}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M 8.17 6.493 C 8.09 5.692 8.72 5 9.521 5 C 10.322 5 10.952 5.692 10.872 6.493 L 10.071 14.503 C 10.042 14.785 9.805 15 9.521 15 C 9.237 15 9 14.785 8.971 14.502 L 8.17 6.493 Z M 9.521 19.25 C 8.831 19.25 8.271 18.69 8.271 18 C 8.271 17.31 8.831 16.75 9.521 16.75 C 10.211 16.75 10.771 17.31 10.771 18 C 10.771 18.69 10.211 19.25 9.521 19.25 Z" />
          <path d="M 13.128 6.493 C 13.048 5.692 13.678 5 14.479 5 C 15.28 5 15.91 5.692 15.83 6.493 L 15.029 14.503 C 15 14.785 14.763 15 14.479 15 C 14.195 15 13.958 14.785 13.929 14.502 L 13.128 6.493 Z M 14.479 19.25 C 13.789 19.25 13.229 18.69 13.229 18 C 13.229 17.31 13.789 16.75 14.479 16.75 C 15.169 16.75 15.729 17.31 15.729 18 C 15.729 18.69 15.169 19.25 14.479 19.25 Z" />
        </svg>
      </div>
    );
  }
  if (field.type === "operator") {
    return <FakeSelect>{field.defaultValue}</FakeSelect>;
  }
  if (field.type === "mathOperator") {
    return <FakeSelect>{field.defaultValue}</FakeSelect>;
  }
  if (field.type === "direction") {
    return (
      <FakeToggleButtons
        options={[
          {
            label: <TriangleIcon angle={-90} />,
            value: "left",
          },
          {
            label: <TriangleIcon angle={0} />,
            value: "up",
          },
          {
            label: <TriangleIcon angle={180} />,
            value: "down",
          },
          {
            label: <TriangleIcon angle={90} />,
            value: "right",
          },
        ]}
      />
    );
  }
  if (field.type === "input") {
    return (
      <FakeToggleButtons
        options={[
          {
            label: <TriangleIcon angle={-90} />,
            value: "left",
          },
          {
            label: <TriangleIcon angle={0} />,
            value: "up",
          },
          {
            label: <TriangleIcon angle={180} />,
            value: "down",
          },
          {
            label: <TriangleIcon angle={90} />,
            value: "right",
          },
        ]}
        moreOptions={[
          {
            label: "A",
            value: "a",
          },
          {
            label: "B",
            value: "b",
          },
          {
            label: "Start",
            value: "start",
          },
          {
            label: "Select",
            value: "select",
          },
        ]}
      />
    );
  }
  if (field.type === "select") {
    return (
      <FakeSelect>
        {
          (field.options.find((o) => o[0] === field.defaultValue) ||
            field.options[0])[1]
        }
      </FakeSelect>
    );
  }
  if (field.type === "sprite") {
    return (
      <FakeSelect>
        <img
          className={styles.selectIcon}
          src="/img/script-glossary/actor.png"
        />
        <div className={styles.flexGrow}>cat</div>
      </FakeSelect>
    );
  }
  if (field.type === "tileset") {
    return (
      <FakeSelect>
        <img
          className={styles.selectIcon}
          src="/img/script-glossary/tileset.png"
        />
        <div className={styles.flexGrow}>flowers</div>
      </FakeSelect>
    );
  }
  if (field.type === "variable") {
    return <FakeSelect>$Variable0</FakeSelect>;
  }
  if (field.type === "selectFlags") {
    return <FakeSelect>Flag 1</FakeSelect>;
  }
  if (field.type === "palette") {
    return (
      <FakeSelect>
        <FakePaletteSwatch />
        {field.paletteIndex !== undefined ? `${field.paletteIndex}: ` : ""}{" "}
        Palette {field.paletteIndex}
      </FakeSelect>
    );
  }
  if (field.type === "collisionMask") {
    return (
      <FakeToggleButtons
        value={field.defaultValue}
        options={[].concat(
          field.includePlayer
            ? {
                label: "Player",
                value: "player",
                selected: field.defaultValue === "player",
              }
            : [],
          [
            {
              label: "1",
              value: "1",
              selected: field.defaultValue === "1",
            },
            {
              label: "2",
              value: "2",

              selected: field.defaultValue === "2",
            },
            {
              label: "3",
              value: "3",

              selected: field.defaultValue === "3",
            },
          ]
        )}
      />
    );
  }
  if (field.type === "selectbutton") {
    return <UnionSelect />;
  }
  if (field.type === "togglebuttons") {
    return (
      <FakeToggleButtons
        options={field.options.map((o) => ({ label: o[1], value: o[0] }))}
        value={field.defaultValue}
      ></FakeToggleButtons>
    );
  }
  if (field.type === "tabs") {
    return (
      <div className={styles.tabs}>
        {Object.keys(field.values).map((key) => (
          <div
            key={key}
            className={clsx(styles.tab, {
              [styles.tabSelected]: key === field.defaultValue,
            })}
          >
            {field.values[key]}
          </div>
        ))}
      </div>
    );
  }
  if (field.type === "value") {
    return <FakeValue>{field.defaultValue}</FakeValue>;
  }
  return <div className={styles.unknown}>Unknown Type {field.type}</div>;
}

function ScriptEventField({ field, args }) {
  if (!field.type && !field.label) {
    return;
  }
  if (field.conditions) {
    const showField = field.conditions.reduce((memo, condition) => {
      const keyValue = args?.[condition.key];
      return (
        memo &&
        (!condition.eq || keyValue === condition.eq) &&
        (!condition.ne || keyValue !== condition.ne) &&
        (!condition.gt || Number(keyValue) > Number(condition.gt)) &&
        (!condition.gte || Number(keyValue) >= Number(condition.gte)) &&
        (!condition.lt || Number(keyValue) > Number(condition.lt)) &&
        (!condition.lte || Number(keyValue) >= Number(condition.lte)) &&
        (!condition.in || condition.in.indexOf(keyValue) >= 0)
      );
    }, true);
    if (!showField) {
      return null;
    }
  }

  if (field.type === "group") {
    return (
      <div className={styles.group}>
        {field.fields.map((f, idx) => (
          <ScriptEventField key={idx} field={f} args={args} />
        ))}
      </div>
    );
  }
  if (field.type === "checkbox") {
    return (
      <div
        className={clsx(styles.field, {
          [styles.fieldHalf]: field.width === "50%",
        })}
        style={{
          flexBasis: field.flexBasis,
          flexGrow: field.flexGrow,
          flexShrink: field.flexShrink,
        }}
      >
        <div className={styles.checkbox}>
          <div
            className={clsx(styles.checkboxInput, {
              [styles.checkboxInputChecked]: field.defaultValue,
            })}
          >
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>{" "}
          {field.label}
        </div>
      </div>
    );
  }
  if (field.type === "flag") {
    return (
      <div
        className={clsx(styles.field, {
          [styles.fieldHalf]: field.width === "50%",
        })}
        style={{
          flexBasis: field.flexBasis,
          flexGrow: field.flexGrow,
          flexShrink: field.flexShrink,
        }}
      >
        <div className={styles.checkbox}>
          <input
            className={styles.checkboxInput}
            checked={field.defaultValue}
          />{" "}
          {field.label}
        </div>
      </div>
    );
  }
  if (field.type === "collapsable") {
    return <div className={clsx(styles.collapsableHeader)}>{field.label}</div>;
  }
  if (field.type === "events") {
    return (
      <div title={field.label} className={styles.conditional}>
        <div className={styles.conditionalLabel}>{field.label}</div>
        <div className={styles.eventsWrapper}>
          <div class="sc-JsfGe eFPlT" data-handler-id="T48">
            <div class="sc-eiQXzm cklbLv">
              <div className={clsx(styles.button, styles.eventButton)}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"></path>
                </svg>
                Add Event
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (field.type === "union") {
    const defaultField = {
      ...field,
      type: field.defaultType,
      union: true,
      defaultValue: field.defaultValue[field.defaultType],
    };
    return <ScriptEventField field={defaultField} args={args} />;
  }
  if (field.type === "break") {
    return <div className={styles.break} />;
  }

  return (
    <div
      className={clsx(styles.field, {
        [styles.fieldHalf]: field.width === "50%",
      })}
      style={{
        flexBasis: field.flexBasis,
        flexGrow: field.flexGrow,
        flexShrink: field.flexShrink,
      }}
    >
      {!field.hideLabel && field.label}
      <div className={styles.fieldInput}>
        {field.type && <ScriptEventFieldInput field={field} />}
        {field.union && <UnionSelect />}
      </div>
    </div>
  );
}

const getDefaultsForFields = (fields, memo) => {
  if (!memo) {
    memo = {};
  }
  for (const field of fields) {
    if (field.key && field.defaultValue !== undefined) {
      memo[field.key] = field.defaultValue;
    }
    if (field.type === "group") {
      getDefaultsForFields(field.fields, memo);
    }
  }
  return memo;
};

export default function ScriptEventPreview({ title, fields }) {
  const args = getDefaultsForFields(fields);

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.header)}>{title}</div>
      <div className={clsx(styles.form)}>
        {fields.map((field, idx) => (
          <ScriptEventField key={idx} field={field} args={args} />
        ))}
      </div>
      {/* <pre style={{ maxWidth: "100%" }}>{JSON.stringify(args, null, 2)}</pre> */}
      {/* <pre style={{ maxWidth: "100%" }}>{JSON.stringify(fields, null, 2)}</pre> */}
    </div>
  );
}
