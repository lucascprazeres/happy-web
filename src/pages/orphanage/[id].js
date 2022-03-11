import { useRouter } from "next/router"

export default function Orphanage() {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <h1>Orfanato {id}</h1>
  )
}