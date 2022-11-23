import React from "react";

export default function Home() {
  return (
    <div id="bodyContent">
      <h1>The Challenge</h1>

      <p>
        In honour of the SC2010UK event held at Bletchley Park, we have decided
        to put forth a coding challenge loosely based on the historic efforts of
        the WWII code breakers.
      </p>

      <p>
        This challenge is inspired by the{" "}
        <a href="http://en.wikipedia.org/wiki/Lorenz_cipher">Lorenz cipher</a>{" "}
        and{" "}
        <a href="http://en.wikipedia.org/wiki/Colossus_computer">
          Colossus computer
        </a>{" "}
        used by the WWII code breakers at{" "}
        <a href="http://en.wikipedia.org/wiki/Bletchley_park">Bletchley Park</a>
        .
      </p>

      <p>There will be 5 questions you need to solve. Good Luck! Enjoy!</p>

      <h2>To Access the Challenge</h2>

      <p>
        To obtain the questions for the challenge you will need to use a JSON
        service to request each question. An example on how to use the JSON REST
        API is found here:{" "}
        <a href="https://gist.github.com/1490292">
          https://gist.github.com/1490292
        </a>
      </p>
      <p>
        Please note that you will need to use the &apos;reference-url&apos;
        attribute in the JSON data to get the information needed to solve the
        question. Once you have successfully completed a question, then you will
        be redirected to the next question in turn.
      </p>
      <p>
        If you need any help, please do not hesitate to contact us at{" "}
        <a href="mailto:minisculus@minisculuschallenge.com">
          minisculus@minisculuschallenge.com
        </a>
      </p>
      <p>
        You can start the challenge by requesting{" "}
        <a href="/start">https://minisculuschallenge.com/start</a>.
      </p>

      <h2>Challenge Format</h2>

      <ul>
        <li>
          The challenge works with a JSON-based REST API
          <br />
          <div className="subtext">
            {" "}
            - (documentation at{" "}
            <a href="https://gist.github.com/1490292">
              https://gist.github.com/1490292
            </a>
            )
          </div>
        </li>
        <li>
          A question is in the following format:
          <br />
          <div className="subtext">
            {" "}
            - &#123;&quot;question&quot;:&quot;Strong NE
            Winds!&quot;,&quot;reference-url&quot;:&quot;/questions/14f7ca5f6ff1a5afb9032aa5e533ad95&quot;&#125;
          </div>
        </li>
        <li>
          You should then surf to the “reference-url” for more info on how to
          solve the question
        </li>
        <li>
          The answers are HTTP PUT in the following format to the question URL:
          <br />
          <div className="subtext">
            {" "}
            - &#123;&quot;answer&quot;: &quot;3&quot;&#125;
            <br /> - Example Question URL:
            https://minisculuschallenge.com/14f7ca5f6ff1a5afb9032aa5e533ad95
          </div>
        </li>
      </ul>

      <h2>Promote the Challenge</h2>

      <p>
        The Minisculus Challenge is suitable for focus groups, code retreats or
        individuals who want to sharpen their coding skills or learn a new
        language. Solutions to the challenge can be submitted using any coding
        language.
      </p>
      <p>
        If you organize a code retreat using the Minisculus Challenge and would
        like us to promote the event on this website, then please email{" "}
        <a href="mailto:minisculus@minisculuschallenge.com">
          minisculus@minisculuschallenge.com
        </a>
        .
      </p>

      <h2>Hall of Fame</h2>

      <p>
        Below is a list of the brave souls who have completed the challenge and
        lived to tell the tale...
      </p>

      <ul>
        <li>
          <a href="http://lukeredpath.co.uk/">
            <strong>Luke Redpath</strong>
          </a>{" "}
          - WINNER OF ORIGINAL CHALLENGE!
          <br />
          <span className="solutionWinner">
            (
            <a href="http://github.com/lukeredpath/minisculus">
              Luke&apos;s solution code
            </a>
            )
          </span>
        </li>
      </ul>

      <ul>
        <li>
          <a href="http://twitter.com/sermoa">
            <strong>aimee daniells</strong>
          </a>{" "}
          <span className="solutionCode">
            (<a href="http://github.com/sermoa/minisculus">solution code</a>)
            (co-author)
          </span>
        </li>
        <li>
          <a href="http://twitter.com/tooky">
            <strong>Steve Tooke</strong>
          </a>{" "}
          <span className="solutionCode">(co-author)</span>
        </li>
        <li>
          <a href="http://twitter.com/icodeecono">
            <strong>Todd Anderson</strong>
          </a>{" "}
          <span className="solutionCode">(co-author)</span>
        </li>
        <li>
          <a href="http://twitter.com/chrismdp">
            <strong>Chris Parsons</strong>
          </a>
        </li>
        <li>
          <a href="http://www.agileo.com/">
            <strong>Leo Antoli</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="http://svn2.xp-dev.com/svn/minisculus-leo/minisculus/trunk/">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <a href="http://twitter.com/nrocy">
            <strong>Paul King</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="http://github.com/nrocy/Minisculus-Solution">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <a href="http://xaviershay.com/">
            <strong>Xavier Shay</strong>
          </a>{" "}
          <span className="solutionCode">
            (<a href="http://github.com/xaviershay/minisculus">solution code</a>
            )
          </span>
        </li>
        <li>
          <a href="http://twitter.com/germandz">
            <strong>German DZ</strong>
          </a>
        </li>
        <li>
          <a href="http://blog.8thlight.com/colin-jones/archive.html">
            <strong>Colin Jones</strong>
          </a>{" "}
          <span className="solutionCode">
            (<a href="http://github.com/trptcolin/minisculus">solution code</a>)
          </span>
        </li>
        <li>
          <a href="http://ordinaryzelig.org/">
            <strong>Jared Ning</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="http://github.com/ordinaryzelig/minisculus-challenge">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <strong>Miguel Ángel García</strong>{" "}
          <span className="solutionCode">
            (<a href="https://bitbucket.org/magmax/minusculus">solution code</a>
            )
          </span>
        </li>
        <li>
          <a href="http://twitter.com/despo">
            <strong>Despo Pentara</strong>
          </a>
        </li>
        <li>
          <a href="http://www.kerrybuckley.org/">
            <strong>Kerry Buckley</strong>
          </a>{" "}
          <span className="solutionCode">
            (<a href="http://github.com/kerryb/minisculus">solution code</a>)
          </span>
        </li>
        <li>
          <a href="http://flavours.me/bishboria">
            <strong>Stuart Gale</strong>
          </a>
        </li>
        <li>
          <a href="http://datamangling.com/">
            <strong>Gavin Heavyside</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/gavinheavyside/minisculus">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <strong>Tom Mortimer-Jones</strong>{" "}
          <span className="solutionCode">
            (<a href="https://github.com/morty/minisculus">solution code</a>)
          </span>
        </li>
        <li>
          <a href="http://twitter.com/sydlawrence">
            <strong>Syd Lawrence</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/sydlawrence/code-breaking-minisculus">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <strong>Rupesh Dubey</strong>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/rupeshdubey/MiniSculusChallenge">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <a href="http://www.krzysztofpazowski.com">
            <strong>Krzysztof Pazowski</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/KrzysztofPazowski/minisculus/downloads">
              solution code
            </a>{" "}
            and{" "}
            <a href="https://github.com/KrzysztofPazowski/minisculus">
              description
            </a>
            )
          </span>
        </li>
        <li>
          <a href="http://www.linkedin.com/pub/arun-jayabalan/13/105/696">
            <strong>Arun Jayabalan</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/Arun-Jayabalan/MinisculusChallengeSolution">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <strong>Jenny Ramsay</strong>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/jenny99r/minisculus/blob/master/final.hs">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <a href="https://twitter.com/yebenes9">
            <strong>Alberto J. Rubio</strong>
          </a>{" "}
          <span className="solutionCode">
            (<a href="https://github.com/yebenes/minisculus">solution code</a>)
          </span>
        </li>
        <li>
          <a href="http://karun.me">
            <strong>Karun Japhet</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/JAnderton/minisculus-challenge">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <strong>Manali Latkar</strong>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/manalilatkar/minusculus-challenge">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <a href="https://github.com/jaehl">
            <strong>James Mills</strong>
          </a>{" "}
          <span className="solutionCode">
            (
            <a href="https://github.com/jaehl/minisculus-challenge">
              solution code
            </a>
            )
          </span>
        </li>
        <li>
          <a href="http://github.com/aelred">
            <strong>Felix Chapman</strong>
          </a>{" "}
          <span className="solutionCode">
            (<a href="https://github.com/aelred/minisculus">solution code</a>)
          </span>
        </li>
        <li>
          <a
            href="https://twitter.com/rvodden
"
          >
            <strong>Richard Vodden</strong>
          </a>{" "}
          <span className="solutionCode">
            (<a href="https://github.com/rvodden/minisculus">solution code</a>)
          </span>
        </li>
      </ul>

      <p>
        Special thanks to{" "}
        <a href="http://twitter.com/spencerturner">Spencer Turner</a> for the
        design of this website.
      </p>

      <div className="footer">
        <p>
          Copyright &copy; 2012 Minisculus Challenge. The original work has been
          modified. Adaptation based on original work &quot;Eden Development
          Minisculus Challenge&quot; &copy; 2010,2011 by Eden Development (UK)
          Ltd. (http://minisculus.edendevelopment.co.uk/)
        </p>
        <p>
          This work is licensed under a{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
            Creative Commons Attribution 3.0 Unported License
          </a>
          .
        </p>
      </div>
    </div>
  );
}
