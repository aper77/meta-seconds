import React from "react";
import LargeButton from "./LargeButton";
import SmallButton from "./SmallButton";

export default function ThirdSection() {
    return (
        <div className="third-section">
            <div className="col-8">
                <h1>Optical Sensors</h1>
                <p>(n.): Devices which detect or measure light
                    and record, indicate, or otherwise responds to it</p>
                <p>MetaEdge Technologies LLC. provides innovative optical sensor
                    solutions that incorporate cutting-edge optical technologies
                    to enable intelligent sensor applications</p>
                <div className='text-center web'>
                    <LargeButton divStyle={"btn"} value={" Cutting-Edge Optical Technologies"} />
                    <div className='d-flex'>
                        <SmallButton styleName={"second-page-buttons"} value={"Meta Materials"} />
                        <SmallButton styleName={"second-page-buttons"} value={"Diffractive Optics"} />
                    </div>
                    <div className='d-flex'>
                        <SmallButton styleName={"second-page-buttons"} value={"Plasmonics"} />
                        <SmallButton styleName={"second-page-buttons"} value={"Liquid Crystals"} />
                    </div>
                    <div className='text-center'>
                        <SmallButton styleName={"second-page-buttons"} value={"Active Wavefront"} />
                    </div>
                </div>
                <div class="btn-group-vertical mobile-btn">
                    <SmallButton styleName={"mobile-btns"} value={"Distributed"} />
                    <SmallButton styleName={"mobile-btns"} value={"Sensor Fusion "} />
                    <SmallButton styleName={"mobile-btns"} value={"Device Monitoring"} />
                    <SmallButton styleName={"mobile-btns"} value={"Data Analytics "} />
                </div>
            </div>
        </div >
    )
}