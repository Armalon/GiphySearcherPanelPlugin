import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import {stylesFactory} from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}
interface State {
}

class SimplePanel extends React.Component<Props, State> {
  render() {
    const styles = getStyles();

    return (
      <div
        className={cx(
          styles.wrapper,
          css`
            width: ${this.props.width}px;
            height: ${this.props.height}px;
          `
        )}
      >
        TEST
      </div>
    );
  }
}

export { SimplePanel }

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
