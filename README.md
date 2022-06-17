# BC0 Language Support for CodeMirror 6

This repository contains the  BC0 (C0 Bytecode) Language Support Extension for CodeMirror 6.

## File Structure

The file `src/index.ts` defines the properties of **language support extension**.

The file `src/syntax.grammar` defines a parser-generator configuration for the BC0 language that is used to generate a parser that can parse the BC0 language.

## Build

To build the extension, use

```bash
npm run prepare
```

The extension built will be placed in `/dist` folder. One can import `BC0Language` from the built result and import into the editor using `language` from `@codemirror/language`, as shown below:

```typescript
import { language } from "@codemirror/language";
import { BC0Language } from "./syntax/bc0";

export function editor_init() {
    globalThis.EDITOR_VIEW = new EditorView({
        parent: document.getElementById(globalThis.UI_INPUT_ID),
        extensions: [
            language.of(BC0Language)
        ]
    });
    console.log(`C0 Editor Initialized.`);
}

```
