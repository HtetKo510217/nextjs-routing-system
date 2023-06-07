import { useRouter } from "next/router";
function projectDetail () {
    const router = useRouter();
    const {projectId} = router.query;
    return (
        <div>
            project detail {projectId}
        </div>
    )
}

export default projectDetail;