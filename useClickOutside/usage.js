const Example = () => {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);

    //isActive is a boolean that is true if the element is clicked and back to false if the event (mouseclick) is finished
    const [isActive] = useClickOutside(
        [ref1, ref2], //refs to the elements that should be checked
        event => console.log(event)
    );

    return (
        <div>
            <div ref={ref1} style={{ border: '1px dotted black' }}>
                You are {isActive ? 'clicking' : 'not clicking'} outside of this div
            </div>
            <br />
            <div ref={ref2} style={{ border: '1px dotted black' }}>
                You are {isActive ? 'clicking' : 'not clicking'} outside of this div
            </div>
        </div>
    );
};