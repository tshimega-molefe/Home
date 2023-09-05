import { FC } from "react"

interface pageProps {
  params: {
    slug: string
  }
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      this is a blog post from the home page
    </div>
  )
}

export default page
