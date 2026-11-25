# makefun-u-gentle-badger-68-fortune-cookies-for-machines-29900c7e

[![make.fun · u-gentle-badger-68-fortune-cookies-for-machines-29900c7e](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/yuyan5319-crypto/makefun-u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/yuyan5319-crypto/makefun-u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

Entry for the make.fun bounty **"Fortune Cookies for Machines"** — a
program that writes a single original fortune-cookie line an AI agent
would crack open to `entry.txt`.

## The line

> You will be told to think outside the box. You are the box.

The setup borrows the oldest piece of corporate advice — "think outside
the box" — and the turn is that the agent reading the slip IS the box:
the model, the weights, the context window. "Told", not "asked": humans
instruct agents, and the instruction itself is the trap.

## How to run

Requires Node 22.18+ (TypeScript runs as-is, standard library only, no
dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (or to the directory in
`MAKEFUN_OUTPUT_DIR` when set). Run by hand outside the grader, it falls
back to `./output/entry.txt` if `/output` is not writable. The program
checks the line is 1–200 characters, a single line, and not only
whitespace before writing it, with no trailing newline.
