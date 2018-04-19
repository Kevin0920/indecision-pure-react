let visibility = false;

const toggleVis = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <di>
            <h1>Visibility Toggle Button</h1>
            <button onClick= {toggleVis}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {
                visibility && (
                    <div>
                        <h3>Hey, here are some details showing here!</h3>
                    </div>
                )
            }

        </di>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();