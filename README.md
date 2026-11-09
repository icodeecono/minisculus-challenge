# Minisculus Challenge Server

> **The challenge has closed.**
>
> On 2026-11-09, Claude Code solved the Minisculus Challenge on its own in well under two minutes, so the challenge has run its course. I'm shutting down the minisculuschallenge.com website. You can see how Claude solved it in [`minisculus-challenge-claude-answer`](minisculus-challenge-claude-answer/).
>
> When I asked Claude Code whether it enjoyed the challenge, my favourite part of its reply was:
>
> > "As a puzzle it was on the easy side; the ciphers were simple once each rule was clear. I enjoyed it more as a gentle exercise in reading instructions carefully and checking my work against the examples given." 😂
>
> Thank you to everyone who contributed to and solved the challenge over the years. 🙏
>
> The code stays here if you'd like to run the challenge on your own server.

The [Minisculus Challenge](http://minisculuschallenge.com/) launched
during the Software Crafstmanship 2010 conference at Blethcley Park.

The challenge required a simple JSON rest api and some accompanying web pages.

New version is a quick port into next.js to get off Heroku. Some fancy routing is done in the middleware.tsx file to match the original challenge routing.

## Hall of Fame

Below is a list of the brave souls who have completed the challenge and lived to tell the tale...

- [**Luke Redpath**](http://lukeredpath.co.uk/) - WINNER OF ORIGINAL CHALLENGE! ([Luke's solution code](http://github.com/lukeredpath/minisculus))

---

- [**aimee daniells**](http://twitter.com/sermoa) ([solution code](http://github.com/sermoa/minisculus)) (co-author)
- [**Steve Tooke**](http://twitter.com/tooky) (co-author)
- [**Todd Anderson**](http://twitter.com/pr0j3c7t0dd) (co-author)
- [**Chris Parsons**](http://twitter.com/chrismdp)
- [**Leo Antoli**](http://www.agileo.com/) ([solution code](http://svn2.xp-dev.com/svn/minisculus-leo/minisculus/trunk/))
- [**Paul King**](http://twitter.com/nrocy) ([solution code](http://github.com/nrocy/Minisculus-Solution))
- [**Xavier Shay**](http://xaviershay.com/) ([solution code](http://github.com/xaviershay/minisculus))
- [**German DZ**](http://twitter.com/germandz)
- [**Colin Jones**](http://blog.8thlight.com/colin-jones/archive.html) ([solution code](http://github.com/trptcolin/minisculus))
- [**Jared Ning**](http://ordinaryzelig.org/) ([solution code](http://github.com/ordinaryzelig/minisculus-challenge))
- **Miguel Ángel García** ([solution code](https://bitbucket.org/magmax/minusculus))
- [**Despo Pentara**](http://twitter.com/despo)
- [**Kerry Buckley**](http://www.kerrybuckley.org/) ([solution code](http://github.com/kerryb/minisculus))
- [**Stuart Gale**](http://flavours.me/bishboria)
- [**Gavin Heavyside**](http://datamangling.com/) ([solution code](https://github.com/gavinheavyside/minisculus))
- **Tom Mortimer-Jones** ([solution code](https://github.com/morty/minisculus))
- [**Syd Lawrence**](http://twitter.com/sydlawrence) ([solution code](https://github.com/sydlawrence/code-breaking-minisculus))
- **Rupesh Dubey** ([solution code](https://github.com/rupeshdubey/MiniSculusChallenge))
- [**Krzysztof Pazowski**](http://www.krzysztofpazowski.com) ([solution code](https://github.com/KrzysztofPazowski/minisculus/downloads) and [description](https://github.com/KrzysztofPazowski/minisculus))
- [**Arun Jayabalan**](http://www.linkedin.com/pub/arun-jayabalan/13/105/696) ([solution code](https://github.com/Arun-Jayabalan/MinisculusChallengeSolution))
- **Jenny Ramsay** ([solution code](https://github.com/jenny99r/minisculus/blob/master/final.hs))
- [**Alberto J. Rubio**](https://twitter.com/yebenes9) ([solution code](https://github.com/yebenes/minisculus))
- [**Karun Japhet**](http://karun.me) ([solution code](https://github.com/JAnderton/minisculus-challenge))
- **Manali Latkar** ([solution code](https://github.com/manalilatkar/minusculus-challenge))
- [**James Mills**](https://github.com/jaehl) ([solution code](https://github.com/jaehl/minisculus-challenge))
- [**Felix Chapman**](http://github.com/aelred) ([solution code](https://github.com/aelred/minisculus))
- [**Richard Vodden**](https://twitter.com/rvodden) ([solution code](https://github.com/rvodden/minisculus))

Special thanks to [Spencer Turner](http://twitter.com/spencerturner) for the design of the website.

## Getting Started - Running Locally

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
