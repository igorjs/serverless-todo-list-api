# Serverless TODO List

 [![code style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## SUMMARY

 - [Setup Environment](#setup)
 - [Contributing](./CONTRIBUTING.md)
 - [License](./LICENSE)

## SETUP ENVIRONMENT

### Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

* NodeJS (v10 or superior)
* [Git](https://git-scm.com/)

#### NodeJS installation on Windows or OS X

Just go on [official Node.js website](https://nodejs.org/en/download/current/) and grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

#### NodeJS installation on Linux

Node.js and npm packages (usually) are available for all Linux systems in their own package manager.

Go to [Node.js package manager website](https://nodejs.org/en/download/package-manager/) and follow the instructions for your current system.

#### Set up AWS Credentials and Region for Development

To connect to any of the supported services with the AWS SDK for Java, you must provide AWS credentials. The AWS SDKs and CLIs use provider chains to look for AWS credentials in a number of different places, including system/user environment variables and local AWS configuration files.

##### Setting AWS Credentials

Setting your credentials for use by the AWS SDK for Java can be done in a number of ways, but here are the recommended approaches:

* Set credentials in the AWS credentials profile file on your local system, located at:
    * ~/.aws/credentials on Linux, macOS, or Unix
    * C:\Users\USERNAME\.aws\credentials on Windows

    This file should contain lines in the following format:
    ```bash
    [default]
    aws_access_key_id = your_access_key_id
    aws_secret_access_key = your_secret_access_key
    ```

### Common setup

Clone the repo and install the dependencies.

```bash
$ git clone <repository-url>
$ cd ./<project-root-folder>
```

```bash
$ npm install
```

#### How to run this service

```bash
$ npm start
```

#### How to run the test suite and coverage

```bash
$ npm test
```

## LICENSE

See in [License](./LICENSE).