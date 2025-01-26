import { useRouter } from "next/router"

function UserId() {
    const router = useRouter();
    const id = router.query.userId;
  return (
    <p>user {id}</p>
  )
}

export default UserId