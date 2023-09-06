import { FC } from "react"

interface pageProps {
  params: { username: string }
}

const page: FC<pageProps> = ({ params }) => {
  return <div>This is a dashboard</div>
}

export default page
