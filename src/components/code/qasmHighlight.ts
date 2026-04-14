import { StreamLanguage, LanguageSupport } from '@codemirror/language';

/**
 * Simple QASM 2.0 syntax highlighting using CodeMirror's StreamLanguage.
 * This avoids needing a full Lezer grammar.
 */
const qasmStreamParser = {
  token(stream: any): string | null {
    // Skip whitespace
    if (stream.eatSpace()) return null;

    // Comments
    if (stream.match('//')) {
      stream.skipToEnd();
      return 'comment';
    }

    // Strings
    if (stream.match(/"[^"]*"/)) return 'string';

    // Numbers (including pi expressions)
    if (stream.match(/\d+\.?\d*([eE][+-]?\d+)?/)) return 'number';

    // Pi constant
    if (stream.match(/\bpi\b/)) return 'number';

    // QASM keywords
    if (stream.match(/\b(OPENQASM|include|qreg|creg|barrier|if|measure|reset)\b/)) {
      return 'keyword';
    }

    // Gate names
    if (stream.match(/\b(h|x|y|z|s|t|sdg|tdg|rx|ry|rz|cx|cz|ccx|swap|id|u1|u2|u3|cnot)\b/)) {
      return 'typeName';
    }

    // Qubit/creg references like q[0]
    if (stream.match(/[qc]\[\d+\]/)) return 'variableName';

    // Register names
    if (stream.match(/\b[a-zA-Z_]\w*\b/)) return 'variableName';

    // Operators and punctuation
    if (stream.match(/[+\-*/()[\]{},;=<>->]/)) return 'punctuation';

    // Catch-all
    stream.next();
    return null;
  },
};

const qasmLanguage = StreamLanguage.define(qasmStreamParser);

export function qasm(): LanguageSupport {
  return new LanguageSupport(qasmLanguage);
}
