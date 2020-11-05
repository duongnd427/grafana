import React, { PureComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { NavModel } from '@grafana/data';
import { config } from '@grafana/runtime';
// import { Icon } from '@grafana/ui';
import Page from '../Page/Page';
import { getNavModel } from 'app/core/selectors/navModel';
import { StoreState } from 'app/types';
import './error.scss';

interface ConnectedProps {
  navModel: NavModel;
}

interface OwnProps {}

type Props = ConnectedProps;

export class ErrorPage extends PureComponent<Props> {
  render() {
    const { navModel } = this.props;
    return (
      <Page navModel={navModel}>
        <Page.Contents>
          <div>
            <div className="moon"></div>
            <div className="moon__crater moon__crater1"></div>
            <div className="moon__crater moon__crater2"></div>
            <div className="moon__crater moon__crater3"></div>

            <div className="star star1"></div>
            <div className="star star2"></div>
            <div className="star star3"></div>
            <div className="star star4"></div>
            <div className="star star5"></div>

            <div className="error">
              <div className="error__title">404</div>
              <div className="error__subtitle">Page not found</div>
              <div className="error-column error-space-between error-full-width">
                <div className="error-row error-space-between">
                  <p>Chances you are on the page you are looking for.</p>
                </div>
                <div>
                  <h3 className="sorry">Sorry for the inconvenience</h3>
                  <p>
                    Please go back to your{' '}
                    <a href={config.appSubUrl} className="error-link">
                      home dashboard
                    </a>{' '}
                    and try again.
                  </p>
                  <p>
                    If the error persists, seek help on the{' '}
                    <a href="https://community.grafana.com" target="_blank" className="error-link">
                      community site
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="astronaut">
              <div className="astronaut__backpack"></div>
              <div className="astronaut__body"></div>
              <div className="astronaut__body__chest"></div>
              <div className="astronaut__arm-left1"></div>
              <div className="astronaut__arm-left2"></div>
              <div className="astronaut__arm-right1"></div>
              <div className="astronaut__arm-right2"></div>
              <div className="astronaut__arm-thumb-left"></div>
              <div className="astronaut__arm-thumb-right"></div>
              <div className="astronaut__leg-left"></div>
              <div className="astronaut__leg-right"></div>
              <div className="astronaut__foot-left"></div>
              <div className="astronaut__foot-right"></div>
              <div className="astronaut__wrist-left"></div>
              <div className="astronaut__wrist-right"></div>

              <div className="astronaut__cord">
                <canvas id="cord" height="500px" width="500px"></canvas>
              </div>

              <div className="astronaut__head">
                <canvas id="visor" width="60px" height="60px"></canvas>
                <div className="astronaut__head-visor-flare1"></div>
                <div className="astronaut__head-visor-flare2"></div>
              </div>
            </div>
          </div>
        </Page.Contents>
      </Page>
    );
  }
}

const mapStateToProps: MapStateToProps<ConnectedProps, OwnProps, StoreState> = state => {
  return {
    navModel: getNavModel(state.navIndex, 'not-found'),
  };
};

export default connect(mapStateToProps)(ErrorPage);
