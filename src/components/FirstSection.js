import React from "react";
import SmallButton from "./SmallButton";

export default function FirstSection() {
    return (
        <div className="first-section">
            <h1>Creating next generation intelligent sensors<br />
                using cutting-edge optical technologies.</h1>
            <p>MetaEdge Technologies LLC. is an optical instrumentation company that designs,<br />
                develops and commercializes intelligent optical sensors that make use of high -<br />
                precision nanoscale featured components.
            </p>
            <p>
                We combine intelligent platforms with active, diffractive and meta optics to create low<br />
                cost optical instruments with new sensing capabilities, improved performance,<br />
                increased efficiency and decreased size.
            </p>
            <div class="d-inline p-2">
                <SmallButton value={"Intelligent"} />
                <SmallButton value={"Sensors"} />
            </div>
        </div>
    )
}