import { useState} from "react";

const ShowMoreLess = ({ children }: { children: React.ReactNode }) => {
    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown( prevState => !prevState)
    }

    return (
        <div className="read-more-read-less">
            {isReadMoreShown ? children : ""}
            <div className="text-center">
                <a className="btn text-purple-700 bg-purple-200 hover:bg-purple-100 w-full sm:w-auto sm:mb-0" onClick={toggleBtn} href={"#moreprojects"}>{isReadMoreShown ? "Show Less" : "Show More"}</a>
            </div>
        </div>
    )
}

export default ShowMoreLess;