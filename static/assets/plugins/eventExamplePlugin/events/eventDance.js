export const id = "MY_EVENT_DANCE";

export const name = "Actor Dance";
export const groups = ["My Events"];

export const fields = [
  {
    label: "Dance around!",
  },
  {
    key: "actorId",
    type: "actor",
    defaultValue: "player",
  },
  {
    key: "turns",
    type: "number",
    defaultValue: 4,
  },
];

const directions = ["up", "right", "down", "left"];

export const compile = (input, helpers) => {
  const { actorSetActive, actorSetDirection, wait } = helpers;
  actorSetActive(input.actorId);
  const turns = input.turns || 0;
  for (let i = 0; i < turns; i++) {
    actorSetDirection(directions[i % directions.length]);
    wait(10);
  }
};
