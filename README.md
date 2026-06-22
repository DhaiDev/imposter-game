# 🕵️ Imposter — Pass & Play Party Game

A mobile-first, single-phone party game. Everyone shares one secret word — except the hidden imposter(s). Give one-word clues, debate, and vote out the fake.

## Run it

Just open `index.html` in any browser — no build, no internet, no dependencies.

Or serve it locally for the best experience:

```bash
cd playfunfun
python3 -m http.server 8755
# then open http://127.0.0.1:8755/ on your phone (same Wi-Fi) or desktop
```

## How to play

1. **Set up** — choose players (3–12), imposters, categories, timer, and names.
2. **Pass & reveal** — hand the phone around; each player taps the card to privately see the word. The imposter sees "IMPOSTER" (with an optional category hint to bluff).
3. **Clues** — going clockwise, everyone says one word linked to the secret word.
4. **Debate & vote** — spot who's faking; everyone points at their suspect.
5. **Reveal** — see who the imposter was. Imposters win if they survive!

## Files

- `index.html` — entry point
- `styles.css` — dark, mobile-first UI
- `words.js` — categorized word bank (edit to add your own)
- `game.js` — all game logic (vanilla JS, no frameworks)

Best with 4–10 players and one shared phone.
