import React from "react";

const Question3 = () => {
  return (
    <div id="bodyContent">
      <h1>QUESTION 3:</h1>

      <p>
        Our troops are preparing for the BIG-DAY landing on the beaches of
        Sardinia (we thought the weather was nicer there). For us to
        successfully land on the BIG-DAY, we need to know the enemy troop
        positions. Lucky, one of our seductive SSPA agents, Madame Moth, has
        wooed a new machine away from under the nose of an enemy general. The
        MARK IV (MARK III was canceled due to budget overruns) again builds off
        the design of the MARK II. Except this time (drum roll please...) it has
        THREE wheels.
      </p>

      <p>
        The MARK IV&apos;s third wheel is more complicated than the first two in
        that it&apos;s setting is based off the previously pressed character
        position. The machine shifts the letter based off the first two wheels,
        then it further ADDS to the index TWO TIMES the PREVIOUS LETTER&apos;S
        position in the machine&apos;s alphabet. Note that the third
        wheel&apos;s initial position starts at 0.
      </p>

      <p>
        You have a deadline to get this working before the BIG-DAY. So get
        moving!
      </p>

      <p>
        JSON question... using the first two wheel positions of 4,7 and an input
        message of &apos;The white cliffs of Alghero are visible at night&apos;,
        given the new 3rd variable wheel, what is the resulting output?
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
};

export default Question3;
