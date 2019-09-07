# Node server

## Requirements

1. Install [Node >= 10](https://nodejs.org/en/download/) (ideally install the latest LTS, currently Node 10).
2. Install `yarn`
  ```sh
  $ npm install -g yarn
  ```

## Setup development environment

### Install project dependencies

```sh
# Go to project folder
$ cd /project/path

# Install project dependencies
$ yarn install
```

### Set environment variables

The environement variables in `.env` file are set before launching the server (see below to launch the server).

```sh
# Copy the sample file (DBAA: don't do this if you already have a .env file)
$ cp .env.sample .env
```

All variables are prefixed with `MY_APP_`, but you can change this prefix in `src/config/env.js`.

Then replace the environment variables:

|Var name|Description|Default value|
|---|---|---|
|ENV_PREFIX|Prefix for app specific variables|`MY_APP_`|
|MY_APP_PORT|Server port|9000|

## Run development environment

```sh
# Launch webpack + server with livereloading
$ yarn run dev
```

## Build production package

```sh
$ yarn run build
```

Your bundle is now in `.dist/`.

## Install and run production

### Install

```sh
# Go to the bundle folder (e.g.: ./.dist)
$ cd /path/to/bundle

# Install production dependencies
$ yarn install --production
```

### Setup environment

You need to setup the production environment before launching the server. You can either:
- Set the machine environment. This is particularly useful with Docker where you can just run the container with the correct environment.
- Create a .env file in the folder. Use the [guide](#set-environment-variables).

### Run

```sh
$ yarn start
```
