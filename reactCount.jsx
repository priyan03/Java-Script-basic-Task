import { useState } from "react"

const Task1 = () => {
    const [num, setNum] = useState(0);
    const handleClick = () =>{
        console.log('Count')
        setNum(num + 1);
    }

  return (
    <div>
        <Box border={1} borderColor="black" width="50px" textAlign="center" mb={2}>{num}</Box>
        <button onClick={handleClick}>Count</button>
    </div>
  )
}

export default Task1
