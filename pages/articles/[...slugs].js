import { useRouter } from "next/router"

function Article () {
    const router = useRouter();
    const slugs = router.query.slugs || [];

    if (slugs.length > 1) {
        return (
        <h1>this is article is written by {slugs[0]} at {slugs[1]}/{slugs[2]}/{slugs[3]} and article name is {slugs[4]} </h1>
      )
    }
    return <h1>no article found</h1>
}

export default Article 