import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Dialog,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  colors
} from '@material-ui/core';
import PublicSaleIcon from '@material-ui/icons/AttachMoney';
import PublicAuctionIcon from '@material-ui/icons/Gavel'


const useStyles = makeStyles(theme => ({
  root: {
    width: 960
  },
  header: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    maxWidth: 720,
    margin: '0 auto'
  },
  product: {
    overflow: 'unset',
    position: 'relative',
    padding: theme.spacing(5, 3),
    cursor: 'pointer',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  image: {
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    top: -24,
    left: theme.spacing(3),
    height: 48,
    width: 48,
    fontSize: 24
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  options: {
    lineHeight: '26px'
  },
  recommended: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: `${theme.palette.white} !important`
    }
  },
  contact: {
    margin: theme.spacing(3, 0)
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  startButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const SelectTrade = props => {
  const { open, onClose, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Dialog
      maxWidth="lg"
      onClose={onClose}
      open={open}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <div className={classes.header}>
          <Typography
            align="center"
            gutterBottom
            variant="h2"
          >
            Select Type of Listing
          </Typography>
          <Typography
            align="center"
            className={classes.subtitle}
            variant="subtitle2"
          >
            You can pick between a Shoe for Shoe listing, a Public listing and a Private listing.
          </Typography>
        </div>
        <div className={classes.content}>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={classes.product}
                elevation={1}
                onClick={onClose}
              >
                <PublicSaleIcon className={classes.image}/>

                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                  >
                    Public Sale
                  </Typography>

                </div>
                <Divider className={classes.divider} />
                <Typography
                  className={classes.options}
                  variant="subtitle2"
                >
                  Set a price for your shoe and <b>any user</b> can purchase it from you
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={clsx(classes.product, classes.recommended)}
                elevation={1}
                onClick={onClose}
              >
                <img
                  alt="Product"
                  className={classes.image}
                  src="/images/products/product_agency--outlined.svg"
                />
                <Typography
                  component="span"
                  gutterBottom
                  variant="overline"
                >
                  Most popular
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                  >
                    Shoe for Shoe
                  </Typography>

                </div>

                <Divider className={classes.divider} />
                <Typography
                  className={classes.options}
                  variant="subtitle2"
                >
                  <p>Post a shoe that you want to trade with another user <b>for another shoe</b></p>
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={classes.product}
                elevation={1}
                onClick={onClose}
              >
                <PublicAuctionIcon className={classes.image} />


                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                  >
                    Public Auction
                  </Typography>

                </div>

                <Divider className={classes.divider} />
                <Typography
                  className={classes.options}
                  variant="subtitle2"
                >
                  Set a starting bid, minimum price and auction length to enable users to <b>bid</b> on your shoe
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Typography
            align="center"
            className={classes.contact}
            variant="subtitle2"
          >
            Have a question?{' '}
            <Link
              color="secondary"
              component={RouterLink}
              to="#"
            >
              Contact us
            </Link>{' '}
            for information about trading options.
          </Typography>
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.startButton}
            onClick={onClose}
            variant="contained"
          >
            Look at listings
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

SelectTrade.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default SelectTrade;
