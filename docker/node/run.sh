#!/bin/bash

echo "Container is starting..." 1>&2

if ! test -f config.json; then
    echo "[TaskStart][Init] Copy config file" 1>&2
    cp config-dev.json config.json
    echo "[TaskEnd][Init] Copy config file" 1>&2
else
    echo "[TaskSkip][Init] Copy config file" 1>&2
fi

if ! test -d node_modules; then
    echo "[TaskStart][Init] Npm install" 1>&2
    npm install
    echo "[TaskEnd][Init] Npm install" 1>&2
else
    echo "[TaskSkip][Init] Npm install" 1>&2
fi

if ! test -d logs; then
    echo "[TaskStart][Init] Creating logs folder" 1>&2
    mkdir logs
    echo "[TaskEnd][Init] Creating logs folder" 1>&2
else
    echo "[TaskSkip][Init] Creating logs folder" 1>&2
fi

set -e

# Start app
echo "[Service][Start] Starting nodejs server" 1>&2
npm run server:dev
