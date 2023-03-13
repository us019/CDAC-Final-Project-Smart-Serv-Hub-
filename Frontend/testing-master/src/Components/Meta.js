import { Helmet } from 'react-helmet'

import React from 'react'

function Meta(props) {
  return (
    <Helmet>
        <meta />
        <title>{props.title}</title>
    </Helmet>
  )
}

export default Meta
