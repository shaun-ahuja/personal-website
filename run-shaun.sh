#!/bin/sh
# Run the terminal card without requiring an installed Python, uv, or Git.
set -eu

shaun_runtime=$(mktemp -d "${TMPDIR:-/tmp}/shaun-card.XXXXXXXX")
trap 'rm -rf "$shaun_runtime"' 0
trap 'exit 130' INT
trap 'exit 143' TERM

printf 'Getting Shaun’s card ready…\n' >&2
curl -fsSL https://astral.sh/uv/install.sh -o "$shaun_runtime/install-uv.sh"
UV_UNMANAGED_INSTALL="$shaun_runtime/bin" sh "$shaun_runtime/install-uv.sh" > "$shaun_runtime/install.log" 2>&1 || {
    cat "$shaun_runtime/install.log" >&2
    exit 1
}
curl -fsSL https://raw.githubusercontent.com/shaun-ahuja/personal-website/main/shaun.py -o "$shaun_runtime/shaun.py"

export UV_CACHE_DIR="$shaun_runtime/cache"
export UV_PYTHON_INSTALL_DIR="$shaun_runtime/python"
export UV_PYTHON_PREFERENCE=only-managed
"$shaun_runtime/bin/uv" --quiet run --script --python 3.12 \
    --with 'rich>=13.7,<15' "$shaun_runtime/shaun.py"
