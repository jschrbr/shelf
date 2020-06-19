#!/bin/sh

watchmedo shell-command \
    --patterns="*.py;*.txt" \
    --recursive \
    --command='echo "${watch_src_path}"' \