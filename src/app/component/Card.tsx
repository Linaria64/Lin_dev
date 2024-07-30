'use client'
import SubCard from './SubCard'

export default function Card () {
    return (
        <div>
            <div>
                <div><h2>Enter a title here</h2></div>
            </div>

            <SubCard/>
            <SubCard/>
            <SubCard/>

        </div>
    )
}