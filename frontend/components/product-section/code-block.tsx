import { FC } from "react"

interface CodeBlockProps {}

const CodeBlock: FC<CodeBlockProps> = ({}) => {
  return (
    <div className="flex-1 overflow-x-auto text-[16px]">
      <pre className="text-white">
        <pre className="text-white">
          <code>
            <span className="pl-e">class</span>&nbsp;
            <span className="text-yellow-500">Administration</span>&nbsp;
            <span className="text-yellow-500">(</span>
            <span className="pl-ent">models.Model</span>
            <span className="text-yellow-500">)</span>:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span>full_name</span>
            &nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">CharField</span>
            <span className="text-yellow-500">(</span>
            <span className="text-blue-500">max_length</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="pl-k">64</span>
            <span className="text-yellow-500">)</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span>email</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">EmailField</span>
            <span className="text-yellow-500">()</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>mobile_number</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">CharField</span>
            <span className="text-yellow-500">(</span>
            <span className="text-blue-500">max_length</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="pl-k">12</span>
            <span className="text-yellow-500">)</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span>company_size</span>
            &nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">CharField</span>
            <span className="text-yellow-500">(</span>
            <span className="text-blue-500">max_length</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="pl-k">12</span>
            <span className="text-yellow-500">)</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span>services</span>
            &nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">CharField</span>
            <span className="text-yellow-500">(</span>
            <span className="text-blue-500">max_length</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="pl-k">32</span>
            <span className="text-yellow-500">)</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span>other</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">TextField</span>
            <span className="text-yellow-500">()</span>
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="pl-e">def</span>
            &nbsp;<span className="pl-ent">__str__</span>(
            <span className="text-green-200">self</span>):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="pl-e">return</span>&nbsp;
            <span className="text-blue-500">f</span>'
            <span>
              <span className="text-yellow-500">&#123;</span>
              <span className="text-blue-300">self</span>.full_name
              <span className="text-yellow-500">&#125;</span>&nbsp;
              <span className="text-yellow-500">-</span>&nbsp;
              <span className="text-blue-300">self</span>.services
              <span className="text-yellow-500">&#125;</span>'
            </span>
          </code>
        </pre>
      </pre>
    </div>
  )
}

export default CodeBlock
