clean_root_node:
	rm -rf ./node_modules

clean_packages_node:
	rm -rf ./packages/*/node_modules

clean_packages_dists:
	rm -rf ./packages/*/dist

clean: clean_root_node clean_packages_node clean_packages_dists
