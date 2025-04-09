import XCTest
import SwiftTreeSitter
import TreeSitterLelwel

final class TreeSitterLelwelTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_lelwel())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Lelwel grammar")
    }
}
