clean:
	rm -rf .coverage *.js

cover:
	node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover node_modules/.bin/_mocha -- --recursive test
	node_modules/.bin/babel-istanbul check-coverage .coverage/coverage.json

coveralls:
	cat .coverage/lcov.info | node_modules/.bin/coveralls

lint:
	node_modules/.bin/eslint src test

publish:
	cp src/*.js .

run_test:
	make clean && make lint && make cover
