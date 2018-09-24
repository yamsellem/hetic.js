import React from 'react';

class Draggable extends React.Component {
    constructor(props) {
        super(props);

        this.dragging = false;
        this.drag = this.drag.bind(this);
        this.defaultHalf = this.defaultHalf.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
    }
    drag(e) {
        if (!this.dragging)
            return;
        
        const rect = this.props.parent.container.getBoundingClientRect();
        let ratio = Math.floor(((e.pageY - rect.top) / rect.height) * 100);
        this.props.onUpdate(ratio);
    }
    dragStart() {
        this.dragging = true;
        this.props.onUpdateStart && this.props.onUpdateStart();
    }
    dragEnd() {
        if (!this.dragging)
            return;

        this.dragging = false;
        this.props.onUpdateStop && this.props.onUpdateStop();
    }
    defaultHalf() {
        this.props.onUpdate(50);
    }
    componentDidMount() {
        this.el.addEventListener('dblclick', this.defaultHalf);
        this.el.addEventListener('mousedown', this.dragStart);
        document.addEventListener('mouseup', this.dragEnd);
        document.addEventListener('mousemove', this.drag);
    }
    componentWillUmount() {
        this.el.removeEventListener('dblclick', this.defaultHalf);
        this.el.removeEventListener('mousedown', this.dragStart);
        document.removeEventListener('mouseup', this.dragEnd);
        document.removeEventListener('mousemove', this.drag);
    }
    render() {
        return (
            <div className="divider is-draggable" ref={el => this.el = el}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Draggable;
