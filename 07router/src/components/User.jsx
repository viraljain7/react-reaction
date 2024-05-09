import { useParams } from "react-router-dom"

const User = () => {
    const { userid } = useParams()
    return (
        <div className="h-[70vh] w-[80vw] m-auto bg-blue-200">
            export default User::{userid}
        </div>
    )
}

export default User
