#!/usr/bin/env node

const argv = require("yargs-parser")(process.argv.slice(2));

const defaults = {
  interval: 15,
};

const { interval } = {
  ...defaults,
  ...argv,
};

const ms = interval * 60 * 1000;

console.log("\u001b[34m💧 Beginning hydration...\u001b[0m");

setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString();

  console.log(
    `\u001b[34m-----------------------\n${time} 💦 Hydrate!\n----------------------- \u001b[0m`
  );
}, ms);
