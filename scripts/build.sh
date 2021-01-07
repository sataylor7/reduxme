#!/bin/bash

# shenanigans
SWITCH="\033["
NORMAL="${SWITCH}0m"
# Regular Colors
BLACK="${SWITCH}0;30m"    # Black
RED="${SWITCH}0;31m"      # Red
GREEN="${SWITCH}0;32m"    # Green
YELLOW="${SWITCH}0;33m"   # Yellow
BLUE="${SWITCH}0;34m"     # Blue
PURPLE="${SWITCH}0;35m"   # Purple
CYAN="${SWITCH}0;36m"     # Cyan
GRAY="${SWITCH}0;37m"    # Gray
# Light Colors
DK_GRAY="${SWITCH}1;30m"    # Dark Gray
LT_RED="${SWITCH}1;31m"      # Light Red
LT_GREEN="${SWITCH}1;32m"    # Light Green
LT_YELLOW="${SWITCH}1;33m"   # Light Yellow
LT_BLUE="${SWITCH}1;34m"     # Light Blue
LT_PURPLE="${SWITCH}1;35m"   # Light Purple
LT_CYAN="${SWITCH}1;36m"     # Light Cyan
WHITE="${SWITCH}1;37m"     # White

for i in "$@"
do
case $i in
    -a=*|--app=*)
    APP="${i#*=}"
    shift # past argument=value
    ;;
    -e=*|--env=*)
    ENV="${i#*=}"
    shift # past argument=value
    ;;
esac
done

echo "--------"
echo "micro-app:  [${APP}]"
echo "environment:  [${ENV}]"

PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo "--------"
echo "package version: [${PACKAGE_VERSION}]"

# yarn install first
echo -e "${GREEN}****** Yarn install: ${APP} ******"
NODE_ENV=production yarn install

# thats ok rebuild `yarn build` to get the newest build with the correct .env build
echo -e "${PURPLE}****** rebuilding: ${ENV} ******"

yarn build

# git commit -am'rebuilding library with the correct .env build'
echo -e "${NORMAL}****** commiting the rebuilt library:${APP} for env:${ENV} ******"

git add -A 