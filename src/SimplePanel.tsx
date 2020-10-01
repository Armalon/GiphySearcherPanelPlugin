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
        <div className={cx(
          styles.wrapperChild,
          css`
          height: ${this.props.height}px;
        `
        )}>
          <form onSubmit={this.handleFormSubmit} className={styles.form}>
            <input
              type="search"
              placeholder="Please enter keyword"
              onChange={this.handleTextChange} />
            <button disabled>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path></svg>
            </button>
          </form>
        </div>
      </div>
    );
  }

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event && event.preventDefault()
  }

  handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  }
}

export { SimplePanel }

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    wrapperChild: css`
      overflow-y: scroll;
      padding: 2px;
    `,
    form: css`
      display: flex;
      & > input[type=search] {
        width: 100%;
        font-size: 16pt;
      }
      & > button {
        height: 52px;
        padding: 6px;
        background: linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 100%);
        border: none;
        & > svg {
          fill: white;
          height: 40px;
        }
      }
      & > button:disabled {
        background: gray;
      }
    `,
  };
});
