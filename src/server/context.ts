import commands from "../commands";

type Context = {
  commands: typeof commands;
  authorization?: AuthToken;
};

export default Context;
