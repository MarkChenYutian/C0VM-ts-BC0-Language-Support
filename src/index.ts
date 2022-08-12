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
        Byte: tags.content,
        Comment: tags.className,
        FuncHeader: tags.definitionKeyword,
        Identifier: tags.definitionKeyword,
        BlockHeader: tags.definitionKeyword,
        Commands: tags.className,
        Instruction: tags.string
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
