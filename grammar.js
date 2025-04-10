/**
 * @file Lelwel grammar for tree-sitter
 * @author yui-915
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "lelwel",

  extras: $ => [$.Whitespace, $.Comment, $.DocComment],

  rules: {
    file: $ => repeat($.decl),

    decl: $ => choice(
      $.token_list,
      $.rule_decl,
      $.start_decl,
      $.right_decl,
      $.skip_decl,
    ),

    start_decl: $ => seq(
      $.Start,
      $.Id,
      $.Semi
    ),

    right_decl: $ => seq(
      $.Right,
      repeat1(choice($.Id, $.Str)),
      $.Semi
    ),

    skip_decl: $ => seq(
      $.Skip,
      repeat1(choice($.Id, $.Str)),
      $.Semi
    ),

    token_list: $ => seq(
      $.Token,
      repeat1($.token_decl),
      $.Semi
    ),

    token_decl: $ => seq(
      $.Id,
      optional(seq($.Equal, $.Str))
    ),

    rule_decl: $ => seq(
      $.Id,
      optional($.Hat),
      $.Colon,
      optional($.regex),
      $.Semi,
    ),

    regex: $ => $.alternation,

    alternation: $ => seq(
      $.ordered_choice,
      repeat(seq($.Or, $.ordered_choice))
    ),

    ordered_choice: $ => seq(
      $.concat,
      repeat(seq($.Slash, $.concat))
    ),

    concat: $ => repeat1($.postfix),

    postfix: $ => choice(
      seq($.postfix, $.Star),
      seq($.postfix, $.Plus),
      seq($.LPar, $.regex, $.RPar),
      seq($.LBrak, $.regex, $.RBrak),
      $.Id,
      $.Str,
      $.Predicate,
      $.Action,
      $.Assertion,
      $.NodeRename,
      $.NodeMarker,
      $.NodeCreation,
      $.Hat,
      $.Tilde,
    ),

    Token: _ => "token",
    Start: _ => "start",
    Right: _ => "right",
    Skip: _ => "skip",

    Colon: _ => ':',
    Semi: _ => ';',
    Equal: _ => '=',
    LPar: _ => '(',
    RPar: _ => ')',
    LBrak: _ => '[',
    RBrak: _ => ']',
    Or: _ => '|',
    Star: _ => '*',
    Plus: _ => '+',
    Hat: _ => '^',
    Slash: _ => '/',
    Tilde: _ => '~',

    Id: _ => /[a-zA-Z][a-zA-Z_0-9]*/,
    Str: _ => /'([^'\n]|\\')*'/,

    Predicate: _ => /\?([0-9]+|t)/,
    Action: _ => /#[0-9]+/,
    Assertion: _ => /![0-9]+/,

    NodeRename: _ => /@([a-zA-Z][a-zA-Z_0-9]*)?/,
    NodeMarker: _ => /<[0-9]+/,
    NodeCreation: _ => /[0-9]*>([a-zA-Z][a-zA-Z_0-9]*)?/,

    Comment: _ => choice(/\/\/[^\n]*\n/, /\/\*(\*[^\/]|[^*])*\*\//),
    DocComment: _ => /\/\/\/[^\n]*\n/,
    Whitespace: _ => /[ \t\r\n\f]+/,
  }
});
