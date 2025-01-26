import { useRouter } from "next/router";

function courses() {
    const router = useRouter();
    console.log(router)
    const { studentId , courseId} = router.query;
  return (
    <h1>Detail of courses {courseId} for student {studentId}</h1>
  )
}

export default courses