import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const BC0Language = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Byte: t.atom,
        LineComment: t.comment,
        FuncHeader: t.className,
        JMPLabel: t.moduleKeyword
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "# "}
  }
})

export function BC0() {
  return new LanguageSupport(BC0Language)
}
