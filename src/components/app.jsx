import {LaunchList} from "./launchList";
import {Map} from "./map";
import {useEffect, useState} from "react";
import {SpaceX} from "../api/spacex";

function App(){

    const [launches, setLaunches] = useState([]);
    const [launchpads, setLaunchPads] = useState([]);
    const spacex = new SpaceX();
    useEffect(()=>{
        spacex.launches().then(data =>{
            setLaunches(data)
        })
    },[])
    useEffect(() => {
        spacex.launchpads().then(data =>{
            setLaunchPads(data)
        })
    },[])
    return(
        <main className='main'>
            <LaunchList launches = {launches}/>

            <Map launchpads={launchpads} />
        </main>
    );
}

export {App};
