import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from "../actions";
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render () {
    const style = {
      position: 'fixed',
      right: 15,
      bottom: 15,
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd/>
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({events: state.events})

// default type
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

// short type
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
