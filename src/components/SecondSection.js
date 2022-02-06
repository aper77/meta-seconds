import React from "react";
import LargeButton from "./LargeButton";
import SmallButton from "./SmallButton";

export default function SecondSection() {
    return (
        <div className="second-section">
            <div class="row second-section-content">
                <div class="col-8">
                    <h1>Inteligent</h1>
                    <p>(adj.): (of a device, machine, or building) able to vary its state
                        or action in response to varying situations, varying
                        requirements and past experience.</p>
                    <p>MetaEdge Technologies LLC. provides platform solutions leveraging
                        cloud technologies that make optical sensors intelligent.</p>
                    <p>Intelligent sensors utilize advanced signal processing , adaptive control,
                        data fusion and artifical intelligence to extract useful features from
                        captured data, enabling smart sensing applications.</p>
                </div>
                <div class=" col-4 btn-group-vertical second-buttons-group">
                    <LargeButton value={"Intelligent Sensor Platform "} />
                    <SmallButton styleName={"second-page-buttons"} value={"Cloud Computing "} />
                    <SmallButton styleName={"second-page-buttons"} value={"Distributed Sensors"} />
                    <SmallButton styleName={"second-page-buttons"} value={"Sensor Fusion "} />
                    <SmallButton styleName={"second-page-buttons"} value={"Device Monitoring"} />
                    <SmallButton styleName={"second-page-buttons"} value={"Data Analytics "} />
                </div>
            </div></div>
    )
}