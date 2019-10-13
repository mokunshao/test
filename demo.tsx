import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

interface Props {
  code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const { code, children } = props;
  const hightLightCode = (
    <Highlight {...defaultProps} code={code} language="jsx">
      {
        ({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre className={className} style={style}>
            {
              tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {
                    line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))
                  }
                </div>
              ))
            }
          </pre>
        )
      }
    </Highlight>
  );
  return (
    <>
      <div>
        {children}
      </div>
      <div>
        <button type="button" onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
      </div>
      {codeVisible && hightLightCode}
    </>
  );
};

export default Demo;
