# tree-sitter-lelwel
Lelwel grammar for tree-sitter.

meant to provide syntax highlighting to editors other than vim/nvim (check [nvim-lelwel](https://github.com/0x2a-42/nvim-lelwel/blob/main/syntax/llw.vim))

# Preview

![preview image](/preview.png)

# Refrences
* [nvim-lelwel/syntax/llw.vim](https://github.com/0x2a-42/nvim-lelwel/blob/main/syntax/llw.vim)
* [lelwel/frontend/lexer.rs](https://github.com/0x2a-42/lelwel/blob/main/src/frontend/lexer.rs)
* [lelwel/frontend/lelwel.llw](https://github.com/0x2a-42/lelwel/blob/main/src/frontend/lelwel.llw)
* [helix-editor/themes#scopes](https://docs.helix-editor.com/themes.html#scopes)

# Example usage with helix
* Add the following to `languages.toml` in your helix config directory
```toml
[language-server.lelwel-ls]
command = "lelwel-ls"

[[language]]
name = "lelwel"
scope = "source.lelwel"
injection-regex = "llw|lelwel"
file-types = ["llw"]
comment-tokens = ["//", "///"]
block-comment-tokens = { start = "/*", end = "*/" }
indent = { tab-width = 2, unit = "  " }
language-servers = [ "lelwel-ls" ]
auto-pairs = { '(' = ')', '[' = ']'}

[[grammar]]
name = "lelwel"
source = { git = "https://github.com/yui-915/tree-sitter-lelwel", rev = "66a8881ada965a8d2347e53ccf863df52e1d3b18" }
```
* clone this repo and copy `queries/highlights.scm` to `helix/runtime/queries/lelwel/highlights.scm`
* install `lelwel-ls` if you don't have it already (`cargo install --features=cli,lsp lelwel`)



