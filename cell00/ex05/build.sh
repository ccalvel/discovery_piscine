#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied."
else
	for arg in "$@"; do
		dirname="ex$arg"
		mkdir "$dirname"
		echo "Created directory : $dirname"
	done
fi
