#!/bin/bash
set -x
set -e

if [ "$1" = "setup" ]; then
    sudo sed -ie 's/^www-data:x:[0-9]*/www-data:x:'$UID'/g' /etc/passwd
else
    test "$UID" = "0" || sudo $0 setup

    sudo -u www-data /bin/bash -c "$@"
fi

