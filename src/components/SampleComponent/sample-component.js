import React from "react";
import classes from './sample-component.css';

const SampleComponent = () => {
    return (
        <div className={classes.section}>
            <h3 className={classes.heading}>This is the sample component tilte</h3>
            <p>This is the sample component paragraph</p>

            <h4 className={classes.heading}>This is the sample list:</h4>
            <ul>
                <li>Sample item A</li>
                <li>Sample item B</li>
                <li>Sample item C</li>
            </ul>
        </div>
    )
};

export default SampleComponent;
