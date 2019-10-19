import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import GlobalStyles from '../../styles/global';
import HeroHeader from '../HeroHeader';

export default class Loading extends React.Component {
  state = {
    loading: false,
  }

  static propTypes = {
    children: PropTypes.func,
  }

  static defaultProps = {
    children: null,
  }

  startTimeout = null;

  componentDidMount() {
    const { router } = Router;

    router.events.on('routeChangeStart', this.changeStart);

    router.events.on('routeChangeComplete', this.changeCompleted);

    router.events.on('routeChangeError', this.changeError);
  }

  componentWillUnmount() {
    const { router } = Router;

    clearTimeout(this.startTimeout);

    router.events.off('routeChangeStart', this.changeStart);

    router.events.off('routeChangeComplete', this.changeCompleted);

    router.events.off('routeChangeError', this.changeError);
  }

  changeStart = () => {
    this.setState({ loading: true });
  }

  changeCompleted = () => {
    clearTimeout(this.startTimeout);
    this.setState({ loading: false });
  }

  changeError = () => {
    clearTimeout(this.startTimeout);
    this.setState({ loading: false });
  }

  render() {
    const { children } = this.props;
    const { loading } = this.state;

    if (loading) {
      return (
        <>
          <GlobalStyles />
          <HeroHeader showBear loading />
        </>
      );
    }

    return children;
  }
}
