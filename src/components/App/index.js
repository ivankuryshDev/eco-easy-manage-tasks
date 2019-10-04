import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Clock from 'react-live-clock';

import { setItems } from '../../redux/actions/todo';
import List from '../List';
import FormAdd from '../Form/Add';
import FormEdit from '../Form/Edit';

import './index.scss';

class App extends Component {
    componentDidMount() {
        this.props.setItems();
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app-box">
                        <header className="app-header">
                            <p className="time">
                                <Clock className="time-clock" format={'HH:mm'} ticking={true} timezone={'Europe/Kiev'} />
                            </p>
                            <br/>
                            <p className="day-month">
                                <Clock className="time-clock" format={'dddd, MMMM Mo'} ticking={true} timezone={'Europe/Kiev'} />
                            </p>
                        </header>
                        <Route exact path="/" component={List} />
                        <Route exact path="/add" component={FormAdd} />
                        <Route exact path="/edit/:id" component={FormEdit} />
                    </div>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    setItems: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
    setItems
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
