import React from 'react';

import classnames from './classnames';
import Divider from './divider.jsx';
import Draggable from './draggable.jsx';
import Result from './result.jsx';

class BaseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftRatio: 50,
            rightRatio: 50,
            draggingRight: false
        };
    }
    updateDragLeft(ratio) {
        this.setState({leftRatio: ratio})
    }
    updateDragRight(ratio) {
        this.setState({rightRatio: ratio})
    }
    updateDragRightToggle(dragging) {
        this.setState({draggingRight: dragging})
    }
    render() {
        return (
            <div className="columns is-gapless is-mobile h-editor" ref={el => this.container = el}>
                <div className="column is-half">
                    <Divider title="HTML"></Divider>
                    <div className="columns" style={{flexBasis: this.state.leftRatio + '%' }}>
                        <div className="column is-paddingless">
                            {this.props.htmlEditor}
                        </div>
                    </div>
                    <Draggable title="JavaScript" parent={this} onUpdate={this.updateDragLeft.bind(this)} />
                    <div className="columns" style={{flexBasis: 100 - this.state.leftRatio + '%' }}>
                        <div className="column is-paddingless">
                            {this.props.jsEditor}
                        </div>
                    </div>
                </div>
                <div className="column is-half">
                    <Divider title="CSS"></Divider>
                    <div className="columns" style={{flexBasis: this.state.rightRatio + '%' }}>
                        <div className="column is-paddingless">
                            {this.props.cssEditor}
                        </div>
                    </div>
                    <Draggable title="Result" parent={this} onUpdate={this.updateDragRight.bind(this)} onUpdateStart={this.updateDragRightToggle.bind(this, true)} onUpdateStop={this.updateDragRightToggle.bind(this, false)} />
                    <div className="columns" style={{flexBasis: 100 - this.state.rightRatio + '%' }}>
                        <div className="column is-paddingless" ref={el => this.frame = el}>
                            <Result className={classnames({'is-hidden': this.state.draggingRight})} js={this.props.js} css={this.props.css} html={this.props.html} resources={this.props.resources} />
                            <div className={classnames({'is-hidden': !this.state.draggingRight})}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseEditor;
