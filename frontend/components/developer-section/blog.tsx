import { FC } from "react"

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return (
    <div className="w-full h-auto d-block rounded-lg border-[#30363d] border-[0.5px] bg-card/80 shadow-xl dark:bg-card">
      Blog
    </div>
  )
}

export default Blog
