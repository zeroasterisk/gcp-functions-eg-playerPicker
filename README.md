# GCP Functions Example

This is a super basic example, which will pick a random "player" from a list of players.

It's a simple toy project, inspired by the surprisingly useful app 
[Chwazi Finger Chooser](https://play.google.com/store/apps/details?id=com.tendadigital.chwaziApp&hl=en_US).

## Example Usage:

Passing a JSON array of player names, you should get back a single response.
```
$ curl \
  -H "Content-Type: application/json" \
  -d '["alan","anita","poppy","oliver"]' \
  https://us-central1-flowing-silo-192900.cloudfunctions.net/playerPicker
```

## Running locally in GCP Function Emulatoor

First install the functions-emulator (globally) and start it

```
npm install -g @google-cloud/functions-emulator
functions start
```

Then deploy the code to the emulator and test it

```
functions deploy playerPicker
functions call playerPicker --data='["alan","anita","poppy","oliver"]'

```

or the npm script version

```
npm run emu
npm run demo-fam
```

## Branch Variations

Switch branches to `demo-safer` to see a very basic more-secure version


