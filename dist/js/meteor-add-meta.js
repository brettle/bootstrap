if (Inject.rawHeads['bootstrap-meta'] === undefined) {
  Inject.rawHead('bootstrap-meta',
  '  <meta charset="utf-8">\n' +
  '  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
  '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n' +
  '  <!-- If you must replace them, run "meteor add meteorhacks:inject-initial" and add server code like this: -->\n' +
  '  <!--   Inject.rawHead("bootstrap-meta", "YOUR REPLACEMENT"); -->\n');
}
