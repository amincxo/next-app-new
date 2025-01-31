import { useRouter } from "next/router"

function UserId() {
    const router = useRouter();
    const id = router.query.userId;
  return (
    <h1>user {id}</h1>
  )
}

export default UserId