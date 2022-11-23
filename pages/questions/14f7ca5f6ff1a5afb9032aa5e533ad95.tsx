import React from "react";

const Question1 = () => {
  return (
    <div id="bodyContent">
      <h1>YOUR FIRST CHALLENGE</h1>

      <p>
        Our crack team of undercover operatives, the Special Secret People of
        Awesomeness (SSPA), have intercepted plans for an enemy message encoding
        machine known as the MARK I. The early prototype has been trial tested
        on the Western front to call in artillery strikes with great success,
        leading to many causalities on our side. Your mission is to create a
        computerized version of the MARK I.
      </p>

      <p>
        The plans captured show the MARK I as being a very simple device. The
        operator sets an encoder wheel to a value between 0 and 9 as
        pre-determined by standard operating protocols. They then type on a
        keyboard and the resulting encoded character is sent to the field, which
        is then decoded and the commands are carried out.
      </p>

      <p>
        The keyboard has the following set of characters (assuming a zero-based
        index), which are used for both the input and output messages.
      </p>

      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "keep-all" }}>
        <code>
          [ &quot;0&quot;, &quot;1&quot;, &quot;2&quot;, &quot;3&quot;,
          &quot;4&quot;, &quot;5&quot;, &quot;6&quot;, &quot;7&quot;,
          &quot;8&quot;, &quot;9&quot;, &quot;A&quot;, &quot;B&quot;,
          &quot;C&quot;, &quot;D&quot;, &quot;E&quot;, &quot;F&quot;,
          &quot;G&quot;, &quot;H&quot;, &quot;I&quot;, &quot;J&quot;,
          &quot;K&quot;, &quot;L&quot;, &quot;M&quot;, &quot;N&quot;,
          &quot;O&quot;, &quot;P&quot;, &quot;Q&quot;, &quot;R&quot;,
          &quot;S&quot;, &quot;T&quot;, &quot;U&quot;, &quot;V&quot;,
          &quot;W&quot;, &quot;X&quot;, &quot;Y&quot;, &quot;Z&quot;,
          &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;,
          &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;,
          &quot;i&quot;, &quot;j&quot;, &quot;k&quot;, &quot;l&quot;,
          &quot;m&quot;, &quot;n&quot;, &quot;o&quot;, &quot;p&quot;,
          &quot;q&quot;, &quot;r&quot;, &quot;s&quot;, &quot;t&quot;,
          &quot;u&quot;, &quot;v&quot;, &quot;w&quot;, &quot;x&quot;,
          &quot;y&quot;, &quot;z&quot;, &quot;.&quot;, &quot;,&quot;,
          &quot;?&quot;, &quot;!&quot;, &quot;&apos;&quot;, &quot;\&quot;&quot;,
          &quot; &quot; ]
        </code>
      </pre>

      <p>
        The MARK I functions by shifting the input character by the number shown
        on the wheel. Therefore, with a wheel setting of 5, an input character
        of &apos;a&apos; will result in an encoded character of &apos;f&apos;,
        &apos;c&apos; becomes &apos;h&apos;, and so forth. If the new index
        falls off the end of the set of characters, then it simply loops back to
        the beginning (and vice versa).
      </p>

      <p>
        You will need to encode the words &apos;Strong NE Winds!&apos; using
        your virtual MARK I device set at wheel position 6 and send it back to
        via JSON to allow you to move on to the next question.
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

export default Question1;
