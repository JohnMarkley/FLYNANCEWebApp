import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Input,
  Card,
  colors
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

import { MultiSelect } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  keywords: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(2)
  },
  chips: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing(1)
  },
  selects: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: colors.grey[50],
    padding: theme.spacing(1)
  },
  inNetwork: {
    marginLeft: 'auto'
  }
}));

const selects = [
  {
    label: 'Type',
    options: ['Designer', 'Basketball', 'Tennis', 'Exclusive']
  },
  {
    label: 'Size',
    options: ['Mens 6/7', 'Mens 8/9', 'Mens 10/11', 'Mens 12/13','Mens 14+']
  },
  {
    label: 'Price',
    options: [
      '$0-149',
      '$150-299',
      '$300-499',
      '$500-999',
      '$1000+',
    ]
  },
  {
    label: 'Brands',
    options: ['Nike', 'Adidas', 'Shoebrand 1', 'Shoebrand 2']
  }
];

const Filter = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([
    "Mens",
    "Womans",
    'All Sizes',
  ]);

  const handleInputChange = event => {
    event.persist();
    setInputValue(event.target.value);
  };

  const handleInputKeyup = event => {
    event.persist();

    if (event.keyCode === 13 && inputValue) {
      if (!chips.includes(inputValue)) {
        setChips(chips => [...chips, inputValue]);
        setInputValue('');
      }
    }
  };

  const handleChipDelete = chip => {
    setChips(chips => chips.filter(c => chip !== c));
  };

  const handleMultiSelectChange = value => {
    setChips(value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >

      <div className={classes.chips}>
        {chips.map(chip => (
          <Chip
            className={classes.chip}
            deleteIcon={<CloseIcon />}
            key={chip}
            label={chip}
            onDelete={() => handleChipDelete(chip)}
          />
        ))}
      </div>
      <Divider />
      <div className={classes.selects}>
        {selects.map(select => (
          <MultiSelect
            key={select.label}
            label={select.label}
            onChange={handleMultiSelectChange}
            options={select.options}
            value={chips}
          />
        ))}

      </div>
    </Card>
  );
};

Filter.propTypes = {
  className: PropTypes.string
};

export default Filter;
