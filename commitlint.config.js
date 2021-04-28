module.exports = {
  extends: ['gitmoji'],
  rules: {
    'subject-case': [2, 'always', ['sentence-case']],
    'scope-empty': [0, 'always'],
    'scope-enum': [0, 'never', []],
    'type-enum': [0, 'never', []],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)(?:\s)?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
};
