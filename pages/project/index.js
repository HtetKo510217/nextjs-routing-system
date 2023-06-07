// if project.js create before it will run , Otherwise create project folder first it will run
import Link from "next/link";
function Project () {
    return (
        <div>
            <h1>Project page</h1>
            <Link href="/project/first-project">first project </Link>
            <Link href="/project/second-project">second project </Link>
            <Link href="/project/details">Detail project</Link>
            <br></br><br></br><br></br>
            <Link href="/">Back</Link>
        </div>
    )
}

export default Project;