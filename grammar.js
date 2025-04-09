/**
 * @file Lelwel grammar for tree-sitter
 * @author yui-915
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "lelwel",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
