import { FC } from "react"

interface pageProps {
  params: {
    slug: string
  }
}

const page: FC<pageProps> = ({ params }) => {
  return <div>This is a post</div>
}

export default page
