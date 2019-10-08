import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import { RichEditor} from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ShoeDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Additional Details" />
      <CardContent>
        <RichEditor placeholder="Say something about the product..." />
      </CardContent>
    </Card>
  );
};

ShoeDetails.propTypes = {
  className: PropTypes.string
};

export default ShoeDetails;
