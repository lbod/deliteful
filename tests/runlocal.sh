# Script to run tests locally
cd ../..
echo `date`
node deliteful/node_modules/intern/runner.js config=deliteful/tests/local.js
echo `date`