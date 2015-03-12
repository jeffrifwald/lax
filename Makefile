publish:
	cp src/*.js .

clean:
	rm -rf .coverage *.js

lint:
	node_modules/.bin/eslint src test

cover:
	node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover node_modules/.bin/_mocha --recursive test
	node_modules/.bin/babel-istanbul check-coverage .coverage/coverage.json

coveralls:
	cat .coverage/lcov.info | node_modules/.bin/coveralls
