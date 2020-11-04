# Hydrate Me

> Get hydrated by running this solo or appending to a watch type of command for reminders at your chosen minute interval.

The following will be output in your Terminal at each interval:

```bash
-----------------------
9:44:39 PM 💦 Hydrate!
-----------------------
```

## Usage

First, install the package:

```bash
npm install hydrate-me
```

The default `--interval` is 15 minutes, which you may set to another number to represent a different minute interval.

Then, append it to your watch commands, example with a custom interval;

```bash
"start": "your-script --watch & hydrate-me --interval 30"
```

Or if on Windows or another environment that doesn't support `&`, also install a utility to help the script run in parallel such as `npm-run-all`:

```bash
"start": "npm-run-all --parallel your-script hydrate",
"hydrate": "hydrate-me --interval 30"
```

Or install globally to use ad-hoc instead of fully committing.
