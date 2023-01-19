# DND.Local

Like D&D Beyond, but local.

> Note: DND.Local is not ready for usage yet! We're working hard to get it ready, but for the time being, you'll have to use something like [D&D Beyond](https://dndbeyond.com). Check back for updates on development and features. - Reboot

Designed to be super easy to use and run multiple sessions with persistent memory for longer games. Super simple to setup too, just 1 docker compose command and you're off to the races! (No setup needed, just create a game as a DM.)

## Install

### EZ-Mode

Just clone this repository to "somewhere", make sure you have docker running and `docker-compose` in your path; then run `docker-compose up` in the root of the repository. (We use port 6868 which translates to "DD" in ASCII. Feel free to change the ports to whatever you want.)

## Try Hard

You'll need the latest LTS version of `node`, and `yarn`. Clone this repository "somewhere", then run `yarn install`, `yarn build`, and `yarn start` which will spin up a web server on port 3000 (the default for Next.js's built-in server).

## Usage

Navigate to wherever your server is located and the port based on your configuration (try either 6868 or 3000). It should look something like this: `192.168.0.5:6868` or `server.local:6868` (if you've setup a local domain name for your server) we'll be using `dnd.local` for the remainder of this document. Then either submit a game code or create a new game if you're impatient. But, we suggest going to `dnd.local/admin` to setup your instance properly.
