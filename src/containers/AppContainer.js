
import React from 'react'
import { connect } from 'react-redux'

import App from '../components/App'
import { clickAction } from '../actions'

const AppContainer = (props) => {
  return (
    <App count={props.count} clickHandler={props.clickHandler} />
  )
}

function mapStateToProps(state) {
  return {
    count: state.count.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clickHandler: () => {
      dispatch(clickAction())
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(AppContainer)
