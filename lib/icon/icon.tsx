import React from 'react';
import './icon.scss';
import classes from '../utils/classes';
import './importAllIcons';

type iconName = 'qq' | 'wechat' | 'alipay';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string & iconName;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name, className, ...rest } = props;
  return (
    <svg className={classes('daybreak-icon', className)} {...rest}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
