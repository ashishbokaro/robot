# Robot Control System

The Robot Control System is a TypeScript project that enables you to control the movement of a robot within a defined space. This README provides detailed instructions on how to set up, run, and manage the system.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Custom Commands](#custom-commands)
- [Running the Application](#running-the-application)
- [Running Test Cases](#running-test-cases)
- [Generating Test Reports](#generating-test-reports)

## Prerequisites

Before you can compile and run the TypeScript code for the Robot Control System, make sure you have the following prerequisites installed on your system:

1. **Node.js and npm**: You can download and install Node.js, which includes npm, by following these steps:

   - Visit the official Node.js website at [https://nodejs.org/en](https://nodejs.org/en).
   - Download the Long-Term Support (LTS) version of Node.js for your operating system.
   - Follow the installation instructions to install Node.js and npm.

2. **TypeScript**: After successfully installing Node.js, open your terminal and install TypeScript globally using npm:

   ```bash
   npm install -g typescript
   ```

## Getting Started

Clone this repository to your local machine: git clone https://github.com/ashishbokaro/robot_ts.git
Navigate to the project directory: cd robot_ts

## Custom Commands

To add custom commands for the robot, edit the command.txt file located in the project directory. Each line in the file should contain a reference point and a list of commands in the following format:

### Example

N 0 0 -> reference point
M1RM1 -> command

## Running the Application

npm start
To run in test environment execut: npm run start:dev

## Running Test Cases

To run the test cases, create the dist folder by executing `npm run build ` and then following command: npm run test

## Generating Test Reports

npm run test_report
