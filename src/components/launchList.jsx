import {useState} from "react";
import * as d3 from "d3";
import { ItemLaunch } from "./itemsLaunch";
function LaunchList(props) {
    return (
        <aside className="aside" id="launchesContainer">
            <h3>Launches</h3>
            <div id="listContainer">


                <ul>
                    {props.launches.map(launch => {
                        return <ItemLaunch  launch = {launch} key={launch.id} />;
                    })}
                </ul>
            </div>
        </aside>
    );
}

export {LaunchList}