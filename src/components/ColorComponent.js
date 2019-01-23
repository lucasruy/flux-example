import React, { Component } from 'react';

import ColorAppStore from '../stores/ColorAppStore'

class ColorComponent extends Component {
    constructor(props) {
        super(props)

        this.updateComponentColor = this.updateComponentColor.bind(this)

        this.state = {
            color: ColorAppStore.getActiveColor()
        }
    }

    componentDidMount() {
        ColorAppStore.on('storeUpdated', this.updateComponentColor)
    }

    componentWillUnmount() {
        ColorAppStore.removeListener('storeUpdated', this.updateComponentColor)
    }

    updateComponentColor() {
        this.setState({ color: ColorAppStore.getActiveColor() })
    }

    render() {
        return (
            <div className="color-container" style={{ backgroundColor: this.state.color, transition: 'all 300ms ease' }}></div>
        );
    }
}

export default ColorComponent;
