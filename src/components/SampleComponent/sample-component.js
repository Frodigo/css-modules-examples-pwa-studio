import React from "react";
import classes from './sample-component.css';
import './global-styles.css'

const SampleComponent = () => {
    return (
        <div className={classes.section}>
            <header className={classes.sampleHeader}>Everything what you need to know about CSS modules</header>
            <h3 className={classes.heading}>This is the sample component tilte</h3>
            <p>This is the sample component paragraph</p>
            <p className="global-class-name">This is paragraph with global styles appiled</p>

            <h4 className={classes.secondaryHeading}>This is the sample list:</h4>
            <h5 className={classes.redHeading}>Sample red heading</h5>
            <ul className={classes['my-sample-class']}>
                <li>Sample item A</li>
                <li>Sample item B</li>
                <li>Sample item C</li>
            </ul>
        </div>
    )
};

export default SampleComponent;
