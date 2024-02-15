import { EditorView, basicSetup } from "codemirror"
import { python } from "@codemirror/lang-python"

export let editor1 = new EditorView({
    doc: "\n\n\n\n",
    extensions: [basicSetup, python()],
    parent: document.getElementsByClassName("editor1").item(0)
})

export let editor2 = new EditorView({
    doc: `def caesar_cipher_encrypt(plaintext, shift):
    # Your code here
    pass

# Example Usage:
plaintext = "HELLO"
shift = 3
result = caesar_cipher_encrypt(plaintext, shift)
print(result)`,
    extensions: [basicSetup, python()],
    parent: document.getElementsByClassName("editor2").item(0)
})