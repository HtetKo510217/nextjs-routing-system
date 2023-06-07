import { useRouter } from "next/router";
function Docs () {
    const router = useRouter();
    const {params =[]} = router.query;
    console.log(params);
    if(params.length === 2) {
        return (
            <div>Viewing docs features {params[0]} and concept {params[1]}</div>
        )
    } else if (params.length === 1) {
        return (
            <div>Viewing docs features {params[0]} </div>
        )
    }
    return (
        <div>Doc pages {params}</div>
    )
}

export default Docs;