set -a
[ -f /deployed/.env ] && . /deployed/.env
set +a
systemctl restart sqbackenddev
