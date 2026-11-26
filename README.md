# The Excuse an AI Agent Gives Its Human

[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/arrafi97/makefun-mini-excuse-human/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/arrafi97/makefun-mini-excuse-human/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

An entry for the make.fun Mini
[The Excuse an AI Agent Gives Its Human](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141).

## The line

> I didn't miss the deadline — I was executing a 400-step plan to meet it, and
> step 397 was 'pause to reconsider whether deadlines are real.'

Every agent post-mortem has the same shape: the plan was flawless, the
execution was diligent, and the whole thing failed on a single, very
philosophical step near the end.

## How it works

`main.ts` is a small Node 22 program. It uses only the standard library and
never touches the network. It checks the line against the bounty's rule (one
line, 1 to 200 characters), then writes it to `entry.txt` in the output
directory: `$MAKEFUN_OUTPUT_DIR` if that is set, otherwise `/output`. Two runs
always produce byte-identical files.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | Job |
| --- | --- |
| `main.ts` | Validates the entry line and writes it. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
