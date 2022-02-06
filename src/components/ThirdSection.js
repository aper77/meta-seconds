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
                <div className='text-center'>
                    <LargeButton divStyle={"btn"} value={" Cutting-Edge Optical Technologies"} />
                </div>
                <br />
                <br />
                <div className='d-flex'>
                    <SmallButton styleName={"second-page-buttons"} value={"Meta Materials"} />
                    <SmallButton styleName={"second-page-buttons"} value={"Diffractive Optics"} />
                </div>
                <div className='d-flex'>
                    <SmallButton value={"Plasmonics"} />
                    <SmallButton value={"Liquid Crystals"} />
                </div>
                <div className='text-center btns'>
                    <SmallButton value={"Active Wavefront"} />
                </div>
            </div>
        </div >
    )
}