(Str) @string
(Comment) @comment
(DocComment) @comment.documentation
[(Token) (Start) (Right) (Skip)] @keyword
(ERROR) @error
(rule_decl (Id) @function)
(Id) @variable
(Action) @idk
(Predicate) @constant.builtin.boolean
[(NodeMarker) (NodeCreation) (Hat)] @type
(NodeRename) @label ; or @function.call or @keyword.directive or @type
[(Tilde) (Or) (Slash) (Star) (Plus) (Equal) (Semi) (Colon)] @operator
[(LPar) (RPar) (LBrak) (RBrak)] @punctuation.bracket
