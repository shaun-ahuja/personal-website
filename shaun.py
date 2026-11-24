"""Shaun's introduction, rendered as a small terminal card."""

import time

from rich.console import Console, Group
from rich.live import Live
from rich.text import Text


LIME = "#b7f34b"
LETTER_ROWS = (
    ("╭───────╮", "│       │", "│        ", "╰───────╮", "        │", "│       │", "╰───────╯"),
    ("│       │", "│       │", "│       │", "├───────┤", "│       │", "│       │", "│       │"),
    ("╭───────╮", "│       │", "│       │", "├───────┤", "│       │", "│       │", "│       │"),
    ("│       │", "│       │", "│       │", "│       │", "│       │", "│       │", "╰───────╯"),
    ("│╲      │", "│ ╲     │", "│  ╲    │", "│   ╲   │", "│    ╲  │", "│     ╲ │", "│      ╲│"),
)
HERO_WIDTH = 57
CHECKPOINTS = ((0, "Agent request"), (24, "Funding decision"), (56, "Purchase complete"))


def _hero(progress: int) -> Group:
    rows = []
    for y in range(7):
        row = Text("   ".join(letter[y] for letter in LETTER_ROWS), style="dim")
        if y == 3 and progress:
            row = Text("━" * progress, style=LIME) + row[progress:]
            if progress < HERO_WIDTH:
                row = row[:progress - 1] + Text("●", style=f"bold {LIME}") + row[progress:]
        rows.append(row)
    labels = Text()
    for index, (position, label) in enumerate(CHECKPOINTS):
        if index:
            labels.append(" → ", style="dim")
        labels.append(label, style=f"bold {LIME}" if progress > position else "dim")
    return Group(*rows, Text(""), labels)


def _show_hero(console: Console) -> None:
    if not console.is_terminal:
        return
    if console.width < 72 or console.height < 12:
        console.print(Text("SHAUN", style=f"bold {LIME}"))
        console.print()
        return
    duration = 1.4
    started = time.monotonic()
    with Live(_hero(0), console=console, auto_refresh=False, transient=False) as live:
        while True:
            elapsed = time.monotonic() - started
            progress = min(HERO_WIDTH, int(elapsed / duration * HERO_WIDTH))
            live.update(_hero(progress), refresh=True)
            if progress == HERO_WIDTH:
                break
            time.sleep(min(1 / 30, max(0, duration - elapsed)))
    console.print()


BUILT = (
    "An internal debugger at Meta Ads that traces requests across services. "
    "At Instagram, I enabled photo and video replies to comments."
)
CAUGHT_MY_EYE = (
    "I enjoyed reading about your work with Teddy and Junho.",
    "I loved the example of the local Thai restaurant migrating to Ramp.",
    "It was cool to see a school district using MCP in practice.",
    "I read through the 388 discoverable CLI commands.",
    "I also really liked the collaboration feature in Glass.",
)
BUILD_AT_RAMP = (
    "I’d love to contribute to this work by building tools that make it easier to "
    "understand what agents do with Ramp.",
    "I’d make agent purchases easier to trace "
    "from the original request to the final transaction.",
    "For each purchase, I’d "
    "show which funds the agent considered, which it chose, and why it passed "
    "over the others.",
)


def _bullet(console: Console, value: str) -> None:
    lines = Text(value).wrap(console, max(1, console.width - 2))
    for index, line in enumerate(lines):
        console.print(Text("• " if index == 0 else "  ") + line)


def main() -> None:
    console = Console(highlight=False)
    console.width = min(80, console.width)
    _show_hero(console)
    console.print(Text("Shaun Ahuja", style=f"bold {LIME}"))
    console.print(Text("Western CS + Ivey Business · Summer 2027 SWE"))
    console.print()
    console.print(Text("BUILT", style=f"bold {LIME}"))
    console.print(Text(BUILT))
    console.print()
    console.print(Text("WHAT CAUGHT MY EYE", style=f"bold {LIME}"))
    for item in CAUGHT_MY_EYE:
        _bullet(console, item)
    console.print()
    console.print(Text("WHAT I’D BUILD AT RAMP", style=f"bold {LIME}"))
    for item in BUILD_AT_RAMP:
        _bullet(console, item)
    console.print()
    console.print(Text("shaunahuja.ca/ramp", style=LIME))


if __name__ == "__main__":
    main()
