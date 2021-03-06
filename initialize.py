import os

def initialize(directory):
  """
  This is a function that takes in a path name and creates a new folder with that path name,
  then creates a README.md file, a main.js file, and a main.py file within that folder. This
  function also initializes the test suite. It doesn't write the tests, but it does write a
  skeleton for the tests.
  """
  directory = str(directory)
  os.mkdir(directory)
  open(directory + "/README.md", "a+")
  js = open(directory + "/main.js", "a+")
  py = open(directory + "/main.py", "a+")
  jsContents = [
    '\n\n\n',
    '// TEST SUITE',
    '\n\n',
    '// TEST 1',
    '\n\n',
    'function test1() {',
    '\n',
    '  const actual;',
    '\n',
    '  const expected;',
    '\n',
    '  if (actual === expected) {',
    '\n',
    '    return \'✔\';',
    '\n',
    '  }',
    '\n',
    '  return \'X\';',
    '\n',
    '}',
    '\n\n',
    'console.log(test1());',
    '\n\n',
    '// TEST 2',
    '\n\n',
    'function test2() {',
    '\n',
    '  const actual;',
    '\n',
    '  const expected;',
    '\n',
    '  if (actual === expected) {',
    '\n',
    '    return \'✔\';',
    '\n',
    '  }',
    '\n',
    '  return \'X\';',
    '\n',
    '}',
    '\n\n',
    'console.log(test2());',
    '\n',
  ]
  pyContents = [
    '\n\n\n',
    '# TEST SUITE',
    '\n\n',
    '# TEST 1',
    '\n\n',
    'def test1():',
    '\n',
    '  actual = None',
    '\n',
    '  expected = None',
    '\n',
    '  if actual == expected:',
    '\n',
    '    return \'✔\'',
    '\n',
    '  return \'X\'',
    '\n\n',
    'print(test1())',
    '\n\n',
    '# TEST 2',
    '\n\n',
    'def test2():',
    '\n',
    '  actual = None',
    '\n',
    '  expected = None',
    '\n',
    '  if actual == expected:',
    '\n',
    '    return \'✔\'',
    '\n',
    '  return \'X\'',
    '\n\n',
    'print(test2())',
    '\n',
  ]
  for i in range(len(jsContents)):
    js.write(jsContents[i])
  for i in range(len(pyContents)):
    py.write(pyContents[i])

initialize()