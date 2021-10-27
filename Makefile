clean_node_modules:
	rm -rf ./node_modules
	rm -rf ./**/*/node_modules

clean_build:
	rm -rf ./packages/*/dist
	rm -rf ./web/design-system-demo/.next
	rm -rf ./web/design-system-demo/build

clean: clean_node_modules clean_build

main:
	git checkout main
	git fetch --prune
	git pull