import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const BC0Language = LRLanguage.define({
  parser: parser.configure({
    props: [
      foldNodeProp.add({
        Function: foldInside,
      }
      ),
      styleTags({
        Byte: t.integer,
        Comment: t.comment,
        FuncHeader: t.className,
        BlockHeader: t.className
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
