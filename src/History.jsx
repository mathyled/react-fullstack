


const History = ({allClicks})=> {
    if(allClicks.length === 0){
        return (
            <>
            The app is used by pressing the buttons
            </>
        )
    }
    return (
        <>
        button press history: {allClicks.join(" ")}</>
    )
}


export default History;