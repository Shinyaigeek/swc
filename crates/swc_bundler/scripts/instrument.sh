#!/usr/bin/env bash
set -eu

cargo profile instruments --release -t time --example bundle --features concurrent,tracing/release_max_level_info -- $@