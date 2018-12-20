#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const colors = {
  red: '#EC697C',
  navy: '#242842'
}

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: colors.red,
  backgroundColor: colors.navy
}

// Text + chalk definitions
const data = {
  name: chalk.white('Michael Pumo'),
  handle: chalk.hex(colors.red)('michaelpumo'),
  tagline: chalk.white('Frontend Web Developer'),
  twitter: chalk.hex(colors.red)('https://twitter.com/michaelpumo'),
  github: chalk.hex(colors.red)('https://github.com/michaelpumo'),
  linkedin: chalk.hex(colors.red)('https://linkedin.com/in/michaelpumo'),
  web: chalk.hex(colors.red)('https://michaelpumo.com'),
  npx: chalk.white('npx @michaelpumo/card'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelPortfolio: chalk.white.bold(' Portfolio:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} | ${data.tagline}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelPortfolio}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(boxen(output, options))
