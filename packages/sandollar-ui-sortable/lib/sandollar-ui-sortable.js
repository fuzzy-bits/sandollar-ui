import React, { Component } from 'react'

class SorTable extends Component {
  state = {
    items: this.props.items || [],
    sort: [{
      key: '',
      order: 'DESC',
    }],
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.items) !== JSON.stringify(prevState.items)) {
      return { items: nextProps.items }
    }
    return null
  }

  render() {
    return (
      <div>test</div>
    )
  }
}

export default SorTable
