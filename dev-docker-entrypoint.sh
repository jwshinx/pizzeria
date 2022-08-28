#!/bin/sh

set -e

echo "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 1"
echo "xxx ENVIRONMENT: $RAILS_ENV"
echo "xxx APP_PATH: $APP_PATH"
echo "xxx BUNDLE_VERSION: $BUNDLE_VERSION"
bundle check || bundle install
rm -f $APP_PATH/tmp/pids/server.pid
echo "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 2"
bundle exec ${@}
# https://www.youtube.com/watch?v=XIjGbfcMAYM&t=645s