import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { Alert } from 'components';

import { FilesDropzone } from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ShoeImageUploader = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Upload Photos Of Your Shoes" />
      <Alert
        className={classes.alert}
        message="Better Images Increase Chances of Your Shoe Selling"
      />
      <CardContent>
        <FilesDropzone />
      </CardContent>
    </Card>
  );
};

ShoeImageUploader.propTypes = {
  className: PropTypes.string
};

export default ShoeImageUploader;
