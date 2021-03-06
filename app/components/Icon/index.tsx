import React, { PureComponent, MouseEvent } from 'react';
import { isString } from 'lodash';
import styles from './index.global.less';

const mini = (props) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="step-forward"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M279.272727 744.727273h93.090909V651.636364H279.272727v93.090909z m93.090909-93.090909h93.090909V558.545455H372.363636v93.090909z m93.090909-93.090909h93.09091V465.454545H465.454545v93.09091z m186.181819-186.181819H558.545455v93.090909h93.090909V372.363636z m93.090909-93.090909H651.636364v93.090909h93.090909V279.272727zM0 558.545455v465.454545h465.454545L279.272727 837.818182V744.727273H186.181818L0 558.545455z m0-558.545455v372.363636h93.090909V93.090909h1024v837.818182H651.636364v93.090909h558.545454V0H0z" />
    </svg>
  );
};

const close = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="step-forward"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M512 456.310154L94.247385 38.557538a39.542154 39.542154 0 0 0-55.689847 0 39.266462 39.266462 0 0 0 0 55.689847L456.310154 512 38.557538 929.752615a39.542154 39.542154 0 0 0 0 55.689847 39.266462 39.266462 0 0 0 55.689847 0L512 567.689846l417.752615 417.752616c15.163077 15.163077 40.290462 15.36 55.689847 0a39.266462 39.266462 0 0 0 0-55.689847L567.689846 512 985.442462 94.247385a39.542154 39.542154 0 0 0 0-55.689847 39.266462 39.266462 0 0 0-55.689847 0L512 456.310154z" />
    </svg>
  );
};
const heng = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="step-forward"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M38.482 566.476l945 0 0-117-945 0L38.482 566.476z" />
    </svg>
  );
};

const mouth = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="step-forward"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M196.923077 78.769231a118.153846 118.153846 0 0 0-118.153846 118.153846v630.153846a118.153846 118.153846 0 0 0 118.153846 118.153846h630.153846a118.153846 118.153846 0 0 0 118.153846-118.153846V196.923077a118.153846 118.153846 0 0 0-118.153846-118.153846H196.923077z m0-78.769231h630.153846a196.923077 196.923077 0 0 1 196.923077 196.923077v630.153846a196.923077 196.923077 0 0 1-196.923077 196.923077H196.923077a196.923077 196.923077 0 0 1-196.923077-196.923077V196.923077a196.923077 196.923077 0 0 1 196.923077-196.923077z" />
    </svg>
  );
};
const yinyue = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="step-forward"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M844.743872 64.641229l-483.775168 80.814584c-1.567705 0.25071-3.031033 0.710175-4.453429 1.254573l-17.475 0c-11.915377 0-21.38403 9.532097-21.38403 21.280676l0 553.029462c-18.875906-10.912537-40.825824-17.140379-64.216557-17.140379-70.927399 0-128.433114 57.359382-128.433114 128.139425S182.512289 960.15695 253.439688 960.15695c70.926376 0 128.433114-57.359382 128.433114-128.139425 0-5.184069-0.314155-10.285251-0.899486-15.259542 0.585331-1.964748 0.899486-4.013407 0.899486-6.187933l0-449.764564 449.513854-79.267345 0 311.298955c-18.875906-10.870582-40.825824-17.142425-64.216557-17.142425-70.927399 0-128.433114 57.401338-128.433114 128.183428 0 70.738088 57.505715 128.139425 128.433114 128.139425 70.926376 0 128.432091-57.401338 128.432091-128.139425 0-5.184069-0.313132-10.285251-0.898463-15.301498 0.585331-1.966795 0.898463-4.015454 0.898463-6.187933l0-597.97307c0-10.45205-7.587815-19.190061-17.579377-20.946055-3.491521-2.173502-7.881504-3.051499-12.710486-2.257413l-11.370978 1.922792-1.170662 0C849.927941 63.135946 847.21004 63.679321 844.743872 64.641229z" />
    </svg>
  );
};
const arrowDown = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="step-forward"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M512 685.248l-278.624-278.624 45.248-45.248L512 594.752l233.376-233.376 45.248 45.248z" />
    </svg>
  );
};
const playlistChecked = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="step-forward"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M1023.83 474.655l-549.255 549.283h549.255V474.655zM783.16 979.732l-96.896-96.933 36.335-36.35 60.56 60.583L952.729 737.4l36.335 36.35L783.16 979.731z" />
    </svg>
  );
};
const typeMap: any = {
  mini,
  close,
  heng,
  mouth,
  yinyue,
  arrowDown,
  playlistChecked,
};

interface IIconProps {
  type: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  [x: string]: any;
}

export default class Icon extends PureComponent<IIconProps> {
  render() {
    const { type, children, ...props } = this.props;
    if (isString(type) && typeMap[type]) {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <i {...props}>{typeMap[type]()}</i>;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <i {...props} />;
  }
}
