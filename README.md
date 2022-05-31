# SET By Shady V2

## What is this?

I am re-writing [my old project](https://github.com/ShadiestGoat/set-game-site/) using svelte to maintain it & add some new features.

Set is a card singleplayer or multiplayer card game, where you must collect as many *sets* as possible, as fast as possible. A *set* is a group of 3 cards, that have some sort of patter in them (including the pattern of no pattern at all). Each card has 4 properties:

1. Color (red, green, purple)
2. Amount (1, 2, 3)
3. Shape (Worm, Oval, Rombus)
4. Fill type (Empty, Filled, Striped)

The rule is is that in a *set*, if 2 cards share a property, the other one must also share it. However, this is difficult to understand for us humans, so a better explanation would be that in a *set* there is no odd-one-out. Eg. A red-worm-empty-3 and a red-worm-empty-2 have a patter of the color being red, the shape being a worm, and no filling. The other patter in these cards is that the number of shapes is decreasing. None of these patterns must be broken, so the only possible card is red-worm-empty-4.

Of course, this is a lot easier to understand when playing!

## Roadmap

- [ ] Get a basic version working in svelte
- [ ] Use grid for css
- [ ] Create "livesplit" timer
- [ ] Add multiplayer using WS and a server
