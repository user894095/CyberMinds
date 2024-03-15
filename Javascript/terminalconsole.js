async function runCode(code, output) {
    output.textContent = "Running script...";
    let pyodide = await loadPyodide({stdout: (text) => {output.textContent += text+"\n";}});
    let global = pyodide.globals.get("dict")();
    let requests = {get: function(x) {return 400;}};
    pyodide.registerJsModule("requests", requests);
    output.textContent = "";
    try {await pyodide.runPython(code, {globals:global});} catch (err) {output.textContent += err.message;}
}

let test = `
print("test successful")
`;

document.getElementById("terminaloutputbutton1").addEventListener("click", function(){runCode(editor1.state.doc.toString(),document.getElementById("terminaloutputtext1"))})