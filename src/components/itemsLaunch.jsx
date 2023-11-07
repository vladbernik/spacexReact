import * as d3 from "d3";

function ItemLaunch({launch}){
    const highlightLaunchpad = () =>{
        d3.select(`circle[id='${launch.launchpad}']`).raise().style("fill", "green");
    }
    
    const removeHighlight = () =>{
        d3.select(`circle[id='${launch.launchpad}']`).raise().style("fill", "blue");
    }
    return (
        <li onMouseEnter= {highlightLaunchpad} onMouseLeave= {removeHighlight}>
          {launch.name}
        </li>
    );
}

export { ItemLaunch }