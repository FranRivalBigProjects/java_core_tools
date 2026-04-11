function analyze(){
let input=document.getElementById('input').value||"";
let out="";
let notes="";

// formatter (very basic)
if(input.includes("class") || input.includes("public")){
  out += input.replace(/;\s*/g, ";
").replace(/\{\s*/g,"{
").replace(/\}\s*/g,"}
");
  notes += "Basic formatting applied.\n";
}

// bytecode viewer hint
if(input.includes("CAFEBABE") || input.includes("0xCAFEBABE")){
  notes += "Class file magic detected (bytecode).\n";
}

// class analyzer
if(input.includes(".class") || input.includes("class ")){
  notes += "Class structure detected.\n";
}

// jar inspector
if(input.includes(".jar") || input.includes("META-INF")){
  notes += "JAR metadata likely present.\n";
}

// dependency analyzer
if(input.includes("import ")){
  notes += "Imports detected (dependencies).\n";
}

// stacktrace analyzer
if(input.includes("Exception") && input.includes("at ")){
  notes += "Stacktrace detected.\n";
}

// exception parser
if(input.includes("Exception") || input.includes("Error")){
  notes += "Exception/Error found.\n";
}

// heap dump analyzer (heuristic)
if(input.includes("heap") || input.includes("OutOfMemoryError")){
  notes += "Heap/Memory issue hints detected.\n";
}

if(!out) out = input || "No content.";

document.getElementById('result').innerText =
"Output:\n"+out+"\n\nNotes:\n"+(notes||"No notable patterns.");
}
