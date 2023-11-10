#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied."
elif [ $# -le 3 ]; then
	for arg in "$@"; do
		echo "$arg"
	done
else
	count=0
	for arg in "$@";do
		if [ $count -lt 3 ]; then
			echo "$arg"
			count=$((count + 1))
		else
			break
		fi
	done
fi
