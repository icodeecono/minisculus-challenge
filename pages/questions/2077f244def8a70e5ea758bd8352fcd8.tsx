import React from "react";

const Question2 = () => {
  return (
    <div id="bodyContent">
      <h1>CHALLENGE 2</h1>

      <p>
        The SSPA has had another success! During a raid on a captured
        communication outpost in Prague, an updated version of the encoding
        machine has been obtained. The MARK II has a design evolved from the
        MARK I in that it still has a letter shifting first wheel, however, a
        second wheel has been added to further complicate the encoded message.
        The MARK II&apos;s second wheel is set the same way as the first, e.g. a
        0-9 setting. The difference is that the second wheel shifts the
        characters in a REVERSE direction TWO TIMES the number shown on the
        wheel&apos;s setting. This means, a MARK II machine with wheel settings
        of 2 [First Wheel], 5 [Second Wheel] and input characters of
        &apos;abc&apos; will result in an output of &apos;STU&apos;
      </p>

      <p>
        Your task is to update your machine to add the second wheel. Make haste!
        Our anti-fascist forces are relying on you!
      </p>

      <p>
        JSON question... using the wheel settings of 9,3 what would the encoded
        message be for the input &apos;The Desert Fox will move 30 tanks to
        Calais at dawn&apos;?
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

export default Question2;
