BABEL_CMD = node_modules/.bin/babel-node
MOCHA_CMD = node_modules/.bin/_mocha
LINT_CMD = node_modules/.bin/eslint

publish:
	cp src/*.js .

clean:
	rm -rf .coverage *.js

lint:
	$(LINT_CMD) src test

unit:
	$(BABEL_CMD) $(MOCHA_CMD) --recursive test
