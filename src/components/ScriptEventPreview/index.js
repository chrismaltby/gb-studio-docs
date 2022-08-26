import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

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

function FakeTextarea({ children }) {
  return <div className={styles.textarea} children={children} />;
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
          className={styles.selectActor}
          src="/img/script-glossary/actor.png"
        />
        {field.defaultValue === "player" ? "Player" : "Actor 1"}
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
  if (field.type === "number") {
    return <FakeInput>{field.placeholder || field.defaultValue}</FakeInput>;
  }
  if (field.type === "matharea") {
    return <FakeInput>{field.placeholder || field.defaultValue}</FakeInput>;
  }
  if (field.type === "textarea") {
    return (
      <FakeTextarea>{field.placeholder || field.defaultValue}</FakeTextarea>
    );
  }
  if (field.type === "code") {
    return (
      <FakeTextarea>{field.placeholder || field.defaultValue}</FakeTextarea>
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
  if (field.type === "operator") {
    return <div className={styles.input} children={field.defaultValue} />;
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
          className={styles.selectActor}
          src="/img/script-glossary/actor.png"
        />
        <div className={styles.flexGrow}>cat</div>
      </FakeSelect>
    );
  }
  if (field.type === "variable") {
    return <FakeSelect>$Variable0</FakeSelect>;
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
      <div className={styles.toggleButtons}>
        {field.options.map((option, idx) => (
          <div className={styles.toggleButtonsOption}>{option[1]}</div>
        ))}
      </div>
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
  return <div className={styles.unknown}>Unknown Type {field.type}</div>;
}

function ScriptEventField({ field }) {
  if ((!field.type && !field.label) || field.type === "break") {
    return;
  }
  if (field.type === "group") {
    return (
      <div className={styles.group}>
        {field.fields.map((f, idx) => (
          <ScriptEventField key={idx} field={f} />
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
          <input type="checkbox" checked={field.defaultValue} /> {field.label}
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
    return <ScriptEventField field={defaultField} />;
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
      {field.label}
      <div className={styles.fieldInput}>
        {field.type && <ScriptEventFieldInput field={field} />}
        {field.union && <UnionSelect />}
      </div>
    </div>
  );
}

export default function ScriptEventPreview({ title, fields }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.header)}>{title}</div>
      <div className={clsx(styles.form)}>
        {fields.map((field, idx) => (
          <ScriptEventField key={idx} field={field} />
        ))}
      </div>
      <pre style={{ maxWidth: "100%" }}>{JSON.stringify(fields, null, 2)}</pre>
    </div>
  );
}
