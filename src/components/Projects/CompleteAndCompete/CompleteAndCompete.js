import React, { Component, useEffect } from "react";

import "./CompleteAndCompete.css";

function CompleteAndCompete() {

    return (
        <div>
            <section className="title" id="cc__header">
                <div className="column SelectedWord__information">
                    <h4 className="text-light">Complete and Compete</h4>
                    <div className="md-chips">
                        <div className="text-light md-chip">Web development</div>
                        <div className="text-light md-chip">React</div>
                        <div className="text-light md-chip">Side project</div>
                        <div className="text-light md-chip">Work in progress</div>
                    </div>
                    <p className="SelectedWord__description">
                        A chest x-ray exposes patients to about .1 millisieverts. So... what does that mean?
                        NuclearNana is an interactive experience designed to break down barriers in understanding radiation.
                    </p>
                    <div className="links">
                        <a className="underline_link" href="https://github.com/benjaminlapidus/howmanybananas">
                            Source Code →
                        </a>
                    </div>
                </div>

            </section>

            <section>

            </section>

        </div>
    );
}

export default CompleteAndCompete;