import { FC } from "react"

interface pageProps {
  params: { username: string }
}

const page: FC<pageProps> = ({ params }) => {
  return <div>this is the user page</div>
}

export default page
