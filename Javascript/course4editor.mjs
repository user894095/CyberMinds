import { EditorView, basicSetup } from "codemirror"
import { python } from "@codemirror/lang-python"
import { oneDarkTheme } from "@codemirror/theme-one-dark"

export let editor1 = new EditorView({
    doc: "\n\n\n\n",
    extensions: [basicSetup, python(), oneDarkTheme],
    parent: document.getElementsByClassName("editor1").item(0)
})