import { EditorView, basicSetup } from "codemirror"
import { python } from "@codemirror/lang-python"

export let editor1 = new EditorView({
    doc: "\n\n\n\n",
    extensions: [basicSetup, python()],
    parent: document.getElementsByClassName("editor1").item(0)
})