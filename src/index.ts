import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, foldNodeProp, foldInside} from "@codemirror/language"
import {styleTags, tags} from "@lezer/highlight"

export const BC0Language = LRLanguage.define({
  parser: parser.configure({
    props: [
      foldNodeProp.add({
        Function: foldInside,
      }
      ),
      styleTags({
        Byte       : tags.content,
        Comment    : tags.comment,
        Instruction: tags.attributeName,
        Source     : tags.annotation,
        "Jump/..." : tags.controlOperator,
        "FuncHeader/..." : tags.definitionKeyword,
        Identifier : tags.definitionKeyword,
        BlockHeader: tags.definitionKeyword
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "# "}
  },
  
})

export function BC0() {
  return new LanguageSupport(BC0Language)
}
