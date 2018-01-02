import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Body from './Body'

const Sidebar = ({
  timebar,
  tracks,
  toggleTrackOpen,
  sticky
}) => (
  <div className="rt-sidebar">
    <Header timebar={timebar} sticky={sticky} />
    <Body tracks={tracks} toggleTrackOpen={toggleTrackOpen} />
  </div>
)

Sidebar.propTypes = {
  timebar: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string
  }).isRequired).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  sticky: PropTypes.shape({})
}

export default Sidebar
