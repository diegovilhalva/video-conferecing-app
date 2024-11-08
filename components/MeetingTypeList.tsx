"use client"

import { useState } from "react"
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation"
import MeetingModal from "./MeetingModal"


const MeetingTypeList = () => {
    const [meetingState,setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' |undefined>()
    const router = useRouter()

    const createMeeting = () => {
        
    }
    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <HomeCard image="/icons/add-meeting.svg" title="New Meeting" description="Start an instant meeting" handleClick={() => setMeetingState('isInstantMeeting')} className="bg-orange-1"/>
            <HomeCard image="/icons/schedule.svg" title="Schedule Meeting" description="Plan your meeting" handleClick={() => setMeetingState('isScheduleMeeting')}  className="bg-blue-1" />
            <HomeCard image="/icons/recordings.svg" title="View Recordings" description="Check out your recordings" handleClick={() => router.push("/recordings")} className="bg-purple-1" />
            <HomeCard image="/icons/join-meeting.svg" title="Join Meeting" description="via invitation link" handleClick={() => setMeetingState('isJoiningMeeting')} className="bg-yellow-1" />
            <MeetingModal isOpen={meetingState === 'isInstantMeeting'} onClose={() => setMeetingState(undefined)} title="Start an Instant Meeting" buttonText="Start Meeting" className="text-center" handleClick={createMeeting} />
        </section>
    )
}

export default MeetingTypeList