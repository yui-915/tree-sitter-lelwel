package tree_sitter_lelwel_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_lelwel "github.com/yui-915/tree-sitter-lelwel/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_lelwel.Language())
	if language == nil {
		t.Errorf("Error loading Lelwel grammar")
	}
}
