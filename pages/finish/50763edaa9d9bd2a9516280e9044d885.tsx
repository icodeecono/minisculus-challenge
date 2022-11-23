import React from "react";

const Finish = () => {
  return (
    <div id="bodyContent">
      <h1>YOUR FINAL CHALLENGE</h1>

      <p>
        We have taken the main city of FURLIN (known for it&apos;s rich history
        of fur trading). Our troops are hunting the enemy high command. We know
        that they are hiding in a BUNKER in a remote part of the city.
      </p>

      <p>
        We have successfully reproduced the MARK IV machine, however we do not
        know what today&apos;s wheel settings are. Therefore, we need to use our
        machine to crack though an encoded message we received today to find the
        wheel positions.
      </p>

      <p>
        JSON QUESTION... The encoded message is in the code attribute of the
        JSON data. The message contains clue words found in the above text. Once
        decrypted, what is the decoded message and what are the wheel positions?
        (extra points are given for finding all the possible wheel positions
        that will successfully decode this message).
      </p>

      <p>
        Email{" "}
        <a href="mailto:minisculus@minisculuschallenge.com">
          minisculus@minisculuschallenge.com
        </a>{" "}
        with your answer, along with public access to your code repository. If
        you email us the correct answer to this final question, your name will
        join the coding elite on the Minisculus Hall of Fame.
      </p>
      <p>Thanks for playing the Minisculus Challenge!</p>
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

export default Finish;
