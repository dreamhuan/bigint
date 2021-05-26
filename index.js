const { parse } = require("@babel/parser");
const { default: traverse } = require("@babel/traverse");
const { default: generate } = require("@babel/generator");
const t = require("@babel/types");
const fs = require("fs");

const code = fs.readFileSync("input.js").toString();

const ast = parse(code);
console.log(ast);
traverse(ast, {
  enter(path) {
    if (t.isBigIntLiteral(path.node)) {
      console.log(path.node);
      const value = path.node.value;
      path.replaceWith(
        t.callExpression(
          t.memberExpression(t.identifier("JSBI"), t.identifier("BigInt")),
          [t.StringLiteral(value)]
        )
      );
    } else if (t.isBinaryExpression(path.node)) {
      console.log(path.node);
      const left = path.node.left.name;
      const right = path.node.right.name;
      path.replaceWith(
        t.callExpression(
          t.memberExpression(t.identifier("JSBI"), t.identifier("multiply")),
          [t.identifier(left), t.identifier(right)]
        )
      );
    } else if (t.isProgram(path.node)) {
      path.unshiftContainer(
        "body",
        t.variableDeclaration("const", [
          t.variableDeclarator(
            t.identifier("JSBI"),
            t.callExpression(t.identifier("require"), [t.stringLiteral("jsbi")])
          ),
        ])
      );
    }
  },
});
const result = generate(ast);
console.log(result.code);
fs.writeFileSync("./output.js", result.code);
