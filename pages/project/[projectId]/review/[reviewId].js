import { useRouter } from "next/router";
function Review () {
    const router = useRouter();
    const {projectId,reviewId} = router.query;
    return (
        <div>
            Review {reviewId} for project {projectId} 
        </div>
    )
}

export default Review;