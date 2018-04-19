'use strict';

var visibility = false;

var toggleVis = function toggleVis() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'di',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle Button'
        ),
        React.createElement(
            'button',
            { onClick: toggleVis },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'Hey, here are some details showing here!'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
