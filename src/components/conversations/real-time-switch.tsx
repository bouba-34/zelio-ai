"use client"
import React, {useRef} from 'react'
import {Switch} from "@/components/ui/switch";
import useSideBar from "@/context/use-sidebar";

const RealTimeSwitch = () => {

    const {onActivateRealtime, chatRoom, realtime} = useSideBar()

    const ref = useRef(1)
    console.log(ref.current, "is the ref and is realtime", realtime, "from the switcher")
    console.log(chatRoom, "is realtime", realtime, "from the switcher")
    ref.current += 1


    return (
        <Switch
            defaultChecked={realtime}
            onClick={(e) => onActivateRealtime(e)}
            className="data-[state=checked]:bg-gradient-to-r from-blue-500 to-cyan-500 data-[state=unchecked]:bg-gray-500"
        />
    )
}
export default RealTimeSwitch
